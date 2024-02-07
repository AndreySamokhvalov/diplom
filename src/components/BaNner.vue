<template>
    <div class="banner">

        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :class="slides[current].className">
                <div v-show="slides[current].className == 'banner1'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <a href="http://localhost:3000/catalog" class="">
                            <h1 class="banner__show_first_title_elem">мечтаешь отправиться #в поход с такими же, как ты?
                            </h1>
                        </a>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem">многодневные экспедиции, пешие однодневные походы и прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <a href="http://localhost:3000/#footer" class=""> <button class="banner__show_first_btn_elem btns_config_for_blue"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button></a>
                    </div>
                    <div class="name_bord">
                        <img src="../assets/name_board_banner.svg" alt="">
                    </div>
                </div>

                <div v-show="slides[current].className == 'banner2'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <h1 class="banner__show_first_title_elem">попробуй себя в роли капитана походной группы</h1>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem">многодневные экспедиции, пешие однодневные походы и прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <a href="http://localhost:3000/#footer" class=""> <button class="banner__show_first_btn_elem btns_config_for_blue"></button><button class="banner__show_first_btn_elem btns_config_for_blue"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button></a>
                    </div>
                    <div class="name_bord board2">
                        <img src="../assets/board2.svg" alt="">
                    </div>
                </div>

                <div v-show="slides[current].className == 'banner3'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <h1 class="banner__show_first_title_elem">путешествие по московской области - это #безопасно</h1>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem ">многодневные экспедиции, пешие однодневные походы и
                            прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <a href="http://localhost:3000/#footer" class=""> <button class="banner__show_first_btn_elem btns_config_for_blue"></button><button class="banner__show_first_btn_elem btns_config_for_blue"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button></a>
                    </div>
                    <div class="name_bord board3">
                        <img src="../assets/board3.svg" alt="">
                    </div>
                </div>

                <div v-show="slides[current].className == 'banner4'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <h1 class="banner__show_first_title_elem">мечтаешь отправиться #в поход с такими же, как ты?</h1>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem">многодневные экспедиции, пешие однодневные походы и прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <a href="http://localhost:3000/#footer" class=""> <button class="banner__show_first_btn_elem btns_config_for_blue"></button><button class="banner__show_first_btn_elem btns_config_for_blue"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button></a>
                    </div>
                    <div class="name_bord board4">
                        <img src="../assets/name_board_banner.svg" alt="">
                    </div>
                </div>



            </div>
        </transition-group>
        <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5">
