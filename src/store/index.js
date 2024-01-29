import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pathList: [
      { id: "1", title: 'Пересеченая местность', url: './img/main/path7.jpg', lvl: '4', capacity: '8', rating: '4.3'},
      { id: "2", title: 'Опасный горный тур', url: './img/main/path9.jpg', lvl: '5', capacity: '6', rating: '4.4' },
      { id: "3", title: 'Безмятежный луговой', url: './img/main/path3.jpg', lvl: '3', capacity: '10', rating: '4.8' },
      { id: "4", title: 'Однодневный поход', url: './img/main/path1.jpg', lvl: '1', capacity: '10', rating: '4.5' },
      { id: "5", title: 'Недельный тревел', url: './img/main/path2.jpg', lvl: '5', capacity: '16', rating: '4.1' },
      { id: "6", title: 'Активные выходные', url: './img/main/path4.jpg', lvl: '1', capacity: '12', rating: '4.7' }
    ],
    // visible: false,
  },
  getters: {
    getPath: (state) => state.pathList,
    // getVisible: (state) => state.visible

  },
  mutations: {
    SET_PATHLIST(state, myPath) {
      state.pathList = myPath;
    }


  },
  actions: {
    SET_PATHLIST(context){
      context.commit('context')

    }

  },
  modules: {
  }
})
