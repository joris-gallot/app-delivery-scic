import api from './api'

export default {
  async getAllProducts() {
    const { data } = await api().get('/products')
    return data
  },

  async createProduct(payload) {
    const { data } = await api().post('/products', payload)
    return data
  },
}
