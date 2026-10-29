<script setup>
import CarRedBullets from "../../../assets/images/vinci/car_red_bullets.png";

const legends = [
  { letter: "A", label: "Retrovisores inteligentes" },
  { letter: "B", label: "Rodas de liga leve" },
  { letter: "C", label: "Reconhecimento de digital" },
  { letter: "D", label: "Sensor de proximidade" },
  { letter: "E", label: "Antena 5G" },
  { letter: "F", label: "Design sofisticado" },
  { letter: "G", label: "Abertura automática" },
  { letter: "H", label: "Câmera de estacionamento" },
];
</script>

<template>
  <section class="car-parts">
    <div class="header">
      <div class="section-title">
        <p class="title">Vinci Model v2</p>
        <p class="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever.
        </p>
      </div>

      <!--Legendas-->
      <div class="legends">
        <div v-for="item in legends" :key="item.letter" class="point">
          <div class="ball">{{ item.letter }}</div>
          <p>{{ item.label }}</p>
        </div>
      </div>
    </div>

    <figure>
      <img
        :src="CarRedBullets"
        alt="Imagem de um carro com vários pontos vermelhos"
        draggable="false"
      />
    </figure>
  </section>
</template>

<style scoped>
.car-parts {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 0 60px;
}
.car-parts > .header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
}
.car-parts > .header > .section-title {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 380px;
  flex-shrink: 0;
  gap: 8px;
}
.car-parts > .header > .section-title > .title {
  text-transform: uppercase;
  font-family: "title";
  color: var(--title);
  font-size: clamp(30px, 4vw, 42px);
}
.car-parts > .header > .section-title > .desc {
  color: var(--subtitle);
}

/* Legendas: 2 colunas que preenchem na vertical (A-D, E-H) */
.car-parts > .header > .legends {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(4, auto);
  grid-auto-columns: max-content;
  gap: 8px 64px;
}
.point {
  display: flex;
  align-items: center;
  gap: 12px;
}
.point > .ball {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background-color: var(--text);
  color: var(--bg);
  font-family: "title";
  font-size: 20px;
  text-transform: uppercase;
}
.point > p {
  font-family: "title";
  text-transform: uppercase;
  color: var(--subtitle);
}

.car-parts > figure {
  width: 100%;
}
.car-parts > figure > img {
  display: block;
  width: 100%;
  height: auto;
}

/* Tablet: título em cima, legendas embaixo */
@media (max-width: 1120px) {
  .car-parts {
    padding: 0 24px;
  }
  .car-parts > .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }
  .car-parts > .header > .section-title {
    width: 100%;
    max-width: 520px;
  }
}

/* Celular: legendas em 1 coluna */
@media (max-width: 640px) {
  .car-parts > .header > .legends {
    grid-auto-flow: row;
    grid-template-rows: none;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 100%;
  }
}
</style>
