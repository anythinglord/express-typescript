import { NewDiaryEntry } from './types'
import { Weather, Visibility } from './enums'

const parseComment = (commentForRequest: any): string => {
  if (!isString(commentForRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentForRequest
}

const parseDate = (dateForRequest: any): string => {
  if (!isString(dateForRequest) || !isDate(dateForRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateForRequest
}

const parseWeather = (weatherForRequest: any): Weather => {
  if (!isString(weatherForRequest) || !isWeather(weatherForRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherForRequest
}

const parseVisibility = (visibilityForRequest: any): Visibility => {
  if (!isString(visibilityForRequest) || !isVisibility(visibilityForRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return visibilityForRequest
}

const isString = (string: string): boolean => typeof string === 'string'
const isDate = (date: string): boolean => Boolean(Date.parse(date))
const isWeather = (weather: any): boolean => Object.values(Weather).includes(weather)
const isVisibility = (visibility: any): boolean => Object.values(Visibility).includes(visibility)

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}

export default toNewDiaryEntry
