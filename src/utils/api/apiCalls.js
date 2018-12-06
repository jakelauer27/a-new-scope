export const fetchTitleScroll = async () => {
  const response = await fetch('https://swapi.co/api/films/')
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Internal Server Error')
  }
}

export const getCategoryData = async (category) => {
  const response = await fetch(`https://swapi.co/api/${category}`)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Internal Server Error')
  }
}

export const buildCategoryObj = async (category) => {
  const data = await getCategoryData(category)

  let categoryData = ''

  switch(category) {
    case 'people':
      categoryData = await getPeople(data.results)
      break;
    case 'vehicles':
      categoryData = await getVehicles(data.results)
      break;
    case 'planets':
      categoryData = await getPlanets(data.results)
      break;
    default: 
      break;
  }

  return categoryData
}

export const getPeople = (people) => {
  const unresolvedPromises = people.map(async person => {
    const homeworld = await fetch(person.homeworld)
    const homeData = await homeworld.json()
    const species = await fetch(person.species)
    const speciesData = await species.json()
    return {
      name: person.name,
      type: speciesData.name,
      main1: person.height,
      main2: person.mass,
      secInfoMain: homeData.name,
      secInfoOther: convertPopulation(homeData.population)
    }
  })
  return Promise.all(unresolvedPromises)
}

export const getPlanets = (planets) => {
  const unresolvedPromises = planets.map(async planet => {
    const residents = await getResidents(planet.residents)
    return {
      name: planet.name,
      type: planet.terrain,
      main1: convertPopulation(planet.population),
      main2: planet.climate,
      secInfoMain: residents,
      secInfoOther: ''
    }
  })
  return Promise.all(unresolvedPromises) 
}

export const getResidents = (residents) => {
  const unresolvedPromises = residents.map(async residentLink => {
    const resident = await fetch(residentLink)
    const residentData = await resident.json()
    return residentData.name
  })
  return Promise.all(unresolvedPromises)
}

export const getVehicles = (vehicles) => {
  return vehicles.map(vehicle => {
    return {
      name: vehicle.name,
      type: 'vehicle',
      main1: vehicle.vehicle_class,
      secInfoMain: vehicle.passengers,
      secInfoOther: ''
    }
  })
}

export const convertPopulation = (population) => {
  let returnPop = population
  if (population > 1000) {
    returnPop =  `${population / 1000}K`
  }
  if (population > 1000000) {
    returnPop = `${population / 1000000} million`
  }
  if (population > 1000000000) {
    returnPop = `${population / 1000000000} billion`
  }
  return returnPop  
}
