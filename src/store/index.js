import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pathList: [
      { id: "1", title: 'Пересеченка', url: './img/main/path7.jpg', lvl: '4', capacity: '8' },
      { id: "2", title: 'Опасный  горный', url: './img/main/path9.jpg', lvl: '5', capacity: '6' },
      { id: "3", title: 'Безмятежный луговой', url: './img/main/path3.jpg', lvl: '3', capacity: '10' },
      //  надо убрать
      { id: "4", title: 'Однодневный поход', url: './img/main/path1.jpg', lvl: '1', capacity: '10' },
      { id: "5", title: 'Недельный тревел', url: './img/main/path4.jpg', lvl: '5', capacity: '16' },
      { id: "6", title: 'Активные выходные', url: './img/main/path4.jpg', lvl: '1', capacity: '12' }
    ],
    // visible: false,
  },
  getters: {
    getPath: (state) => state.pathList,
    // getVisible: (state) => state.visible

  },
  mutations: {


  },
  actions: {
  },
  modules: {
  }
})
