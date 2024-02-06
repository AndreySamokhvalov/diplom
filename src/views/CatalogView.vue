<template>
    <div class="">

        <div id="catalog" class="catalog center">
            <div class="header center">
                <div class="header__comand">
                    <a href="http://localhost:8080/#comand" class="">
                        <h3 class="header__comand_elem header__links">КОМАНДА</h3>
                    </a>
                </div>
                <div class="header__advantages">
                    <a href="http://localhost:8080/#advantages" class="">
                        <h3 class="header__advantages_elem header__links">ПОЧЕМУ МЫ?</h3>
                    </a>
                </div>
                <div class="header__logo">
                    <a href="http://localhost:8080/" class=""><img src="../assets/logo.svg" alt="logo"
                            class="header__logo_elem"></a>
                </div>
                <div class="header__catalog">
                    <a href="http://localhost:8080/" class="">
                        <h3 class="header__catalog_elem header__links">ГЛАВНАЯ</h3>
                    </a>
                </div>
                <div class="header__contacts">
                    <a href="http://localhost:8080/#footer" class="">
                        <h3 class="header__contacts_elem header__links">КОНТАКТЫ</h3>
                    </a>
                </div>

            </div>

            <div class="filter">
                <div class="filter__title">
                    <div class="board__search">
                        <h3 class="filter__title_elem1" @click="filtrItems()">подобрать</h3>
                    </div>
                    <!-- <h3 class="filter__title_elem2">маршрут по:</h3> -->
                </div>
                <details class="filter__elem tit_complexity">
                    <summary class="filter__summary"><span :class="{ 'activeDet': isActive12 || isActive11 || isActive13 }"
                            class="filter__heading complex">СЛОЖНОСТЬ</span><svg class="filter__triangle"
                            xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                            <path
                                d="M9.6747 7.29777C9.6627 7.28777 9.6467 7.28377 9.6347 7.27377L1.9207 0.291766C1.4867 -0.0982338 0.782701 -0.0982338 0.348701 0.291766C0.344701 0.295766 0.342702 0.299765 0.340702 0.303765C0.235613 0.390536 0.150739 0.499209 0.0920124 0.62219C0.0332859 0.74517 0.00212329 0.87949 0.000701904 1.01577V14.9818C0.00294433 15.1205 0.0356314 15.2571 0.0964546 15.3819C0.157278 15.5066 0.244754 15.6165 0.352702 15.7038L0.348701 15.7078C0.567073 15.8965 0.846069 16.0004 1.1347 16.0004C1.42333 16.0004 1.70233 15.8965 1.9207 15.7078L9.6747 8.70977C9.77682 8.62265 9.85883 8.51441 9.91506 8.39252C9.97129 8.27063 10.0004 8.138 10.0004 8.00377C10.0004 7.86953 9.97129 7.7369 9.91506 7.61501C9.85883 7.49312 9.77682 7.38489 9.6747 7.29777Z"
                                fill="#C1C1C1" />
                        </svg></summary>

                    <div class="filter__optional">
                        <h3 :class="{ 'active': isActive11 }"
                            v-on:click="isActive11 = true, isActive12 = false, isActive13 = false, sortTagComplexity = 'beginner'"
                            class="filter__optional_name">#ЛЮБИТЕЛЬ</h3>
                        <h3 :class="{ 'active': isActive12 }"
                            v-on:click="isActive12 = true, isActive13 = false, isActive11 = false, sortTagComplexity = 'tourist'"
                            class="filter__optional_name">#ТУРИСТ</h3>
                        <h3 :class="{ 'active': isActive13 }"
                            v-on:click="isActive13 = true, isActive12 = false, isActive11 = false, sortTagComplexity = 'hardcore'"
                            class="filter__optional_name">#ВЫЖИВШИЙ</h3>


                    </div>

                </details>

                <details class="filter__elem tit_time">
                    <summary class="filter__summary"><span :class="{ 'activeDet': isActive22 || isActive21 || isActive23 }"
                            class="filter__heading long_time">ДЛИТЕЛЬНОСТЬ</span><svg class="filter__triangle"
                            xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                            <path
                                d="M9.6747 7.29777C9.6627 7.28777 9.6467 7.28377 9.6347 7.27377L1.9207 0.291766C1.4867 -0.0982338 0.782701 -0.0982338 0.348701 0.291766C0.344701 0.295766 0.342702 0.299765 0.340702 0.303765C0.235613 0.390536 0.150739 0.499209 0.0920124 0.62219C0.0332859 0.74517 0.00212329 0.87949 0.000701904 1.01577V14.9818C0.00294433 15.1205 0.0356314 15.2571 0.0964546 15.3819C0.157278 15.5066 0.244754 15.6165 0.352702 15.7038L0.348701 15.7078C0.567073 15.8965 0.846069 16.0004 1.1347 16.0004C1.42333 16.0004 1.70233 15.8965 1.9207 15.7078L9.6747 8.70977C9.77682 8.62265 9.85883 8.51441 9.91506 8.39252C9.97129 8.27063 10.0004 8.138 10.0004 8.00377C10.0004 7.86953 9.97129 7.7369 9.91506 7.61501C9.85883 7.49312 9.77682 7.38489 9.6747 7.29777Z"
                                fill="#C1C1C1" />
                        </svg></summary>

                    <div class="filter__optional">
                        <h3 :class="{ 'active': isActive21 }"
                            v-on:click="isActive21 = true, isActive22 = false, isActive23 = false, sortTagDuration = 'fast'"
                            class="filter__optional_name">1 - 2 дня</h3>
                        <h3 :class="{ 'active': isActive22 }"
                            v-on:click="isActive22 = true, isActive21 = false, isActive23 = false, sortTagDuration = 'norm'"
                            class="filter__optional_name">3 - 5 дней</h3>
                        <h3 :class="{ 'active': isActive23 }"
                            v-on:click="isActive23 = true, isActive21 = false, isActive22 = false, sortTagDuration = 'long'"
                            class="filter__optional_name">7 + дней</h3>



                    </div>

                </details>

                <details class="filter__elem tit_size">
                    <summary class="filter__summary"><span :class="{ 'activeDet': isActive32 || isActive31 || isActive33 }"
                            class="filter__heading capas">ГРУППА</span><svg class="filter__triangle"
                            xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                            <path
                                d="M9.6747 7.29777C9.6627 7.28777 9.6467 7.28377 9.6347 7.27377L1.9207 0.291766C1.4867 -0.0982338 0.782701 -0.0982338 0.348701 0.291766C0.344701 0.295766 0.342702 0.299765 0.340702 0.303765C0.235613 0.390536 0.150739 0.499209 0.0920124 0.62219C0.0332859 0.74517 0.00212329 0.87949 0.000701904 1.01577V14.9818C0.00294433 15.1205 0.0356314 15.2571 0.0964546 15.3819C0.157278 15.5066 0.244754 15.6165 0.352702 15.7038L0.348701 15.7078C0.567073 15.8965 0.846069 16.0004 1.1347 16.0004C1.42333 16.0004 1.70233 15.8965 1.9207 15.7078L9.6747 8.70977C9.77682 8.62265 9.85883 8.51441 9.91506 8.39252C9.97129 8.27063 10.0004 8.138 10.0004 8.00377C10.0004 7.86953 9.97129 7.7369 9.91506 7.61501C9.85883 7.49312 9.77682 7.38489 9.6747 7.29777Z"
                                fill="#C1C1C1" />
                        </svg></summary>

                    <div class="filter__optional">
                        <h3 :class="{ 'active': isActive31 }"
                            v-on:click="isActive31 = true, isActive32 = false, isActive33 = false, sortTagCapacity = 's'"
                            class="filter__optional_name">до 6 человек</h3>
                        <h3 :class="{ 'active': isActive32 }"
                            v-on:click="isActive32 = true, isActive31 = false, isActive33 = false, sortTagCapacity = 'm'"
                            class="filter__optional_name">6 - 15 человек</h3>
                        <h3 :class="{ 'active': isActive33 }"
                            v-on:click="isActive33 = true, isActive31 = false, isActive32 = false, sortTagCapacity = 'l'"
                            class="filter__optional_name">15 + человек</h3>


                    </div>

                </details>
                <div @click="clearFilt(), filtrItems(), closeDetails()" class="no_filter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="43" viewBox="0 0 50 43">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M37.5 19.1111C40.8152 19.1111 43.9946 20.3695 46.3388 22.6096C48.683 24.8496 50 27.8877 50 31.0556C50 37.6523 44.4036 43 37.5 43C30.5964 43 25 37.6523 25 31.0556C25 24.4588 30.5964 19.1111 37.5 19.1111ZM37.5 21.5C31.9772 21.5 27.5 25.7782 27.5 31.0556C27.5 36.3329 31.9772 40.6111 37.5 40.6111C43.0228 40.6111 47.5 36.3329 47.5 31.0556C47.5 25.7782 43.0228 21.5 37.5 21.5ZM41.7824 25.2743L43.5502 26.9635L39.2676 31.0555L43.5502 35.1476L41.7824 36.8368L37.5 32.7446L33.2176 36.8368L31.4498 35.1476L35.7322 31.0555L31.4498 26.9635L33.2176 25.2743L37.5 29.3663L41.7824 25.2743ZM40 0L22.5 20.3801V34.0417H17.5L17.5 20.3802L0 0H40Z"
                            fill="#989898" />
                    </svg>
                </div>
            </div>

            <div class="items_in_catalog">
                <CatalogItem class="catalog__comp" v-for="item in getPaths" :item-data="item" :key="item.id"></CatalogItem>

            </div>

        </div>
        <FoOter />
    </div>
