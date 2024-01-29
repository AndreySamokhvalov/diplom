<template>
  <div class="form-backdrop center" @click=closeForm()>
    <!-- <div class="exit_button" @click=closeForm()>
        <img src="../assets/close.svg" alt="close" class="exit_button_elem">
      </div> -->
    <div class="form center" @click.stop>
      <div class="text__request">
        <H1 class="request_text_title">Оставьте заявку</H1>
        <p class="request_text_desk">наши менеджеры свяжутся с Вами в течении 15 минут</p>
      </div>
      <!-- <button type="button" class="btn-close" @click=closeForm()>x</button> -->

      <form class="imput__form" @submit.prevent="sendData">
        <div class="form-control">
          <!-- <label for="name">Name</label> -->
          <input class="form_input" v-model="name" placeholder="Ваше имя" id="name" type="text">
        </div>
        <div class="form-control">
          <!-- <label for="email">Email</label> -->
          <input class="form_input" v-model="email" id="email" placeholder="Ваш Email" type="email">
        </div>
        <div class="form-control">
          <!-- <label for="address">Address</label> -->
          <input class="form_input" v-model="address" id="address" placeholder="Ваш номер телефона" type="text">
        </div>
        <div class="form-control gender">
          <!-- <label for="gender">Gender</label> -->
          <span>Male <input v-model="gender" id="gender" type="radio" value="male"></span>
          <span>Female <input v-model="gender" id="gender" type="radio" value="female"></span>
        </div>
        <!-- //==============================---------=============================== -->
        <div class="form-control">
          <select class="form_input" v-model="path" id="path" type="text">
            <option style="text-indent: 25px;" disabled value=""> Выберете вариант из предложенных</option>
            <option for="path" v-for="option in gPath" :value="option.title">
              {{ option.title }}
            </option>
          </select>
        </div>


        <input type="submit" class="send" value="Send">
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  name: "form",

  data: function () {
    return {
      name: '',
      email: '',
      address: '',
      gender: '',
      path: '',
      visible: true,

    }

  },
  methods: {



    async sendData() {
      // console.log(await axios({
      await axios({
        url: 'http://localhost:3000/api/records',
        method: 'post',
        data: {
          name: this.name,
          email: this.email,
          address: this.address,
          gender: this.gender,
          path: this.path
        },

      });
      this.$router.push('about');
    },
    closeForm() {
      this.$emit('close');

    },
  },

  computed: {

    gPath() {
      return this.$store.getters.getPath
    },

  },
}
</script>

<style lang="scss" scoped>
.form-backdrop {

  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  display: flex;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  background-image: url("../assets/form_bgc.jpg");
  width: 890px;
  height: 770px;
  border-radius: 12px;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;
}



.form-control {
  padding: 5px;

  
}

.exit_button_elem {
  position: relative;
  left: 1050px;
  top: -360px
}

.imput__form {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  height: 480px;
  justify-content: space-evenly;
}

.form-control label {
  display: block;
}

.send {
  margin: 5px;
  width: 574px;
  height: 50px;
  border-radius: 26px;
  background-color: $btn_color;
  margin-top: 12px;
  margin-bottom: 12px;

}

.prevue {
  height: 20px;
  width: 20px;
}

span {
  color: #FFFFFF;
}

.request_text_title {
  color: $textColorContrast;
  text-align: center;
  font-family: "Despair Display";
  font-size: 60px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;

}

.request_text_desk {
  color: $textColorContrast;
  text-align: center;
  font-family: Lack;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

}

.gender {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 26px;

  color: $textColorLack;
  // text-align: center;
  font-family: Lack;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.home {
  display: flex;
  flex-direction: column;
}

.form_input {
  width: 574px;
  height: 50px;
  border-radius: 26px;
  padding-left: 16px;
  box-sizing: border-box;

  color: $textColorLack;
  // text-align: center;
  font-family: Lack;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
}

.option {}
</style>
