<template>
    <div class="catalog center">
        <h1>добро пожаловать в каталог</h1>

        <div class="filter">
            <div class="filter__title">
                <h3>подобрать маршрут по:</h3>
            </div>
            <details class="filter__elem tit_complexity">
                <summary class="filter__summary"><span class="filter__heading complex">СЛОЖНОСТЬ</span><svg
                        class="filter__triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="16"
                        viewBox="0 0 10 16">
                        <path
                            d="M9.6747 7.29777C9.6627 7.28777 9.6467 7.28377 9.6347 7.27377L1.9207 0.291766C1.4867 -0.0982338 0.782701 -0.0982338 0.348701 0.291766C0.344701 0.295766 0.342702 0.299765 0.340702 0.303765C0.235613 0.390536 0.150739 0.499209 0.0920124 0.62219C0.0332859 0.74517 0.00212329 0.87949 0.000701904 1.01577V14.9818C0.00294433 15.1205 0.0356314 15.2571 0.0964546 15.3819C0.157278 15.5066 0.244754 15.6165 0.352702 15.7038L0.348701 15.7078C0.567073 15.8965 0.846069 16.0004 1.1347 16.0004C1.42333 16.0004 1.70233 15.8965 1.9207 15.7078L9.6747 8.70977C9.77682 8.62265 9.85883 8.51441 9.91506 8.39252C9.97129 8.27063 10.0004 8.138 10.0004 8.00377C10.0004 7.86953 9.97129 7.7369 9.91506 7.61501C9.85883 7.49312 9.77682 7.38489 9.6747 7.29777Z"
                            fill="#C1C1C1" />
                    </svg></summary>

                <div class="filter__optional">
                    <h3 :class="{ 'active': isActive13 }" v-on:click="isActive13 = !isActive13"
                        class="filter__optional_name">#ЛЮБИТЕЛЬ</h3>
                    <h3 :class="{ 'active': isActive23 }" v-on:click="isActive23 = !isActive23"
                        class="filter__optional_name">#ТУРИСТ</h3>
                    <h3 :class="{ 'active': isActive33 }" v-on:click="isActive33 = !isActive33"
                        class="filter__optional_name">#ВЫЖИВШИЙ</h3>


                </div>

            </details>

            <details class="filter__elem tit_time">
                <summary class="filter__summary"><span class="filter__heading long_time">ДЛИТЕЛЬНОСТЬ</span><svg
                        class="filter__triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="16"
                        viewBox="0 0 10 16">
                        <path
                            d="M9.6747 7.29777C9.6627 7.28777 9.6467 7.28377 9.6347 7.27377L1.9207 0.291766C1.4867 -0.0982338 0.782701 -0.0982338 0.348701 0.291766C0.344701 0.295766 0.342702 0.299765 0.340702 0.303765C0.235613 0.390536 0.150739 0.499209 0.0920124 0.62219C0.0332859 0.74517 0.00212329 0.87949 0.000701904 1.01577V14.9818C0.00294433 15.1205 0.0356314 15.2571 0.0964546 15.3819C0.157278 15.5066 0.244754 15.6165 0.352702 15.7038L0.348701 15.7078C0.567073 15.8965 0.846069 16.0004 1.1347 16.0004C1.42333 16.0004 1.70233 15.8965 1.9207 15.7078L9.6747 8.70977C9.77682 8.62265 9.85883 8.51441 9.91506 8.39252C9.97129 8.27063 10.0004 8.138 10.0004 8.00377C10.0004 7.86953 9.97129 7.7369 9.91506 7.61501C9.85883 7.49312 9.77682 7.38489 9.6747 7.29777Z"
                            fill="#C1C1C1" />
                    </svg></summary>

                <div class="filter__optional">
                    <h3 :class="{ 'active': isActive21 }" v-on:click="isActive21 = !isActive21"
                        class="filter__optional_name">1 - 2 дня</h3>
                    <h3 :class="{ 'active': isActive22 }" v-on:click="isActive22 = !isActive22"
                        class="filter__optional_name">3 - 5 дней</h3>
                    <h3 :class="{ 'active': isActive23 }" v-on:click="isActive23 = !isActive23"
                        class="filter__optional_name">7 + дней</h3>



                </div>

            </details>

            <details class="filter__elem tit_size">
                <summary class="filter__summary"><span class="filter__heading capas">РАЗМЕР ГРУППЫ</span><svg
                        class="filter__triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="16"
                        viewBox="0 0 10 16">
                        <path
                            d="M9.6747 7.29777C9.6627 7.28777 9.6467 7.28377 9.6347 7.27377L1.9207 0.291766C1.4867 -0.0982338 0.782701 -0.0982338 0.348701 0.291766C0.344701 0.295766 0.342702 0.299765 0.340702 0.303765C0.235613 0.390536 0.150739 0.499209 0.0920124 0.62219C0.0332859 0.74517 0.00212329 0.87949 0.000701904 1.01577V14.9818C0.00294433 15.1205 0.0356314 15.2571 0.0964546 15.3819C0.157278 15.5066 0.244754 15.6165 0.352702 15.7038L0.348701 15.7078C0.567073 15.8965 0.846069 16.0004 1.1347 16.0004C1.42333 16.0004 1.70233 15.8965 1.9207 15.7078L9.6747 8.70977C9.77682 8.62265 9.85883 8.51441 9.91506 8.39252C9.97129 8.27063 10.0004 8.138 10.0004 8.00377C10.0004 7.86953 9.97129 7.7369 9.91506 7.61501C9.85883 7.49312 9.77682 7.38489 9.6747 7.29777Z"
                            fill="#C1C1C1" />
                    </svg></summary>

                <div class="filter__optional">
                    <h3 :class="{ 'active': isActive31 }" v-on:click="isActive31 = !isActive31"
                        class="filter__optional_name">до 6 человек</h3>
                    <h3 :class="{ 'active': isActive32 }" v-on:click="isActive32 = !isActive32"
                        class="filter__optional_name">6 - 15 человек</h3>
                    <h3 :class="{ 'active': isActive33 }" v-on:click="isActive33 = !isActive33"
                        class="filter__optional_name">15 + человек</h3>


                </div>

            </details>
            <div class="no_filter">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M37.5 19.1111C40.8152 19.1111 43.9946 20.3695 46.3388 22.6096C48.683 24.8496 50 27.8877 50 31.0556C50 37.6523 44.4036 43 37.5 43C30.5964 43 25 37.6523 25 31.0556C25 24.4588 30.5964 19.1111 37.5 19.1111ZM37.5 21.5C31.9772 21.5 27.5 25.7782 27.5 31.0556C27.5 36.3329 31.9772 40.6111 37.5 40.6111C43.0228 40.6111 47.5 36.3329 47.5 31.0556C47.5 25.7782 43.0228 21.5 37.5 21.5ZM41.7824 25.2743L43.5502 26.9635L39.2676 31.0555L43.5502 35.1476L41.7824 36.8368L37.5 32.7446L33.2176 36.8368L31.4498 35.1476L35.7322 31.0555L31.4498 26.9635L33.2176 25.2743L37.5 29.3663L41.7824 25.2743ZM40 0L22.5 20.3801V34.0417H17.5L17.5 20.3802L0 0H40Z"
                        fill="#989898" />
                </svg>
            </div>
        </div>






        <div class="catalog__cards">

            <div class="catalog-preview__catalog_item" v-for="card in getPaths()" :key="card">
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
                    <!-- импортирую библиотеки для рейтинга -->
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




        </div>






    </div>
