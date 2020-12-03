import api from './api'

export default {
  async login(payload) {
    const { data } = await api().post('/login', payload)
    return data
  },

  async register(payload) {
    const { data } = await api().post('/register', payload)
    return data
  },
}