<path d="M30.0002 0C13.4584 0 0.000976562 13.4589 0.000976562 29.9998C0.000976562 46.5426 13.4584 60 30.0002 60C46.5421 60 59.999 46.5426 59.999 29.9998C59.999 13.4589 46.5421 0 30.0002 0ZM24.0249 30.3407L35.5471 41.8644C35.6702 41.9864 35.7378 42.1498 35.7378 42.3235C35.7378 42.4995 35.6702 42.662 35.5471 42.7821L34.4577 43.874C34.214 44.1176 33.7807 44.1186 33.5375 43.874L20.1457 30.4827C20.0232 30.3592 19.9566 30.1933 19.9585 30.0046C19.9566 29.8252 20.0232 29.6608 20.1453 29.5363L33.5579 16.1246C33.68 16.0025 33.8424 15.9349 34.017 15.9349C34.1902 15.9349 34.356 16.0025 34.4766 16.1246L35.5671 17.2164C35.8224 17.4669 35.8224 17.8813 35.5675 18.1342L24.0249 29.6783C23.8415 29.8611 23.8415 30.1568 24.0249 30.3407Z" fill="#19A2DC"/>
</g>
</svg>
        </div>
        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.5" filter="url(#filter0_d_95_223)">
<path d="M30.0002 0C13.458 0 0.000244141 13.4577 0.000244141 30.001C0.000244141 46.5418 13.458 60 30.0002 60C46.5425 60 59.9998 46.5418 59.9998 30.001C59.9998 13.4577 46.5425 0 30.0002 0ZM39.0476 30.4577L25.6341 43.8707C25.3905 44.1148 24.9596 44.1148 24.7154 43.8707L23.6235 42.7802C23.3711 42.5268 23.3716 42.1139 23.624 41.8605L35.1693 30.3166C35.2559 30.2291 35.305 30.1099 35.305 29.9844C35.305 29.8609 35.2554 29.7408 35.1693 29.6537L23.6449 18.1298C23.5233 18.0082 23.4552 17.8448 23.4552 17.6687C23.4552 17.496 23.5228 17.3316 23.6444 17.211L24.7349 16.1196C24.8569 15.998 25.0208 15.9304 25.1945 15.9304C25.3691 15.9294 25.5315 15.998 25.6536 16.1196L39.0476 29.5131C39.1716 29.6367 39.2388 29.8016 39.2363 29.9917C39.2388 30.1688 39.1716 30.3341 39.0476 30.4577Z" fill="#19A2DC"/>
</g>
<defs>
<filter id="filter0_d_95_223" x="-3.99976" y="0" width="67.9995" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_223"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_223" result="shape"/>
</filter>
</defs>
</svg>
        </div>
    </div>
</template>

<!-- <img src="../assets/slide_l.svg" alt="rigth" >
<img src="../assets/slide_r.svg" alt="left" > -->


<script>
export default {
    name: 'BaNner',

    data() {
        return {
            current: 0,
            direction: 1,
            transitionName: "fade",
            show: false,
            slides: [
                { className: "banner1" },
                { className: "banner2" },
                { className: "banner3" },
                { className: "banner4" },
            ]

        };
    },

    mounted() {
        this.show = true;
    },

    methods: {
        slide(dir) {
            this.direction = dir;
            dir === 1
                ? (this.transitionName = "slide-next")
                : (this.transitionName = "slide-prev");
            var len = this.slides.length;
            this.current = (this.current + dir % len + len) % len;
        }

    },
};
</script>

<style lang="scss" scoped>
.banner {

    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 2;

}

.banner__show_first {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 390px;


    &_title {
        display: flex;
        max-width: 1552px;
        // width: $widthSite;
        // height: auto;
        margin-bottom: 250px;

        &_elem {
            position: relative;
            z-index: 3;
            color: $textColorContrast;
            text-align: center;
            font-family: Despair Display;
            font-size: 76px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            text-transform: uppercase;
            top: 20px;

        }
    }

    &_desk {
        display: flex;
        margin-bottom: 70px;


        &_elem {
            color: $textColorContrast;
            font-family: Lack;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }

    }

    &_btn {
        display: inline-flex;
        padding: 16px 41px;
        justify-content: center;
        align-items: center;
        gap: 10px;

        &_elem {
            display: flex;
            border-radius: 60px;
            background: #19A2DC;
            margin-bottom: 120px;

            &_text {
                color: $textColorContrast;
                font-family: Lack;
                font-size: 32px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
                margin-top: 16px;
                margin-bottom: 16px;
                margin-left: 40px;
                margin-right: 40px;

            }
        }
    }
}

.name_bord {
    position: relative;
    top: -730px;
    left: 570px;
    // z-index: 1;

}

.banner__show_first_btn_elem:hover .banner__show_first_btn_elem_text {
    color: $btn_color;
}

.board2 {
    left: 522px;
}

.board3 {
    top: -640px;
    left: 318px;
}

.board4 {}



/* FADE IN  нжно ли?*/
.fade-enter-active {
    transition: opacity 1s;
}

.fade-enter {
    opacity: 0;
}

/* следующий слайд */
.slide-next-enter-active,
.slide-next-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-next-enter {
    transform: translate(100%);
}

.slide-next-leave-to {
    transform: translate(-100%);
}

/* предыдущий слайд */
.slide-prev-enter-active,
.slide-prev-leave-active {
    transition: transform 0.5s ease-in-out;
}

.slide-prev-enter {
    transform: translate(-100%);
}

.slide-prev-leave-to {
    transform: translate(100%);
}



.banner1 {
    // background: #4a69bd;
    background-image: url("../assets/banner_1.jpg");
}

.banner2 {
    // background: #e55039;
    background-image: url("../assets/banner_2.jpg");
}

.banner3 {
    // background: #f6b93b;
    background-image: url("../assets/banner_3.jpg");
}

.banner4 {
    // background: #f6b93b;
    background-image: url("../assets/banner_4.jpg");
}


/* SLIDER STYLES */
body {
    overflow: hidden;
    margin: 0;
    font-size: 50px;
    font-family: "Crimson Text", sans-serif;
    color: #fff;
}



.slide {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.btn {
    z-index: 10;
    cursor: pointer;
    // border: 3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    position: absolute;
    top: calc(50% - 35px);
    left: 1%;
    transition: transform 0.3s ease-in-out;
    user-select: none;
}

.btn-next {
    left: auto;
    right: 1%;
}

.btn:hover {
    transform: scale(1.1);
}
@media (max-width: 767px) and (min-width: 420px) {
    svg{
        height: 35px;

    }
    .banner__show_first_title_elem {
        font-size: 30px;
    }
    .banner__show_first_desk_elem {
        font-size: 16px;
    }

    .name_bord {
        display: none;
    }

    .banner__show_first_btn_elem {
        margin-bottom: 214px;

    }

}
@media (max-width: 1020px) and (min-width: 766px) {

    .banner__show_first_title_elem {
        font-size: 50px;
    }

    .name_bord {
        display: none;
    }

    .banner__show_first_btn_elem {
        margin-bottom: 214px;

    }
}
@media (max-width: 1450px)and (min-width: 1022px) {
    .banner__show_first_title_elem {
        font-size: 58px;
    }
    .banner__show_first_desk_elem {
        font-size: 20px;
    }

    .name_bord {
        display: none;
    }

    .banner__show_first_btn_elem {
    

    }
}
</style>