<template>
    <div class="helper center">
        <div class="helper__text">
            <div class="helper__text_title">
                <h2 class="helper__text_title_elem">Остались вопросы?</h2>
            </div>
            <div class="helper__text_desk">
                <span class="helper__text_desk_elem">
                    наши люди свяжутся с вашими людьми
                </span>
            </div>
            <div class="helper__text_btn">
                <button class="helper__text_btn_elem">отправить</button>
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
.helper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
}

.helper__text_title {
    display: flex;

    &_elem {
        color: $textColorDisplay;
        text-align: center;
        font-family: "Despair Display";
        font-size: 60px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: uppercase;
    }
}

.helper__text_desk {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;

    &_elem {
        color: $textColorLack;
        text-align: center;
        font-family: Lack;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
}

.helper__text_btn {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    &_elem {
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
}
</style>