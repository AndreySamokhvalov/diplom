<template>
  <div id="home" class="home">
    <HeAder /> 
    <BaNner />
    <MoNual />
    <CoMand />
    <AdVantages />
    <CatalogPreview />
    <HeLper />
    <FoOter />

  </div>
</template>

<script>

import MoNual from '@/components/MoNual.vue';
import CoMand from '@/components/CoMand.vue';
import AdVantages from '@/components/AdVantages.vue';
import CatalogPreview from '@/components/CatalogPreview.vue';
import FoOter from '@/components/FoOter.vue';
import HeLper from '@/components/HeLper.vue';
import BaNner from '@/components/BaNner.vue';
import HeAder from '@/components/HeAder.vue';

export default {
  data() {
    return {
      hovered: false,
      pos: 0,
    };
  },
  name: 'HomeView',


  components: {
    

    MoNual,
    CoMand,
    AdVantages,
    CatalogPreview,
    HeLper,
    FoOter,
    BaNner,
    HeAder,

  },

}
</script>

<style lang="scss" scoped>
.home{
  overflow: hidden;
}

</style>
