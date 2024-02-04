<template>
  <div class="about">
    <h1>Запись добавлена в базу данных</h1>
    <router-link to="/">Home</router-link>
    <HeAder />
    <CaRousel />
  </div>
</template>

< CatalogItem ></CatalogItem>

<script>
import CatalogItem from '@/components/CatalogItem.vue';
import CaRousel from '@/components/CaRousel.vue';
import HeAder from '@/components/HeAder.vue';
export default {
  name: 'about',

  data() {
    return {
     
    };
  },
  components: {
        CaRousel,
        CatalogItem,
        HeAder,
    },

  mounted() {
    
  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>

</style>
