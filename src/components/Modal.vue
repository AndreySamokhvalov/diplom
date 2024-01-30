<template>
  <div class="modal">
    <div @click="closeModal" class="modal-backdrop">
      <div class="modal-container">
        <div @click.stop class="modal-content">
          <header class="modal-header">
            <!-- <slot name="header"> -->
            {{ itemData.title }}
            <!-- </slot> -->
          </header>
          <section class="modal-body">
            <slot name="body">
              Modal body
            </slot>
          </section>
          <footer class="modal-footer">

            <button type="button">
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style lang="scss" scoped >
.modal {
  display: flex;
  &-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(140, 140, 140, 0.1);
    transition: opacity 0.3s ease;
    z-index: 9999;
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

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    margin: 1.75rem auto;
    padding: 20px 30px;
    border-radius: 5px;
    color: #000;
    background-color: #fff;
    transform: translate(0, 0);
    transition: all 0.3s ease;
    box-sizing: border-box;
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