</template>

<script>
// import axios from 'axios';
// import { mapMutations } from 'vuex';
export default {
    name: 'Catalog',

    data() {
        return {
            isActive11: false,
            isActive12: false,
            isActive13: false,
            isActive21: false,
            isActive22: false,
            isActive23: false,
            isActive31: false,
            isActive32: false,
            isActive33: false,
            rating: "No Rating Selected",
            currentRating: "No Rating",
            currentSelectedRating: "No Current Rating",
            boundRating: 3,

            complexityVisible: false,
            durationVisible: false,
            sizeVisible: false,
        };
    },

    mounted() {



    },
    async created() {
        // try {
        //     const response = await axios.get(`http://localhost:3000/api/records/pathList`);
        //     this.pathList1 = response.data;
        //     // this.SET_PATHLIST(this.pathList1)
        //     // store.commit('SET_PATHLIST',pathList1)
        // } catch (e) {
        //     this.errors.push(e)
        // }

    },

    methods: {
        addClass() {
            this.isActive = !this.isActive;
            return this.isActive
        },
        setRating: function (rating) {
            this.rating = "You have Selected: " + rating + " stars";
        },
        showCurrentRating: function (rating) {
            this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"
        },
        setCurrentSelectedRating: function (rating) {
            this.currentSelectedRating = "You have Selected: " + rating + " stars";
        },

        // ...mapMutations(["SET_PATHLIST"]),


        getPaths() {
            return this.$store.getters.getPath
            // return this.pathList1
        },
        showComplexity() {
            this.complexityVisible = !this.complexityVisible;
            this.durationVisible = false;
            this.sizeVisible = false;
        },
        showDuration() {
            this.durationVisible = !this.durationVisible;
            this.complexityVisible = false;
            this.sizeVisible = false;
        },
        showSize() {
            this.sizeVisible = !this.sizeVisible;
            this.durationVisible = false;
            this.complexityVisible = false;
        },
    }
};
</script>

<style lang="scss" scoped>
.active {
    color: $btn_color
}

.item_img {
    width: 390px;
    height: 626px;
    margin-top: 24px;
}

.rating_rating {
    color: rgb(12, 54, 224);
}

.item_rating {
    position: relative;
    top: -120px;
    right: -100px;
}


.path_name_container {
    width: 252px;
    height: 58px;
    position: relative;
    top: -273px;
    left: 80px;

}

