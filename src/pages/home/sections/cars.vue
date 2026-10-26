<script setup></script>

<template>
  <section class="cars">
    <!--V2-->
    <div class="car-model">
      <!--Header-->
      <div class="header">
        <p>VINCI MODEL V2</p>

        <div class="details">
          <div class="detail">
            <p class="title">Potência:</p>
            <p>300 cavalos</p>
          </div>

          <div class="detail">
            <p class="title">Autonomia:</p>
            <p>500km por carga</p>
          </div>

          <div class="detail">
            <p class="title">Peso:</p>
            <p>1.500 kg</p>
          </div>

          <div class="detail">
            <p class="title">Tecnologia:</p>
            <p>gps e smartink</p>
          </div>
        </div>
      </div>

      <figure>
        <img
          src="../../../assets/images/cars/v2.png"
          alt="Carro"
          draggable="false"
        />
      </figure>

      <!--Footer-->
      <div class="footer">
        <p class="desc">A SUV mais robusta da categoria</p>
        <span onclick class="link">Conheça</span>
      </div>
    </div>

    <!--V1-->
    <div class="car-model">
      <!--Header-->
      <div class="header">
        <p>VINCI MODEL V1</p>

        <div class="details">
          <div class="detail">
            <p class="title">Potência:</p>
            <p>300 cavalos</p>
          </div>

          <div class="detail">
            <p class="title">Autonomia:</p>
            <p>500km por carga</p>
          </div>

          <div class="detail">
            <p class="title">Peso:</p>
            <p>1.500 kg</p>
          </div>

          <div class="detail">
            <p class="title">Tecnologia:</p>
            <p>gps e smartink</p>
          </div>
        </div>
      </div>

      <figure>
        <img
          src="../../../assets/images/cars/v1.png"
          alt="Carro"
          draggable="false"
        />
      </figure>

      <!--Footer-->
      <div class="footer">
        <p class="desc">A SUV mais robusta da categoria</p>
        <span onclick class="link">Conheça</span>
      </div>
    </div>
  </section>
  <section class="car1"></section>
</template>

<style scoped>
.cars {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 128px;
  padding-top: 64px;
}
.car-model {
  display: flex;
  flex-direction: column;
}
.car-model > .header {
  display: flex;
  align-items: start;
  justify-content: space-between;
}
.car-model > .header > p {
  font-family: "title";
  font-size: 24px;
  color: black;
}
.car-model > .header > .details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.car-model > .header > .details > .detail {
  display: flex;
  flex-direction: row;
  text-transform: uppercase;
  font-family: "title";
}
.car-model > .header > .details > .detail > .title {
  width: 125px;
  color: black;
}
.car-model > .header > .details > .detail > p {
  color: var(--subtitle);
  white-space: nowrap;
}
.car-model > figure > img {
  width: 100%;
}
.car-model > .footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "title";
  text-transform: uppercase;
}
.car-model > .footer > .desc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  color: var(--subtitle);
}
.car-model > .footer > .link {
  text-decoration: underline;
  color: black;
  font-size: 20px;
  cursor: pointer;
}
</style>
