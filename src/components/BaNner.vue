<template>
    <div class="banner crnter">

        <transition-group tag="div" :name="transitionName" class="slides-group">
            <div v-if="show" :key="current" class="slide" :class="slides[current].className">
                <div v-show="slides[current].className=='banner1'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <h1 class="banner__show_first_title_elem">мечтаешь отправиться #в поход с такими же, как ты?</h1>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem">многодневные экспедиции, пешие однодневные походы и прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <button class="banner__show_first_btn_elem"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button>
                    </div>
                    <div class="name_bord">
                        <img src="../assets/name_board_banner.svg" alt="">
                    </div>
                </div>

                <div v-show="slides[current].className=='banner2'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <h1 class="banner__show_first_title_elem">попробуй себя в роли капитана походной группы</h1>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem">многодневные экспедиции, пешие однодневные походы и прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <button class="banner__show_first_btn_elem"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button>
                    </div>
                    <div class="name_bord board2">
                        <img src="../assets/board2.svg" alt="">
                    </div>
                </div>

                <div v-show="slides[current].className=='banner3'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <h1 class="banner__show_first_title_elem">путешествие по московской области - это #безопасно</h1>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem ">многодневные экспедиции, пешие однодневные походы и прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <button class="banner__show_first_btn_elem"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button>
                    </div>
                    <div class="name_bord board3">
                        <img src="../assets/board3.svg" alt="">
                    </div>
                </div>

                <div v-show="slides[current].className=='banner4'" class="banner__show_first">
                    <div class="banner__show_first_title">
                        <h1 class="banner__show_first_title_elem">мечтаешь отправиться #в поход с такими же, как ты?</h1>
                    </div>
                    <div class="banner__show_first_desk">
                        <p class="banner__show_first_desk_elem">многодневные экспедиции, пешие однодневные походы и прогулки
                            на природе - залог здоровья каждого!</p>
                    </div>
                    <div class="banner__show_first_btn">
                        <button class="banner__show_first_btn_elem"><span
                                class="banner__show_first_btn_elem_text">заполнить заявку</span></button>
                    </div>
                    <div class="name_bord board4">
                        <img src="../assets/name_board_banner.svg" alt="">
                    </div>
                </div>

                
                
            </div>
        </transition-group>
        <div class="btn btn-prev" aria-label="Previous slide" @click="slide(-1)">
            &#10094;
        </div>
        <div class="btn btn-next" aria-label="Next slide" @click="slide(1)">
            &#10095
        </div>
    </div>
</template>

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
.name_bord{
    position: relative;
    top: -635px;
    left: 570px;
    // z-index: 1;

}
.board2{
    left: 522px;
}
.board3{
    top: -540px;
    left: 318px;
}
.board4{

}



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
    border: 3px solid #fff;
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
</style>