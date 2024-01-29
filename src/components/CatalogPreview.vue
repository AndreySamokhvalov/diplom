<template>
    <div class="catalog-preview center">
        <div class="catalog-preview__text">
            <h2 class="catalog-preview__text_title">
                выбери свой поход
            </h2>
            <div class="description">
                <p class="catalog-preview__text_desk">
                    Для Вас только до 31 марта 2024 действует скидка 20% на любую экспедицию!
                    Свяжитесь с нами и мы подберём самый удобный и безопасный маршрут!
                </p>
            </div>
        </div>

<div class="catalog-preview__catalog">
    <CaRousel />
</div>


        <!-- <div class="catalog-preview__catalog">

            <div class="catalog-preview__catalog_item">
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
                    
                    <h4 class="rating_rating">рейтинг</h4>
                </div>
               
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


            </div>

            <div class="catalog-preview__catalog_item">
                <img src="../assets/path2.jpg" alt="paht1" class="item_img">
                <div class="name_block">
                    <img src="../assets/nameBlock.svg" alt="--" class="path__card_name_img">
                    <div class="path_name_container">
                        <h4 class="path__card_name_name">
                            многодневная экспедиция
                        </h4>
                    </div>
                </div>
                <div class="item_rating">
                    
                    <h4 class="rating_rating">рейтинг</h4>
                </div>
                
                <div class="item_capacity">
                    <span class="item_capacity_text">
                        вместимость группы:
                    </span>
                    <span class="item_capacity_int item_capacity_text">
                        16
                    </span>
                </div>
                <div class="item_complexity">
                    <span class="item_complexity_text">
                        сложность:
                    </span>
                    <span class="item_complexity_int item_complexity_text ">
                        5
                    </span>
                </div>


            </div>

            <div class="catalog-preview__catalog_item">
                <img src="../assets/path3.jpg" alt="paht1" class="item_img">
                <div class="name_block">
                    <img src="../assets/nameBlock.svg" alt="--" class="path__card_name_img">
                    <div class="path_name_container">
                        <h4 class="path__card_name_name">
                            экспедиция на месяц
                        </h4>
                    </div>
                </div>
                <div class="item_rating">
                    
                    <h4 class="rating_rating">рейтинг</h4>
                </div>
                
                <div class="item_capacity">
                    <span class="item_capacity_text">
                        вместимость группы:
                    </span>
                    <span class="item_capacity_int item_capacity_text">
                        20
                    </span>
                </div>
                <div class="item_complexity">
                    <span class="item_complexity_text">
                        сложность:
                    </span>
                    <span class="item_complexity_int item_complexity_text ">
                        10
                    </span>
                </div>


            </div>


        </div> -->





        <div class="select__btn">
        <button class="select__btn_elem ">Смотреть все</button>
    </div>
    </div>
</template>

<script>
import CaRousel from '@/components/CaRousel.vue';
export default {
    name: 'CatalogPreview',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
    components: {
        CaRousel,
    },
  
};
</script>

<style lang="scss" scoped>
.catalog-preview{
    height: 1080px;
}
.catalog-preview__text_title {
    margin-top: 84px;
    margin-bottom: 24px;
    color: $textColorDisplay;
    text-align: center;
    font-family: Despair Display;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
}

.description {
    width: 1489px;
    height: 57px;
    margin-bottom: 64px;

}

.catalog-preview__text_desk {
    color: #000;
    text-align: center;
    font-family: Lack;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.catalog-preview__catalog {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
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
    top: -273px;
    left: 80px
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
.select__btn{
    position: relative;
    left: 582px;
    top: - 180px;
}
.select__btn_elem {
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
</style>