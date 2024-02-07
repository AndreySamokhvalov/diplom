<template>
  <div id="about" class="about center_img">
    <HeAder />
    <div class="about__content">
      <div class="about__content_title">
        <h1 class="about__content_title_elem">О НАШЕМ КЛУБЕ</h1>
      </div>
      <div class="about__content_body">
        <p class="about__content_body_text first">Турклуб «Лесной драйв» специализируется на создании незабываемых
          приключений в глубинах российской природы. Мы предлагаем широкий спектр туров, включая однодневные походы,
          многодневные пешие маршруты, захватывающие экспедиции, экотуры и многое другое</p>
        <p class="about__content_body_text second">Наша команда опытных гидов и путешественников прекрасно знакома
          с лесными территориями России и способна создать маршрут, подходящий для каждого уровня опыта и интересов.
          В нашей компании гордятся тем, что мы предоставляем высококачественное оборудование и индивидуальные
          консультации перед каждым походом, чтобы гарантировать безопасность и комфорт всех наших клиентов. Мы также
          стремимся защищать окружающую среду и содействовать ее сохранению, поэтому призываем всех участников наших
          походов соблюдать правила экологически ответственного поведения. Наша цель — создать незабываемые впечатления
          от природы России, помочь нашим клиентам испытать адреналин и укрепить связь с природой</p>
      </div>
      <div class="about__content_signature">
        <h2 class="about__content_signature_elem">С уважением, команда “Лесной драйв”</h2>
      </div>

    </div>
    
    <FoOter />
  </div>
</template>



<script>
import HeAder from '@/components/HeAder.vue';
import FoOter from '@/components/FoOter.vue';
export default {
  name: 'about',

  data() {
    return {

    };
  },
  components: {
    FoOter,
    HeAder,

  },

  mounted() {

  },

  methods: {
  },
};
</script>

<style lang="scss" scoped>
.about__content {
  display: flex;
  flex-direction: column;
  align-items: center;

  &_title {
    margin-left: 16px;
    margin-right: 16px;
    max-width: 563px;
    height: auto;
    margin-top: 80px;

    &_elem {
      color: $textColorDisplay;
      font-family: Despair Display;
      font-size: 60px;
      font-weight: 700;
      line-height: 84px;
      letter-spacing: 0em;
      text-align: center;

    }
  }

  &_body {
    margin-top: 120px;
    margin-left: 16px;
    margin-right: 16px;
    max-width: 800px;
    height: auto;
    text-align: center;
    margin-bottom: 24px ;
    &_elem {
      color: $textColorLack;
      font-family: Lack;
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0em;
      text-align: left;
     

    }
  }

  &_signature {
    margin-top: 52px ;
    margin-left: 16px;
    margin-right: 16px;
    max-width: 365px;
    height: auto;

    &_elem {
      color: $textColorLack;
      font-family: Lack;
      font-size: 18px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}
.first{
  margin-bottom: 24px ;
}
</style>