</template>

<script>
import CatalogItem from '@/components/CatalogItem.vue';
import HeAder from '@/components/HeAder.vue';
import FoOter from '@/components/FoOter.vue';
export default {
    name: 'Catalog',

    data() {
        return {

            firstArr: [],
            secondArr: [],
            thirdArr: [],
            result: [],


            isActive11: false,
            isActive12: false,
            isActive13: false,

            isActive21: false,
            isActive22: false,
            isActive23: false,

            isActive31: false,
            isActive32: false,
            isActive33: false,

            sortTagComplexity: 'def',
            sortTagCapacity: 'def',
            sortTagDuration: 'def',

            rating: "No Rating Selected",
            currentRating: "No Rating",
            currentSelectedRating: "No Current Rating",
            boundRating: 3,

            complexityVisible: false,
            durationVisible: false,
            sizeVisible: false,

            pathList: [],
        };
    },

    components: {
        CatalogItem,
        HeAder,
        FoOter,
    },
    computed: {
        filtrItems() {
            if (this.pathList.length == 0) {

                this.pathList = this.$store.getters.getPath;

                this.arr1 = this.getPaths.filter(item => this.sortTagComplexity === 'def' || item.tagComplexity === this.sortTagComplexity);

                this.arr2 = this.arr1.filter(item => this.sortTagCapacity === 'def' || item.tagCapacity === this.sortTagCapacity);

                this.$store.state.pathList = this.arr2.filter(item => this.sortTagDuration === 'def' || item.tagDuration === this.sortTagDuration);
            } else {

                this.$store.state.pathList = this.pathList;

                this.arr1 = this.getPaths.filter(item => this.sortTagComplexity === 'def' || item.tagComplexity === this.sortTagComplexity);

                this.arr2 = this.arr1.filter(item => this.sortTagCapacity === 'def' || item.tagCapacity === this.sortTagCapacity);

                this.$store.state.pathList = this.arr2.filter(item => this.sortTagDuration === 'def' || item.tagDuration === this.sortTagDuration);
            }
        },

        getPaths() {
            return this.$store.state.pathList
        },
    },

    methods: {

        clearFilt() {
            this.firstArr = [];
            this.secondArr = [];
            this.thirdArr = [];

            this.isActive11 = false;
            this.isActive12 = false;
            this.isActive13 = false;

            this.isActive21 = false;
            this.isActive22 = false;
            this.isActive23 = false;

            this.isActive31 = false;
            this.isActive32 = false;
            this.isActive33 = false;

            this.sortTagComplexity = 'def';
            this.sortTagCapacity = 'def';
            this.sortTagDuration = 'def';

            this.$store.state.pathList = filtrItems();
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

        getPaths() {
            return this.$store.getters.getPath
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
.header {

    margin-top: 12px;
    display: flex;
    flex-direction: row;
    max-width: 1520px;
    height: 60px;
    background-color: #35363a;

    border-radius: 60px;
    flex-wrap: nowrap;
    align-content: space-around;
    align-items: center;
    justify-content: space-evenly;
    // margin-left: 80px;



    &__links {
        color: $textColorContrast;
        font-family: Lack;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        transition: all .3s;
        cursor: pointer;

        &:hover {
            color: $btn_color;
            transform: transition all .3s;
        }

        &:active {
            color: rgb(18, 18, 248);
        }
    }

    &__logo {
        &_elem {
            width: 50px;
            height: 50px;
        }
    }
}

.active {
    color: $btn_color
}

.items_in_catalog {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.filter__title_elem1 {
    transition: all .3s;

    &:hover {
        color: $btn_color;
        transform: transition all .3s;
        cursor: pointer;
    }

    &:active {
        color: rgb(234, 119, 119);
    }
}




.filter__title_elem2 {
    margin-left: 8px;
}

.filter {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    max-width: 1520px;
    // margin-left: 80px;
    height: 60px;
    flex-shrink: 0;
    border-radius: 60px;
    border: 1px solid var(--btn_bg, #000);
    position: relative;
    align-items: center;
    justify-content: space-between;

    &__title {
        max-width: 380px;
        display: flex;
        color: #989898;
        font-family: Lack;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        padding-left: 45px;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-evenly;
    }

    &__summary {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__elem {
        width: 170px;
        height: 240px;
        box-sizing: border-box;
        position: absolute;
        top: 40px;
        left: 100px;
        transition: all .3s;
        border-radius: 12px;

        &[open] {
            background-color: #fff;
            box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.30);
            border-top: 0px;
        }
    }
}

.no_filter {
    margin-right: 50px;
    margin-top: 16px;
    cursor: pointer;

    &:hover path {
        fill: $btn_color;
        transition: .3s;
    }

    &:active path {
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
    margin-top: -22px;
    z-index: 20;
}

.tit_time {

    margin-left: 650px;
    margin-top: -22px;
    z-index: 20;

}

.tit_size {
    margin-top: -22px;
    margin-left: 950px;
    z-index: 20;
}

.filter__heading {
    position: relative;
    top: -4px;



}

.activeDet {
    color: $btn_color;

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
//  для телефона
@media (max-width: 767px) and (min-width: 420px) {
    .tit_complexity {
        font-size: 12px;
        margin-top: -10px;
        margin-left: 100px;
    }

    .filter__optional_name {
        font-size: 12px;
    }


    .tit_time {
        margin-top: -10px;
        font-size: 12px;
        margin-left: 250px;
    }

    .tit_size {
        margin-top: -10px;
        font-size: 12px;
        margin-left: 400px;

    }

    svg {
        height: 23px;
        margin-top: -60px;
        margin-left: 400px;
    }

    .filter__title_elem1 {
        margin-top: 6px;
        margin-bottom: 10px;
    }

    .no_filter {


        margin-right: 50px;
        margin-top: 26px;
        cursor: pointer;

        &:hover path {
            fill: $btn_color;
            transition: .3s;
        }

        &:active path {
            fill: rgb(234, 119, 119);
            border: 1px solid var(--btn_bg, #b30000);

        }

    }

    .catalog {
        overflow: hidden;
    }

    .header__links {
        font-size: 10px;

    }

    .tit_time {
        // top: 120px;
        margin-left: 40px;
        font-size: 12px;
    }

    .tit_complexity {
        margin-left: -100px;
        font-size: 12px;
    }


    .tit_size {
        font-size: 12px;
        margin-left: 180px;

    }

    .filter {

        flex-direction: column;
        height: auto;

        &__elem {
            width: 128px;
        }
    }

    .filter__optional_name {
        font-size: 12px;
    }

    .filter__title_elem1 {
        font-size: 12px;
        margin-left: -30px;
    }

}

//  планшет 
@media (max-width: 1020px) and (min-width: 768px) {
    .filter__title_elem1 {
        font-size: 22px;
        margin-left: -20px;
    }

    .tit_complexity {
        font-size: 12px;
        margin-left: 100px;
    }

    .filter__optional_name {
        font-size: 12px;
    }


    .tit_time {
        font-size: 12px;
        margin-left: 250px;
    }

    .tit_size {
        font-size: 12px;
        margin-left: 400px;

    }

    .filter {

        // flex-direction: column;
        // height: auto;

        &__elem {
            padding-bottom: 20px;
            width: 140px;
            height: auto;
        }
    }
}

@media (max-width: 1040px)and (min-width: 1021px) {
    .tit_complexity {
        margin-left: 150px;
    }

    .tit_time {
        margin-left: 350px;
    }

    .tit_size {

        margin-left: 590px;

    }


}

@media (max-width: 1450px)and (min-width: 1022px) {


    .filter {

        max-height: 200px;
        margin-left: 32px;
        margin-right: 32px;
    }

    .header {
        margin-left: 32px;
        margin-right: 32px;
    }


}</style>
