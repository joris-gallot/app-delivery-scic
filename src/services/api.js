import axios from 'axios'
import store from '@/store'

export default () => {
  const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
  })

  if (store.state.isUserLoggedIn) {
    api.defaults.headers.common.Authorization = `Bearer ${store.state.token}`
  } else {
    api.defaults.headers.common.Authorization = null
  }

  return api
}
