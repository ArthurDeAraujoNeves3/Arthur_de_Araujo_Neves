<script setup>
  import ArrowDown from "../../../assets/images/vinci/arrow_down.svg"
</script>

<template>
  <section class="faq">
    <div class="heading">
      <p class="title">faq</p>
      <p class="desc">perguntas frequentes</p>
    </div>

    <div class="questions">
      <div class="question">
        <p>
          Qual é a autonomia real da bateria em diferentes condições de
          condução?
        </p>

        <figure>
          <img
            :src="ArrowDown"
            alt="Seta para baixo"
            draggable="false"
          />
        </figure>
      </div>

      <div class="question">
        <p>
          Quanto tempo o carro leva para carregar em tomadas residenciais e em
          carregadores rápidos?
        </p>

        <figure>
          <img
            :src="ArrowDown"
            alt="Seta para baixo"
            draggable="false"
          />
        </figure>
      </div>

      <div class="question">
        <p>
          Como funciona a infraestrutura de recarga para viagens de longa
          distância?
        </p>

        <figure>
          <img
            :src="ArrowDown"
            alt="Seta para baixo"
            draggable="false"
          />
        </figure>
      </div>

      <div class="question">
        <p>
          Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?
        </p>

        <figure>
          <img
            :src="ArrowDown"
            alt="Seta para baixo"
            draggable="false"
          />
        </figure>
      </div>

      <div class="question">
        <p>
          Quais são as principais economias em manutenção e impostos comparado a
          um carro a combustão?
        </p>

        <figure>
          <img
            :src="ArrowDown"
            alt="Seta para baixo"
            draggable="false"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.faq > .heading {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.faq > .heading > .title {
  font-family: "title";
  color: var(--text);
  font-size: 42px;
  text-transform: uppercase;
}
.faq > .heading > .desc {
  font-family: "title";
  color: var(--subtitle);
  font-size: 22px;
  text-transform: uppercase;
}
.faq > .questions {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.faq > .questions > .question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 64px;
}
.faq > .questions > .question > p {
  font-family: "title";
  text-transform: uppercase;
  font-size: 20px;
  color: var(--title);
  max-width: 80%;
}
.faq > .questions > .question > figure > img {
  width: 20px;
}
</style>
