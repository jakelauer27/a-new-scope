import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { fetchTitleScroll } from '../../utils/api/apiCalls'

const mockFilm = {
  title: 'ep1',
  release_date: '1995',
  opening_crawl: 'starwars'
}

const mockFilms = {
  results: [mockFilm, mockFilm, mockFilm, mockFilm, mockFilm, mockFilm, mockFilm, mockFilm]
}

jest.mock('../../utils/api/apiCalls')
jest.mock('../Stars/Stars')

beforeAll(() => {
  fetchTitleScroll.mockImplementation(() => mockFilms)
})

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('on page load error state should be false', () => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true })
    expect(wrapper.state().error).toEqual(false)
  })

  it('should match the snapshot when loading', () => {
    wrapper.setState({
      landingScroll: mockFilm
    })
    expect(wrapper).toMatchSnapshot()
  })

  it('should match the snapshot when page is loaded', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('ComponentDidMount', () => {
    it('Should call handleTitleScroll', () => {
      wrapper = shallow(<App />, { disableLifecycleMethods: true })
      const spy = jest.spyOn(wrapper.instance(), 'handleTitleScroll')

      wrapper.instance().componentDidMount()
      expect(spy).toHaveBeenCalled()
    })
  })

  describe('HandleTitleScroll', () => {
    describe('Success', () => {
      it('should update landingScroll in state if fetch is successful', async () => {
        const expectedState = {
          title: 'ep1',
          year: '1995',
          text: 'starwars'
        }

        await wrapper.instance().handleTitleScroll()
        expect(wrapper.state().landingScroll).toEqual(expectedState)
      })
    })

    describe('Error', () => {
      it('should update currentPage to error in state if fetch rejects', async () => {
        fetchTitleScroll.mockImplementation(() => {
          throw new Error('Could not fetch')
        })

        const expectedState = true

        await wrapper.instance().handleTitleScroll()
        expect(wrapper.state().error).toEqual(expectedState)
      })
    })
  })

  describe('handleStoreData', () => {
    let storeDataSpy
    let storeFavoriteSpy
    let updateStoredDataSpy

    beforeEach(() => {
      storeDataSpy = jest.spyOn(wrapper.instance(), 'storeData')
      storeFavoriteSpy = jest.spyOn(wrapper.instance(), 'storeFavorite')
      updateStoredDataSpy = jest.spyOn(wrapper.instance(), 'updateStoredData')
    })

    it('Should call storeFavorite and updateStoredData functions if category is favorites', () => {
      wrapper.instance().handleStoreData('favorites', [{ name: 'data' }], true, 'people')

      expect(storeFavoriteSpy).toHaveBeenCalled()
      expect(updateStoredDataSpy).toHaveBeenCalled()
    })

    it('Should call storeData if category isnt favorites', () => {
      wrapper.instance().handleStoreData('vehicles', [{ name: 'data' }])

      expect(storeDataSpy).toHaveBeenCalled()
    })
  })

  describe('storeData', () => {
    it('Should reassign storedData in local storage to a new object with the new category data included', () => {
      const mockPeople = [{ name: 'Luke', species: 'human', favorite: false }]
      const mockPlanets = [{ name: 'Alderaan', terrain: 'grassland' }]

      const expected = {
        planets: mockPlanets,
        people: mockPeople
      }

      localStorage.setItem('storedData', JSON.stringify({ people: mockPeople }))
      wrapper.instance().storeData('planets', mockPlanets)
      const result = JSON.parse(localStorage.getItem('storedData'))

      expect(result).toEqual(expected)
    })
  })

  describe('updateStoreData', () => {
    it('Should find the card to be updated in localstorage and replace it with the changed card', () => {
      const newCard = { name: 'Luke', species: 'human', favorite: true }

      wrapper.instance().updateStoredData('people', newCard)
      const result = JSON.parse(localStorage.getItem('storedData')).people

      expect(result).toEqual([newCard])

      localStorage.removeItem('storedData')
    })
  })

  describe('storeFavorite', () => {
    it('Should push in the new favorited card to local storage if it is a new favorite', () => {
      const newCard = { name: 'Luke', species: 'human', favorite: true }
      localStorage.removeItem('favorites')

      wrapper.instance().storeFavorite(newCard, true)
      const result = JSON.parse(localStorage.getItem('favorites'))

      expect(result).toEqual([newCard])
    })

    it('Should remove the favorite from local storage if the favorite was removed', () => {
      const newCard = { name: 'Luke', species: 'human', favorite: false }

      wrapper.instance().storeFavorite(newCard, false)
      const result = JSON.parse(localStorage.getItem('favorites'))

      expect(result).toEqual([])

      localStorage.removeItem('favorites')
    })
  })
})
