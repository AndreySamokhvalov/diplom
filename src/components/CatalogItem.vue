<template>
    <div class="catalog__cards">


        <div class="catalog-preview__catalog_item">
            <!-- <h1>привет</h1> -->

            <img :src=itemData.url alt="paht1" class="item_img">
            <div class="name_block">
                <img src="../assets/nameBlock.svg" alt="--" class="path__card_name_img">
                <div class="path_name_container">
                    <h4 class="path__card_name_name">
                        {{ itemData.title }}
                    </h4>
                </div>
            </div>
            <div class="item_rating">

                <star-rating :rating=itemData.rating :read-only="true" :increment="0.01"></star-rating>
            </div>


            <div class="item_capacity">
                <span class="item_capacity_text">
                    вместимость группы:
                </span>
                <span class="item_capacity_int item_capacity_text">
                    {{ itemData.capacity }}
                </span>
            </div>
            <div class="item_complexity">
                <span class="item_complexity_text">
                    сложность:
                </span>
                <span class="item_complexity_int item_complexity_text ">
                    {{ itemData.lvl }}
                </span>
            </div>



        </div>
    </div>
</template>

<script>
export default {
    name: 'CatalogItem',
    props: ['itemData'],
    data() {
        return {

        };
    },


    mounted() {

    },

    methods: {

    },
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
    margin-bottom: 20px;
    margin-top: 50px;
    border-radius: 20px;
    transition: all .3s;
    z-index: 5;
    // transform: transition all .3s ;

}

.catalog-preview__catalog_item:hover {
    border: 3px solid $btn_color;
    margin-bottom: 10px;
    margin-top: 10px;
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

}
</style>

<!-- <style lang="scss" scoped>

.catalog__item{

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

}
</style> -->