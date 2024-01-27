<template>
    <div class="catalog center">
        <h1>добро пожаловать в каталог</h1>


        <div class="catalog__filter">
            <div class="catalog__filter_header">
                <div class="catalog__filter_title">
                    <h1 class="catalof__filter_title_elem filter__txt">подбать маршрут по:</h1>
                </div>
                <div class="catalog__filter_optional">
                    <div class="catalog__filter_optional_list">
                        <h5 class="catalog__filter_optional_list_elem filter__txt">рейтинг</h5>
                        <!-- <img src="../assets/left_st.svg" alt="show me" class="show_or_not">  -->
                    </div>
                    <div class="catalog__filter_optional_list">
                        <h5 class="catalog__filter_optional_list_elem filter__txt">сложность</h5>
                        <button @click="showComplexity()"><img src="../assets/left_st.svg" alt="show me"
                                class="show_or_not"></button>
                    </div>
                    <div class="catalog__filter_optional_list">
                        <h5 class="catalog__filter_optional_list_elem filter__txt">длительность</h5>
                        <button @click="showDuration()"><img src="../assets/left_st.svg" alt="show me"
                                class="show_or_not"></button>
                    </div>
                    <div class="catalog__filter_optional_list">
                        <h5 class="catalog__filter_optional_list_elem filter__txt">размер группы</h5>
                        <button @click="showSize()"><img src="../assets/left_st.svg" alt="show me" class="show_or_not"></button>
                    </div>
                </div>
            </div>
            <div v-show=complexityVisible class="filter__buttons_complexity hide__btn_block">
                <button class="filter__buttons_complexity_first hide__btn">легко</button>
                <button class="filter__buttons_complexity_second hide__btn ">нормально</button>
                <button class="filter__buttons_complexity_third hide__btn ">сложно</button>
            </div>
            <div v-show=durationVisible class="filter__buttons_duration hide__btn_block">
                <button class="filter__buttons_duration_first hide__btn">1-2 дня</button>
                <button class="filter__buttons_duration_second hide__btn ">3-5 дней</button>
                <button class="filter__buttons_duration_third hide__btn ">7+ дней</button>
            </div>
            <div v-show=sizeVisible class="filter__buttons_size hide__btn_block">
                <button class="filter__buttons_size_first hide__btn">до 6 человек</button>
                <button class="filter__buttons_size_second hide__btn ">7-15 человек</button>
                <button class="filter__buttons_size_third hide__btn ">более 15 человек</button>
            </div>
        </div>




        <div class="catalog__cards">

            <div class="catalog__catalog_item">
                <img src="../assets/path1.jpg" alt="paht1" class="item_img">
                <div class="name_block">
                    <img src="../assets/nameBlock.svg" alt="--" class="path__card_name_img">
                    <div class="path_name_container">
                        <h4 class="path__card_name_name">
                            Однодневная экспедиция
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
                        12
                    </span>
                </div>
                <div class="item_complexity">
                    <span class="item_complexity_text">
                        сложность:
                    </span>
                    <span class="item_complexity_int item_complexity_text ">
                        3
                    </span>
                </div>

                <div class="desctiption__btn">
                    <button class="desctiption__btn_elem">Подробнее</button>
                </div>
            </div>

            <div class="catalog__catalog_item">
                <img src="../assets/path1.jpg" alt="paht1" class="item_img">
                <div class="name_block">
                    <img src="../assets/nameBlock.svg" alt="--" class="path__card_name_img">
                    <div class="path_name_container">
                        <h4 class="path__card_name_name">
                            Однодневная экспедиция
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
                        12
                    </span>
                </div>
                <div class="item_complexity">
                    <span class="item_complexity_text">
                        сложность:
                    </span>
                    <span class="item_complexity_int item_complexity_text ">
                        3
                    </span>
                </div>

                <div class="desctiption__btn">
                    <button class="desctiption__btn_elem">Подробнее</button>
                </div>
            </div>

            <div class="catalog__catalog_item">
                <img src="../assets/path1.jpg" alt="paht1" class="item_img">
                <div class="name_block">
                    <img src="../assets/nameBlock.svg" alt="--" class="path__card_name_img">
                    <div class="path_name_container">
                        <h4 class="path__card_name_name">
                            Однодневная экспедиция
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
                        12
                    </span>
                </div>
                <div class="item_complexity">
                    <span class="item_complexity_text">
                        сложность:
                    </span>
                    <span class="item_complexity_int item_complexity_text ">
                        3
                    </span>
                </div>

                <div class="desctiption__btn">
                    <button class="desctiption__btn_elem">Подробнее</button>
                </div>
            </div>



        </div>
    </div>
</template>

<script>
export default {
    name: 'Catalog',

    data() {
        return {
            complexityVisible: false,
            durationVisible: false,
            sizeVisible: false,
        };
    },

    mounted() {

    },

    methods: {
        showComplexity() {
            this.complexityVisible = !this.complexityVisible;
            this.durationVisible =false;
            this.sizeVisible = false;
        },
        showDuration() {
            this.durationVisible = !this.durationVisible;
            this.complexityVisible =false;
            this.sizeVisible = false;
        },
        showSize() {
            this.sizeVisible = !this.sizeVisible;
            this.durationVisible =false;
            this.complexityVisible = false;
        },
    }
};
</script>

<style lang="scss" scoped>
.item_img {
    width: 390px;
    height: 626px;
}

.rating_rating {
    color: rgb(12, 54, 224);
}

.item_rating {
    position: relative;
    top: -120px;
    right: 120px;
}

.path_name_container {
    width: 252px;
    height: 58px;
    position: relative;
    top: -273px;
    left: 80px
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
    top: -100px;
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
    top: -100px;
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



.catalog__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
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

.catalog__filter {
    max-width: $widthSite;
    height: auto;
    background-color: #b8b8b8;
    margin-bottom: 34px;
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;

    &_title {
        color: $textColorContrast;
        font-family: Lack;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        margin-left: 25px;
    }
}

.catalog__filter_header {
    display: flex;
    flex-direction: row;
}

.catalog__filter_optional {
    display: flex;
    gap: 20px;
}

.catalog__filter_optional_list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: 12px;
}

.catalog__filter_optional_list_elem {
    color: $textColorContrast;
    font-family: Lack;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-left: 25px;
}

.show_or_not {
    width: 20px;
    background-color: #b8b8b8;
    border: 0px;
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
</style>
