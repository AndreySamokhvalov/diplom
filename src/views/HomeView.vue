<template>
  <div class="home">

    <!-- <FoRma msg="Заполни форму"/> -->
    <MoNual />
    <CoMand />
    <AdVantages />
    <CatalogPreview />
    <HeLper />
    <!-- <FoRma /> -->
    <FoOter />

  </div>
</template>

<script>
// @ is an alias to /src
// import FoRma from '@/components/FoRma.vue';
import MoNual from '@/components/MoNual.vue';
import CoMand from '@/components/CoMand.vue';
import AdVantages from '@/components/AdVantages.vue';
import CatalogPreview from '@/components/CatalogPreview.vue';
import FoOter from '@/components/FoOter.vue';
import HeLper from '@/components/HeLper.vue';


export default {
  data() {
    return {
      hovered: false
    };
  },
  name: 'HomeView',
  components: {
    // FoRma,
    MoNual,
    CoMand,
    AdVantages,
    CatalogPreview,
    HeLper,
    FoOter,
    // FoRma,
  },

}
</script>

<style lang="scss" scoped>

</style>
