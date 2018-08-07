import axios from 'axios'
import { procedureData } from './procedureData'

const API_KEY = '53cf4cd56281775fc6fe713f4ab77bac'
const DOCTORS_API = 'https://api.betterdoctor.com/2016-03-01/doctors'

export const generateVisits = async () => {
  try {
    var visits = []
    const doctors = await fetchDoctors()

    doctors.map((doctor, index) => {
      var procedure1 = randomItem(procedureData)
      var procedure2 = randomItem(procedureData)
  
      visits.push({
        id: index,
        date: new Date(),
        doctor: doctor,
        procedures: [procedure1, procedure2],
        totalCost: (procedure1.cost + procedure2.cost).toFixed(2)
      })
    })

    return visits

  } catch (e) {
    console.log(e)
    return []
  }
}

fetchDoctors = async () => {
  try {
    const response = await axios.get(DOCTORS_API, {
      params: {
        location: '37.773,-87.6270172,100',
        skip: 2,
        limit: 10,
        user_key: API_KEY
      }
    })

    return response.data.data

  } catch(e) {
    console.log(e)
  }
}

randomItem = (items) => {
  return items[Math.floor(Math.random()*items.length)] 
}