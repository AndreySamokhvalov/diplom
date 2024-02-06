<template>
  <div class="modal">
    <div @click="closeModal" class="modal-backdrop">
      <div class="modal-container">
        <div @click.stop class="modal-content">
          <div class="modal__img">
            <img :src=itemData.url alt="" class="modal__img_el">
            <div class="item_capacity">
              <span class="item_capacity_text">
                вместимость группы:
              </span>
              <span class="item_capacity_int item_capacity_text">
                {{ itemData.capacity }}
              </span>
            </div>
            <div class="item_complexity">
              <span class="item_complexity_text">
                сложность:
              </span>
              <span class="item_complexity_int item_complexity_text ">
                {{ itemData.lvl }}
              </span>
            </div>
          </div>
          <div class="modal__desk">
            <!-- <div class="exit">
              <img @click="closeModal" src="../assets/close_btn.svg" alt="" class="exit_elem">
            </div> -->
            <div class="modal-header">

              {{ itemData.title }}
            </div>
            <div class="modal-body">
              {{ itemData.description }}
            </div>
            <footer class="modal-footer">
              <button class="modal__btn btns_config_for_blue" @click="show()">
                оформить заявку
              </button>
            </footer>
          </div>

        </div>
      </div>
    </div>
    <FoRma v-show="visible" @close="show()" />
  </div>
</template>
  
<style lang="scss" scoped >
.gtr {
  width: 20px;
  height: 10px;
  background-color: #290909;
}

.modal-content {
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 1s;
}

.modal {
  overflow: hidden;
  display: flex;
  -webkit-animation-name: fadeIn;
  /* Fade in the background */
  -webkit-animation-duration: 1.2s;




  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    // border-radius: 36px;
    background-color: rgba(96, 94, 94, 0.6);
    transition: opacity 0.3s ease;
    z-index: 80;
    transition: all .3s;
  }

  &-container {
    position: fixed;
    top: 180px;
    right: 0;
    left: 36px;
    bottom: 0;
    width: auto;
    margin: 16px;


  }

  //  настройки фона и другие для модального окна
  &-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 100%;
    height: 550px;
    max-width: 900px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 36px;
    color: #000;
    background-color: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease;
    position: relative;
    right: 20px;
    top: -45px;
    overflow-x: auto;
    z-index: 23;
    border: 3px solid #19A2DC;
    align-items: flex-start;
  }
 img{
    width: 325px;
    height: 475px;
  }

  .exit_elem {
    // position: relative;
    margin-left: 480px;
    top: 10px;
    z-index: 6;
    fill: var(--txt_white, #FFF);
    opacity: 0.5;
    // transition: all .3s;

    &:hover {
      width: 85px;
      height: 85px;
      top: -5px;
      //  компенмация увеличения
      margin-bottom: -25px;
      // transform: transition all .3s;

    }

  }

  &-header {
    padding-top: 40px;
    padding-bottom: 16px;
    font-size: 25px;
    text-align: center;
  }

  &-footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80px;
    text-align: center;
  }
}

.item_capacity {
  max-width: 330px;
  display: flex;
  position: relative;
  // left: 18px;
  top: 0px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  transition: all .3s;

  &_text {
    color: $headerColor;
    font-family: Lack;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.item_complexity {
  width: 320px;
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  top: 0px;
  // left: 18px;
  transition: all .3s;


  &_text {
    color: $headerColor;
    font-family: Lack;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

}

.modal__desk {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
}

.modal-body {
  padding-top: 40px;
  text-align: left;
  max-width: 600px;
  height: auto;
  margin-left: 24px;
}
.modal-footer{
  margin-top: 60px;
}
.modal__btn {
 
  color: $textColorContrast;
  font-family: Lack;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  width: 356px;
  padding: 16px 65px;
  justify-content: center;
  align-items: center;
  border-radius: 60px;

  margin-top: 60px;
  margin-bottom: 90px;
}
@media (max-width: 1020px) and (min-width: 766px) {
  .modal-content{
    overflow: hidden;
  height: 620px;
}
.modal__btn{
  width: 320px;
  margin-top: 20px;
}
.modal-body {
  padding-top: 20px;
  text-align: left;
  max-width: 600px;
  height: auto;
  margin-left: 24px;
}
}
@media (max-width: 767px) and (min-width: 420px) {
  .modal__img{
    display: none;
  }
.modal-content{
  display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 100%;
    height: 650px;
    max-width: 425px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 36px;
    color: #000;
    background-color: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease;
    position: relative;
    right: 20px;
    top: -45px;
    overflow-x: auto;
    z-index: 23;
    border: 3px solid #19A2DC;
    align-items: flex-start;
}
.modal__btn{
  width:330px;
}
}
</style>

<script>
import FoRma from '@/components/FoRma.vue';
export default {
  name: 'Modal',
  props: ["itemData"],
  data() {

    return {
      visible: false,
      title: ""

    }

  },
  components: {
    FoRma
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    show() {
      this.visible = !this.visible
    }
  },
  mounted() {
    Event.$on('data-title', title => {
      this.title = title;
    })

  }
};
</script>