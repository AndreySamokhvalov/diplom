<template>
  <div class="modal">
    <div @click="closeModal" class="modal-backdrop">
      <div class="modal-container">
        <div @click.stop class="modal-content">
          <div class="exit">
            <img @click="closeModal" src="../assets/close_btn.svg" alt="" class="exit_elem">
          </div>
          <header class="modal-header">
            {{ itemData.title }}
          </header>
          {{ itemData.description }}
          <footer class="modal-footer">
            <button type="button">
              перейти в каталог
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss" scoped >
.modal-content {
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 1s;
}

.modal {
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
    border-radius: 36px;
    background-color: rgba(140, 140, 140, 0.1);
    transition: opacity 0.3s ease;
    z-index: 9999;
    transition: all .3s;
  }

  &-container {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: auto;
    margin: 16px;

  }

  //  настройки фона и другие для модального окна
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 595px;
    max-width: 1464px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 36px;
    color: #000;
    background-color: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease;
    // box-sizing: border-box;
    background-image: url("../assets/4554.jpg");
    position: relative;
    right: 20px;
    top: - 45px;
    overflow-x: auto;
    z-index: 23;

  }

  .exit_elem {
    position: relative;
    left: 700px;
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
</style>

<script>

export default {
  name: 'Modal',
  props: ["itemData"],
  data() {

    return {
      title: ""

    }

  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
  mounted() {
    Event.$on('data-title', title => {
      this.title = title;
    })

  }
};
</script>