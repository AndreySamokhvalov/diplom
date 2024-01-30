<template>
    <div class="advantages center_img">
        <h2 class="advantages__title">Почему мы?</h2>
        <div class="advantages__cards">
            <div class="advantages__cards_elem">
                <div class="advantages__cards_elem_title">
                    <h3 class="advantages__cards_elem_title-text ">
                        #БЕЗОПАСНОСТЬ
                    </h3>
                </div>
                <div class="advantages__cards_elem_desk">
                    <p class="advantages__cards_elem_desk_text">
                        В нашем клубе работают дипломированные и профессиональные инструкторы,
                        которые прошли не меньше 30 экспедиций
                    </p>
                </div>
            </div>
            <div class="advantages__cards_elem">
                <div class="advantages__cards_elem_title">
                    <h3 class="advantages__cards_elem_title-text">
                        #ОБОРУДОВАНИЕ
                    </h3>
                </div>
                <div class="advantages__cards_elem_desk">
                    <p class="advantages__cards_elem_desk_text">
                        Мы выдаём каждому своё профессиональное оборудование, 
                        которое проходит проверку перед каждой экспедицией
                    </p>
                </div>
            </div>
            <div class="advantages__cards_elem">
                <div class="advantages__cards_elem_title">
                    <h3 class="advantages__cards_elem_title-text">
                        #ПИТАНИЕ
                    </h3>
                </div>
                <div class="advantages__cards_elem_desk">
                    <p class="advantages__cards_elem_desk_text">
                        Предоставляем полноценное питание для каждого участника  
                        вне зависимости от продолжительности похода
                    </p>
                </div>
            </div>
            <div class="advantages__cards_elem">
                <div class="advantages__cards_elem_title">
                    <h3 class="advantages__cards_elem_title-text">
                        #КОМАНДА
                    </h3>
                </div>
                <div class="advantages__cards_elem_desk">
                    <p class="advantages__cards_elem_desk_text">
                        Также в каждой группе предусмотрены профессиональные 
                        гиды и медицинские работники
                    </p>
                </div>
            </div>
            <div class="advantages__cards_elem">
                <div class="advantages__cards_elem_title">
                    <h3 class="advantages__cards_elem_title-text">
                        #ПОДАРКИ
                    </h3>
                </div>
                <div class="advantages__cards_elem_desk">
                    <p class="advantages__cards_elem_desk_text">
                        Подарки каждому! Перед каждым выходом в поход мы дарим 
                        Вам клубные фирменные наборы, мерч и многое другое!
                    </p>
                </div>
            </div>
            <div class="advantages__cards_elem">
                <div class="advantages__cards_elem_title">
                    <h3 class="advantages__cards_elem_title-text">
                        #КАРТА КЛИЕНТА
                    </h3>
                </div>
                <div class="advantages__cards_elem_desk">
                    <p class="advantages__cards_elem_desk_text">
                        У нас предусмотрена программа лояльности, с каждым новым 
                        походом будет действовать скидка от 5 до 25%
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdVantages',

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
.advantages {
    display: flex;
    margin-bottom: 100px;
    background-image: url("../assets/background_photo.jpg");
    // background-size: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: local;
    background-clip: content-box;
    // height: 1080px;
    // width: 1920px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

.advantages__title {
    display: flex;
    color: $textColorContrast;
    text-align: center;
    font-family: DespairDisplay;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 24px;
    margin-top: 84px;
}
.advantages__cards_elem:hover {
    border: 3px solid $btn_color;
}
.advantages__cards_elem:hover .advantages__cards_elem_title{
    background-color: $btn_color;
    right: 60px;
    transform: transition all .3s;
}

.advantages__cards_elem {

    width: 411px;
    height: 368px;
    flex-shrink: 0;
    border: 3px solid $textColorNoHovere;
    border-radius: 60px;
}


.advantages__cards_elem_title {
    display: flex;
    margin-left: 60px;
    margin-top: 45px;
    display: flex;
    background-color: $textColorNoHovere;
    border-radius: 75px;
    width: 409px;
    height: 45px;
    position: relative;
    right: 25px;
    align-items: center;
    transition: all .3s;

}


.advantages__cards_elem_title-text {

    color: $textColorContrast;
    font-family: Lack;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-left: 25px;
}

.advantages__cards_elem_desk_text {

    color: $textColorContrast;
    font-family: Lack;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 350px;
    height: 186px;
    margin-top: 40px;
}

.advantages__cards_elem_desk {
    margin-left: 60px;
    display: flex;
    text-align: left;
}
.advantages__cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: space-evenly;
    margin-bottom: 100px;
    padding-left: 12px;
    padding-right: 12px;
}
</style>