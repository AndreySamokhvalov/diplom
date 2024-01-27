import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pathList: [
      { id: "1", title: 'Пересеченка', url: 'https://go-travel.ru/upload/iblock/6f8/y5eqqvxctv0m5bs0yntz088ok6kmcj3j/peshie_turisticheskie_marshruty_samye_krasivye_mesta_rossii_dlya_pokhodov.jpg', lvl: '1', capacity: '8' },
      { id: "2", title: 'Опасный горный', url: 'https://sun9-28.userapi.com/impg/JD3MyUB7KMtRc5FGhWY68cb6gBRV3J1Zap-2vg/SEcSJCwmzYI.jpg?size=1280x853&quality=95&sign=70c61f0d479269c79e6be867ae696684&c_uniq_tag=7_e5poqa0JttjyFF7KqB2FAgMxoiaG8OnuJLBHzdxDo&type=album', lvl: '2', capacity: '6' },
      { id: "3", title: 'Безмятежный луговой', url: 'https://мои-правила.рф/wp-content/uploads/2018/05/2.jpg', lvl: '3', capacity: '10' },
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
