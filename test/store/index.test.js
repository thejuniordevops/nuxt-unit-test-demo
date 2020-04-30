import Vuex from "vuex"
import { createLocalVue } from "@vue/test-utils"
import storeIndex from '~/store'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = storeIndex()

describe('store test', () => {
  it('should create Vuex store and load module gachacat on createStore', () => {
    const oneOfGachaCatGetters = {'gachacat/getRandomedCat': "/cover.jpg"}
    expect(store.getters).toEqual(expect.objectContaining(oneOfGachaCatGetters))
  })
})
