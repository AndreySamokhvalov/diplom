<template>
    <div id="footer" class="footer center_img">
        <div class="footer__promo">
            <div class="promo__text">
                <span class="promo__text_elem">
                    Отправьте нам свои контактные данные и мы без усилий подберём для
                    Вас идеальный поход в компании весёлых и отзывчивых!
                </span>
            </div>
            <div class="promo__phone">
                <h4 class="promo__phone_elem">8(999) 960 6060</h4>
            </div>
            <div class="promo__address">
                <span class="promo__address_elem">
                    Москва, Краснопресненская улица 43к3
                </span>
            </div>

        </div>
        <div class="footer__info">
            <div class="info_logo">
                <!-- здесь будет логотип -->
            </div>
            <div class="info_desk">
                <span class="info_desk_text">
                    Клуб активного спортивного туризма в Москве
                </span>
                <span class="info_desk_text">
                    Найди новых друзей и покоряй этот мир вместе с нами!
                </span>
            </div>
            <div class="info__priv">
                <a href="#" class="info_priv_link"></a>
            </div>
            <div class="info__icons1">
                <div class="info__icons_mail">
                    <img class="icons_svg" src="../assets/mail.svg" alt="mail">

                </div>
                <div class="info__icons_tg">
                    <img class="icons_svg" src="../assets/telega.svg" alt="tg">
                </div>
                <div class="info__icons_whatsUt">
                    <img class="icons_svg" src="../assets/whatsapp.svg" alt="wtsp">
                </div>
            </div>
            <div class="info__icons2">
                <div class="info__icons2_img icons_svg"><img src="../assets/visa.svg" alt="mail"></div>
                <div class="info__icons2_img icons_svg"><img src="../assets/GooglePay.svg" alt="gp"></div>
                <div class="info__icons2_img icons_svg"><img src="../assets/Mastercard.svg" alt="mc"></div>



            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'FoOter',

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
.footer {
    background-image: url("../assets/footer_ph.jpg");
    display: flex;
    background-position: center center;
    background-size: cover;
    background-attachment: local;
    background-clip: content-box;
    margin-bottom: 40px;
    justify-content: space-around;
    height: 300px;
    align-items: center;
}

.footer__promo {
    margin-top: 18px;
    display: flex;
    width: 582px;
    flex-direction: column;
    gap: 26px;
}
.footer__info{
    margin-top: 18px;
    display: flex;
    width: 582px;
    flex-direction: column;


}

.promo__text {
    text-align: left;

    &_elem {
        color: $textColorContrast;
        text-align: center;
        font-family: Lack;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}
.info_desk{
    text-align: left;
    &_text{
        color: $textColorContrast;
        text-align: center;
        font-family: Lack;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

    }
}
.promo__phone {
    text-align: left;

    &_elem {
        color: $textColorContrast;
        font-family: Despair Display;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
}

.promo__address {
    text-align: left;

    &_elem {
        color: $textColorContrast;
        text-align: center;
        font-family: Lack;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

}

.promo__icons {
    display: flex;
    margin-bottom: 18px;
    flex-direction: row;
    align-items: center;

}
.info__icons{
    display: flex;
    flex-direction: row;
    gap: 20px
    
}
.info__icons1{
    margin-top: 16px;
    display: flex;
    margin-bottom: 18px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: flex-end;
    gap: 12px;
}
.info__icons2{
    display: flex;
    margin-bottom: 18px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    gap: 12px;
    margin-left: 4px;
}
.icons_svg svg{
    fill: antiquewhite;
}
</style>