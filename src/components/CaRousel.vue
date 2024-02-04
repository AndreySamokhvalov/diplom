<template>
    <div class="carousel center">
        <div class="inner" ref="inner" :style="innerStyles">
            <div class="card" v-for="card in getPaths()" :key="card">
                <div @click="toggleModal(), send(card)" class="catalog-preview__catalog_item">
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

                        <star-rating :rating=card.rating :read-only="true" :increment="0.01"></star-rating>
                    </div>
                    <!-- настройка вместительности и сложности -->
                    <div class="item_capacity">
                        <span class="item_capacity_text">
                            вместимость группы:
                        </span>
                        <span class="item_capacity_int item_capacity_text">
                            {{ card.capacity }}
                        </span>
                    </div>
                    <div class="item_complexity">
                        <span class="item_complexity_text">
                            сложность:
                        </span>
                        <span class="item_complexity_int item_complexity_text ">
                            {{ card.lvl }}
                        </span>
                    </div>


                </div>
                <Modal v-show="isShowModal" @close="toggleModal" :itemData="getPathsInfo()" />
            </div>
        </div>
        <div class="btn_group">
            <!-- убираю стрелочки из модального окна с помощью v-show -->
            <img @click="prev" v-show="!isShowModal" src="../assets/slide_l.svg" alt="rigth" class="rul_btn rul_btn_r">
            <img @click="next" v-show="!isShowModal" src="../assets/slide_r.svg" alt="left" class="rul_btn rul_btn_l">
        </div>

        

    </div>
</template>
  
<script>
import Modal from '@/components/Modal.vue';
export default {
    name: 'CaRousel',

    data() {

        return {
            isShowModal: false,
            test: {
                title: "",
                description: ""

            },
        
            innerStyles: {},
            step: '',
            transitioning: false
        }
    },
    components: {
        Modal,
    },

    mounted() {
        this.setStep()
        this.resetTranslate()
    },

    methods: {
        send(item) {
            this.test.title = item.title;
            this.test.description = item.description;
            
           

        },
        getPathsInfo() {
            return this.test
        },


        toggleModal() {
            this.isShowModal = !this.isShowModal;
        },
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
                transform: `translateX(0)
                `
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
    max-width: 1520px;
    // display: flex;
    // max-width: 760px;
    overflow: hidden;
    margin-bottom: 100px;
}

.inner {
    transition: transform  0.3s;
    white-space: nowrap;
}

.rul_btn {
    width: 50px;

    &_r {
        position: relative;
        top: -360px;
        left: -680px;
    }

    &_l {
        position: relative;
        top: -360px;
        left: 700px;
    }
}

.card {
    width: 390px;
    height: 626px;
    margin-left: 90px;
    border: 3px solid white;
    display: inline-flex;
    transition: border .3s;
    &:hover{
        border: 3px solid $btn_color;
        border-radius: 12px;
        transform: transition border .3s;
    }

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
    // right: 200px;
    left: 30px;
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
    top: -270px;
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
    top: -270px;
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
  
