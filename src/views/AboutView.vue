<template>
  <div class="about">
    <h1>Запись добавлена в базу данных</h1>
    <router-link to="/">Home</router-link>
    <CaRousel />
  </div>
</template>


<script>
import CaRousel from '@/components/CaRousel.vue';
export default {
  name: 'about',

  data() {
    return {
     
    };
  },
  components: {
        CaRousel,
    },

  mounted() {
    
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>

</style>
