<template>
    <div class="carousel center">
        <div class="inner" ref="inner" :style="innerStyles">
            <div class="card" v-for="card in getPaths()" :key="card">


                <div class="catalog-preview__catalog_item">
                    <img :src=card.url alt="paht1" class="item_img">
                    <div class="name_block">
                        <img src="../assets/nameBlock.svg" alt="--" class="path__card_name_img">
                        <div class="path_name_container">
                            <h4 class="path__card_name_name">
                                {{ card.title }}
                            </h4>
                        </div>
                    </div>
                    <div class="item_rating">
                        <!-- https://vuejsexamples.com/a-simple-and-highly-customisable-star-rating-component-for-vue/         https://vuejsexamples.com/a-simple-and-highly-customisable-star-rating-component-for-vue/   -->
                        <h4 class="rating_rating">рейтинг</h4>
                    </div>
                    <!-- настройка вместительности и сложности -->
                    <div class="item_capacity">
                        <span class="item_capacity_text">
                            вместимость группы:
                        </span>
                        <span class="item_capacity_int item_capacity_text">
                            {{ card.capacity}}
                        </span>
                    </div>
                    <div class="item_complexity">
                        <span class="item_complexity_text">
                            сложность:
                        </span>
                        <span class="item_complexity_int item_complexity_text ">
                            {{ card.lvl}}
                        </span>
                    </div>


                </div>
                
            </div>
        </div>
        <div class="btn_group">
           <img @click="prev" src="../assets/rigth_btn.svg" alt="rigth" class="rul_btn rul_btn_r">
            <img  @click="next" src="../assets/left_btn.svg" alt="left" class="rul_btn rul_btn_l">
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {


            innerStyles: {},
            step: '',
            transitioning: false
        }
    },

    mounted() {
        this.setStep()
        this.resetTranslate()
    },

    methods: {
        getPaths() {
            return this.$store.getters.getPath
        },

        setStep() {
            const innerWidth = this.$refs.inner.scrollWidth
            const totalCards = this.getPaths().length
            this.step = `${innerWidth / totalCards}px`
        },

        next() {
            if (this.transitioning) return

            this.transitioning = true

            this.moveLeft()

            this.afterTransition(() => {
                const card = this.getPaths().shift()
                this.getPaths().push(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        prev() {
            if (this.transitioning) return

            this.transitioning = true

            this.moveRight()

            this.afterTransition(() => {
                const card = this.getPaths().pop()
                this.getPaths().unshift(card)
                this.resetTranslate()
                this.transitioning = false
            })
        },

        moveLeft() {
            this.innerStyles = {
                transform: `translateX(${this.step})
                            translateX(-${this.step})`
            }
        },

        moveRight() {
            this.innerStyles = {
                transform: `translateX(-${this.step})
                            translateX(${this.step})`
            }
        },

        afterTransition(callback) {
            const listener = () => {
                callback()
                this.$refs.inner.removeEventListener('transitionend', listener)
            }
            this.$refs.inner.addEventListener('transitionend', listener)
        },

        resetTranslate() {
            this.innerStyles = {
                transition: 'none',
                transform: `translateX(0)`
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// .btn_group{
//     display: flex;
//     justify-content: space-evenly;
//     flex-direction: row;
//     flex-wrap: nowrap;
//     align-items: center;
// }   
.carousel {

    // display: flex;
    max-width: 1320px;
    overflow: hidden;
}

.inner {
    transition: transform 0.3s;
    white-space: nowrap;
}
.rul_btn{
    width: 50px;
    &_r{
        position: relative;
        top: -360px;
        left: -540px;
    }
    &_l{
        position: relative;
        top: -360px;
        left: 750px;
    }
}

.card {
    width: 390px;
    height: 626px;
    margin-left: 38px;

    display: inline-flex;

    /* optional */

    // background-color: #39b1bd;
    // color: white;
    // border-radius: 4px;
    // align-items: center;
    // justify-content: center;
}

/* optional */
button {
    margin-right: 5px;
    margin-top: 10px;
}

.btn_rulles {
    color: $textColorLack;
    font-family: Lack;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    width: 356px;
    padding: 16px 65px;
    justify-content: center;
    align-items: center;
    border-radius: 60px;
    border: 3px solid #000;
    margin-top: 60px;
    margin-bottom: 90px;
}



.item_img {
    width: 390px;
    height: 626px;
}

.rating_rating {
    color: beige;
}

.item_rating {
    position: relative;
    top: -750px;
    right: 120px;
}

.path_name_container {
    width: 252px;
    height: 58px;
    position: relative;
    top: -258px;
    left: 80px;
}

.path__card_name_name {

    top: 10px;
    left: 48px;
    color: $textColorContrast;
    text-align: center;
    font-family: Lack;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
}

.path__card_name_img {
    position: relative;
    top: -200px;
    left: 48px;
}

.item_capacity {
    width: 360px;
    display: flex;
    position: relative;
    left: 18px;
    top: -250px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    &_text {
        color: $textColorContrast;
        font-family: Lack;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

.item_complexity {
    width: 360px;
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    top: -240px;
    left: 18px;


    &_text {
        color: $textColorContrast;
        font-family: Lack;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }


}
</style>
  
