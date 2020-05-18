import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas: [{
        id: 1,
        nombre: 'Manzana',
        cantidad: 0
      },
      {
        id: 2,
        nombre: 'Pera',
        cantidad: 3
      },
      {
        id: 3,
        nombre: 'Naranja',
        cantidad: 9
      }
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
})
