<script setup>
import { ref } from "vue";
import ArrowDown from "../../../assets/images/vinci/arrow_down.svg";

const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

const questions = [
  {
    question:
      "Qual é a autonomia real da bateria em diferentes condições de condução?",
  },
  {
    question:
      "Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores rápidos?",
  },
  {
    question:
      "Como funciona a infraestrutura de recarga para viagens de longa distância?",
  },
  {
    question:
      "Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?",
  },
  {
    question:
      "Quais são as principais economias em manutenção e impostos comparado a um carro a combustão?",
  },
];
</script>

<template>
  <section class="faq">
    <div class="heading">
      <p class="title">faq</p>
      <p class="desc">perguntas frequentes</p>
    </div>

    <div class="questions">
      <div
        v-for="(item, index) in questions"
        :key="item.question"
        class="question"
        :class="{ open: openIndex === index }"
      >
        <button
          type="button"
          class="question-header"
        >
          <span>{{ item.question }}</span>

          <figure>
            <img :src="ArrowDown" alt="" draggable="false" />
          </figure>
        </button>
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
  width: 100%;
  padding: 0 60px;
}
.faq > .heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.faq > .heading > .title {
  font-family: "title";
  color: var(--text);
  font-size: clamp(32px, 4vw, 42px);
  text-transform: uppercase;
}
.faq > .heading > .desc {
  font-family: "title";
  color: var(--subtitle);
  font-size: clamp(18px, 2vw, 22px);
  text-transform: uppercase;
}

.faq > .questions {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
}
.question {
  border-bottom: 1px solid var(--border);
}

.question-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  padding: 20px 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
}
.question-header > span {
  flex: 1;
  min-width: 0;
  font-family: "title";
  text-transform: uppercase;
  font-size: clamp(16px, 2vw, 20px);
  color: var(--title);
}
.question-header > figure {
  flex-shrink: 0;
  display: flex;
}
.question-header > figure > img {
  width: 20px;
  transition: transform 0.2s;
}

/* Tablet */
@media (max-width: 1120px) {
  .faq {
    padding: 0 24px;
  }
}
</style>
