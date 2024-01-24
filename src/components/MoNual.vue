<template>
    <div>
        <div class="monual">
            <div class="monual__icons">
                <div class="monual__icons_elm">
                    <img src="../assets/select_path_icn.svg" alt="" class="monual__icons_elem_img">
                    <p class="monual__icons_elm_description">Выберете подходящий маршрут похода на сайте</p>
                </div>
                <div class="monual__icons_elm">
                    <img src="../assets/request.svg" alt="" class="monual__icons_elem_img">
                    <p class="monual__icons_elm_description">Оставьте нам свои контактные данные в анкете</p>
                </div>
                <div class="monual__icons_elm">
                    <img src="../assets/conect.svg" alt="" class="monual__icons_elem_img">
                    <p class="monual__icons_elm_description">Наш консультант свяжется с Вами уже через 3 минуты</p>
                </div>
                <div class="monual__icons_elm">
                    <img src="../assets/map.svg" alt="" class="monual__icons_elem_img">

                    <p class="monual__icons_elm_description">Наслаждайтесь путешествием вместе с нами!</p>
                </div>
            </div>
            <div class="monual__title">
                <h1 class="monual__title_text_first">
                    присоединяйтесь к любой группе

                </h1>
                <div class="adder">
                    <h1 class="monual__title_text"> или организуйте</h1>
                    <button class="monual__title_btn">свою экспедицию!</button>
                </div>
            </div>
            <button class="monual__more">подробнее</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoNual',

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
.adder {
    display: flex;
}

.monual {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

    &__more {
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

    display: flex;
    flex-direction: column;
}

.monual__icons {
    display: flex;
    gap: 154px;
    flex-wrap: wrap;
    justify-content: center;
}



.monual__icons_elm_description {
    color: $textColorLack;
    width: 370px;
    text-align: center;
    font-family: Lack;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 64px;


}

.monual__title {
    width: 1338px;
    height: 168px;
    margin-top: 112px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;


    &_btn {
        width: 720px;
        height: 69px;
        flex-shrink: 0;
        border-radius: 75px;
        background: $btn_color;
        color: $textColorDisplay;
        text-align: center;
        font-family: DespairDisplay;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
        margin-left: 5px;
        ;
    }

    &_text {
        color: $textColorDisplay;
        text-align: left;
        font-family: DespairDisplay;
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        display: flex;
        text-transform: uppercase;

        &_first {
            margin-left: 40px;
            color: $textColorDisplay;
            text-align: left;
            font-family: DespairDisplay;
            font-size: 60px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            display: flex;
            text-transform: uppercase;
        }
    }
}</style>