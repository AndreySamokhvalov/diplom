<template>
  <div class="home">

    <!-- <FoRma msg="Заполни форму"/> -->
    <MoNual />
    <CoMand />
  </div>
</template>

<script>
// @ is an alias to /src
// import FoRma from '@/components/FoRma.vue';
import MoNual from '@/components/MoNual.vue';
import CoMand from '@/components/CoMand.vue';


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
    CoMand
  },

}
</script>

<style lang="scss" scoped>

</style>
