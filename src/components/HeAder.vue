<template>
    <div class="header center">
        <div class="header__comand">
           <a href="#comand" class=""> <h3 class="header__comand_elem header__links">КОМАНДА</h3></a>
        </div>
        <div class="header__advantages">
            <a href="#advantages" class=""> <h3 class="header__advantages_elem header__links">ПОЧЕМУ МЫ?</h3></a>
        </div>
        <div class="header__logo">
            <a href="http://localhost:8080/" class=""><img src="../assets/logo.svg" alt="logo" class="header__logo_elem"></a>
        </div>
        <div class="header__catalog">
            <a href="http://localhost:8080/catalog" class=""><h3 class="header__catalog_elem header__links">НАШИ ПОХОДЫ</h3></a>
        </div>
        <div class="header__contacts">
           <a href="#footer" class=""><h3 class="header__contacts_elem header__links">КОНТАКТЫ</h3></a> 
        </div>

    </div>
</template>

<script>
export default {
    name: 'HeAder',

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
.header {
    // border: 1px solid #ffffff;
    display: flex;
    flex-direction: row;
    width: 1320px;
    height: 60px;
    background-color: #35363a;
    // background-color: #277782;
    border-radius: 60px;
    flex-wrap: nowrap;
    align-content: space-around;
    align-items: center;
    justify-content: space-evenly;
    left: 80px;
    position: fixed;
    z-index: 2;
    top: 10px;
    transition: all .3s;

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
            color: rgb(162, 201, 223);
        }
    }

    &__logo {
        &_elem {
            width: 50px;
            height: 50px;
        }
    }
}
@media (max-width: 1020px) and (min-width: 766px) {
    .header{
       width: 640px; 
    }
}
@media (max-width: 1040px)and (min-width: 1021px) {
    .header{
       width: 875px; 
    }
}
</style>