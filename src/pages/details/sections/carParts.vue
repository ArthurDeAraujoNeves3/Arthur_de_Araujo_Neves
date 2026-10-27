<script setup></script>

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
        <div class="column">
          <div class="point">
            <div class="ball">A</div>
            <p>Retrovisores inteligentes</p>
          </div>

          <div class="point">
            <div class="ball">B</div>
            <p>RODAS DE LIGA LEVE</p>
          </div>

          <div class="point">
            <div class="ball">C</div>
            <p>RECONHECIMENTO DE DIGITAL</p>
          </div>

          <div class="point">
            <div class="ball">D</div>
            <p>sensor de proximidade</p>
          </div>
        </div>

        <div class="column">
          <div class="point">
            <div class="ball">E</div>
            <p>antena 5g</p>
          </div>

          <div class="point">
            <div class="ball">F</div>
            <p>design sofisticado</p>
          </div>

          <div class="point">
            <div class="ball">G</div>
            <p>abertura automática</p>
          </div>

          <div class="point">
            <div class="ball">H</div>
            <p>câmera de estacionamento</p>
          </div>
        </div>
      </div>
    </div>

    <figure>
      <img
        src="./src/assets/images/vinci/car_red_bullets.png"
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
}
.car-parts > .header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.car-parts > .header > .section-title {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 380px;
  gap: 8px;
}
.car-parts > .header > .section-title > .title {
  text-transform: uppercase;
  font-family: "title";
  color: var(--title);
  font-size: 42px;
}
.car-parts > .header > .section-title > .desc {
  color: var(--subtitle);
}
.car-parts > .header > .legends {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;
}
.car-parts > .header > .legends > .column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.column > .point {
  display: flex;
  align-items: center;
  gap: 12px;
}
.column > .point > .ball {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background-color: var(--text);
  color: var(--bg);
  font-family: "title";
  font-size: 20px;
  text-transform: uppercase;
}
.column > .point > p {
  font-family: "title";
  text-transform: uppercase;
  color: var(--subtitle);
}
</style>