.path__card_name_name {

    top: -230px;
    left: 48px;
    color: $textColorContrast;
    // text-align: center;
    font-family: Lack;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    transition: all .3s;
}

.path__card_name_img {
    position: relative;
    top: -200px;
    left: 48px;
    transition: all .3s;

}

.item_capacity {
    width: 360px;
    display: flex;
    position: relative;
    left: 18px;
    top: -100px;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    transition: all .3s;

    &_text {
        color: rgb(0, 0, 0);
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
    top: -100px;
    left: 18px;
    transition: all .3s;


    &_text {
        color: rgb(0, 0, 0);
        font-family: Lack;
        font-size: 26px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

}



.catalog__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.desctiption__btn {
    position: relative;
    top: -130px;
    left: 40px;

    &_elem {
        color: $textColorLack;
        font-family: Lack;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        width: 314px;
        padding: 16px 65px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 60px;
        border: 3px solid #000;
        margin-top: 60px;
        margin-bottom: 90px;
    }
}

.catalog__catalog_item {
    margin-left: 20px;
    margin-right: 20px;
}

.filter {

    display: flex;
    flex-direction: row;
    width: 1389px;
    height: 102px;
    flex-shrink: 0;
    border-radius: 60px;
    border: 1px solid var(--btn_bg, #000);
    position: relative;
    align-items: center;
    justify-content: space-between;

    &__title {
        color: #989898;
        font-family: Lack;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        padding-left: 45px;
    }





    &__summary {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__elem {
        width: 190px;
        height: 240px;
        box-sizing: border-box;
        position: absolute;
        top: 40px;
        left: 100px;




        &[open] {
            background-color: #fff;
            box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.30);
            border-top: 0px;
            // transform: transition all .3s;
            // z-index: -2;

        }
    }
}

.no_filter {
    margin-right: 50px;
    margin-top: 16px;


    &:hover path {
        fill: $btn_color;
    }
    &:active path{
        fill: rgb(234, 119, 119);
        border: 1px solid var(--btn_bg, #b30000);

    }

}

.complex {
    display: flex;
    margin-left: 28px;
    padding-top: 10px;
}

.long_time {
    display: flex;
    margin-left: 20px;
    padding-top: 10px;
}

.capas {
    display: flex;
    margin-left: 16px;
    padding-top: 10px;

}

.tit_complexity {
    margin-left: 350px;
}

.tit_time {
    //    position: absolute;
    margin-left: 650px;

}

.tit_size {

    margin-left: 950px;
}

.filter__heading {
    position: relative;
    top: -4px;


}

//  настройка опций фильтра
.filter__optional {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;


    &_name {
        margin-left: 12px;
        margin-top: 30px;
        font-family: Lack;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;

    }
}



.filter__elem[open] .filter__heading {
    color: $btn_color;
}

.filter__elem[open] path {
    transform: transition all .3s;
    fill: $btn_color;
}

.filter__triangle {
    transition: all .3s;
}

.filter__elem[open] .filter__triangle {
    rotate: (90deg);
    transform: transition all .3s;
}

//  не актив, другой псевдокласс
.filter__optional_name:hover {
    color: $btn_color;

}











.hide__btn {
    color: $textColorLack;
    font-family: Lack;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    width: 220px;
    padding: 16px 65px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 60px;
    border: 3px solid #000;
    margin-top: 20px;
    margin-bottom: 20px;
}

.hide__btn_block {
    width: 1520px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: nowrap;
    align-items: center;
    transition: width 2s;
}

.catalog-preview__catalog_item {
    border: 3px solid #000;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    height: 820px;
    margin-bottom: 70px;
    margin-top: 170px;
    border-radius: 20px;
    transition: all .3s;
    z-index: 5;
    // transform: transition all .3s ;

}

.catalog-preview__catalog_item:hover {
    border: 3px solid $btn_color;
    // border-top: 0;
    // border-left: 0;
    // border-right: 0;
    height: 820px;
    margin-bottom: 70px;
    margin-top: 70px;
    border-radius: 20px;
    transition-duration: .2s;
    width: 464px;
    position: relative;
    z-index: 10;
    transform: transition border .3s;
    margin-left: -24px;
    margin-right: -24px;
}

.catalog-preview__catalog_item:hover .path__card_name_img {
    position: relative;
    left: 0;
    transition-duration: .3s;
    // width: 486px;

}

img {
    transition: .3s;
}

.catalog-preview__catalog_item:hover .path__card_name_name {
    top: -230px;
    left: 48px;
    color: $textColorContrast;

    font-family: Lack;

    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    transition-duration: .3s;

}

.catalog-preview__catalog_item:hover .path_name_container {
    width: 252px;
    height: 58px;
    position: relative;
    // top: -303px;
    // left: 160px;
    transition-duration: .3s;
}

.catalog-preview__catalog_item:hover .item_capacity {
    width: 418px;
    transition-duration: .3s;

}

.catalog-preview__catalog_item:hover .item_complexity {
    width: 418px;
    transition-duration: .3s;

}</style>
