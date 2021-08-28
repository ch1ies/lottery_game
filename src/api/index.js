import {api, jsonApi} from './axios'
// import qs from 'qs'
export const getAllData = (req) => {
  return api.get('/all', {
    params: req
  })
}

export const computerPrizeRate = (req) => {
  return api.get('/click', {
    params: req
  })
}

export const updaeData = (req) => {
  return jsonApi.post('/update', JSON.stringify(req))
}
