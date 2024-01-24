<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<div class="test">
  <h1 class="test_one">привет</h1>
</div>
    <form @submit.prevent="sendData">
      <div class="form-control">
        <label for="name">Name</label>
        <input v-model="name" id="name" type="text">
      </div>
      <div class="form-control">
        <label for="email">Email</label>
        <input v-model="email" id="email" type="email">
      </div>
      <div class="form-control">
        <label for="address">Address</label>
        <input v-model="address" id="address" type="text">
      </div>
      <div class="form-control">
        <label for="gender">Gender</label>
        <span>Male <input v-model="gender" id="gender" type="radio" value="male"></span>
        <span>Female <input v-model="gender" id="gender" type="radio" value="female"></span>
      </div>
      <!-- //==============================---------=============================== -->
      <div class="form-control">
        <select v-model="path" id="path" type="text" >
          <option disabled value="">Выберите один из вариантов</option>
          <option for="path" v-for="option in gPath" :value="option.title" >
            {{ option.title }} 
          </option>
   

        </select>
      </div>


      <input type="submit" class="send" value="Send">
    </form>
  </div>
</template>

<script>
import axios from 'axios';
// import { mapGetters } from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",
  data: function () {
    return {
      name: '',
      email: '',
      address: '',
      gender: '',
      path: '',
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
    }
  },
  computed: {
    //   ...mapState([]),
    //   ...mapGetters(["getPath"]),
    gPath() {
          // const pathArr = this.$store.getters.getPath
          return this.$store.getters.getPath
        }

  },
}



</script>

<style lang="scss" scoped>
.form-control {
  padding: 5px;
}

.form-control label {
  display: block;
}

.send {
  margin: 5px
}

.prevue{
  height: 20px;
  width: 20px;
}
.test{
  &_one{
    color: $test;
  }
}
.home {
  display: flex;
  flex-direction: column;
}

</style>
