<script setup></script>

<template>
  <section class="benefits">
    <!--Recarga rapida-->
    <div class="benefit">
      <div class="heading">
        <p class="title">Recarga rápida</p>
        <p class="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>

      <figure>
        <img
          src="../../../assets/images/vinci/car_charging.png"
          alt="Mulher carregando seu carro"
          draggable="false"
        />
      </figure>
    </div>

    <!--Recarga rapida-->
    <div class="benefit">
      <div class="heading">
        <p class="title">Painel de instrumentos</p>
        <p class="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>

      <figure>
        <img
          src="../../../assets/images/vinci/car_panel.png"
          alt="Painel multimídia interno do carro"
          draggable="false"
        />
      </figure>
    </div>

    <!--Recarga rapida-->
    <div class="benefit">
      <div class="heading">
        <p class="title">Pontos de recarga</p>
        <p class="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>

      <figure>
        <img
          src="../../../assets/images/vinci/car_charging_2.png"
          alt="Carro sendo carregado"
          draggable="false"
        />
      </figure>
    </div>

    <!--Recarga rapida-->
    <div class="benefit">
      <div class="heading">
        <p class="title">Design premiado</p>
        <p class="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>

      <figure>
        <img
          src="../../../assets/images/vinci/man_driving_car.png"
          alt="Homem dirigindo carro"
          draggable="false"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.benefits {
  display: flex;
  align-items: center;
}
.benefit {
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-left: 1px solid var(--subtitle);
}
.benefit > .heading {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 6px 12px;
}
.benefit > .heading > .title {
  font-family: "title";
  font-size: 26px;
  color: var(--text);
}
.benefit > .heading > .desc {
  color: var(--subtitle);
}
.benefit > figure {
  height: 272px;
}
.benefit > figure,
.benefit > figure > img {
  aspect-ratio: 3 / 2;
  width: 100%;
  height: 100%;
}
</style>
