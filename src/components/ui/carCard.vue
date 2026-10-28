<script setup>
import { RouterLink } from "vue-router";
import V1 from "../../assets/images/cars/v1.png";
import V2 from "../../assets/images/cars/v2.png";

const { title, power, autonomy, weight, technology, v1 } = defineProps({
  title: String,
  power: Number,
  autonomy: Number,
  weight: Number,
  technology: String,
  v1: Boolean
});
</script>

<template>
  <div class="car-model">
    <!--Header-->
    <div class="header">
      <p>{{ title }}</p>

      <div class="details">
        <div class="detail">
          <p class="title">Potência:</p>
          <p>{{ power }} cavalos</p>
        </div>

        <div class="detail">
          <p class="title">Autonomia:</p>
          <p>{{ autonomy }}km por carga</p>
        </div>

        <div class="detail">
          <p class="title">Peso:</p>
          <p>{{ weight }} kg</p>
        </div>

        <div class="detail">
          <p class="title">Tecnologia:</p>
          <p>{{ technology }}</p>
        </div>
      </div>
    </div>

    <figure>
      <img
        :src="v1 ? V1 : V2"
        alt="Carro"
        draggable="false"
      />
    </figure>

    <!--Footer-->
    <div class="footer">
      <p class="desc">A SUV mais robusta da categoria</p>

      <RouterLink to="/details">
        <span class="link">Conheça</span>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
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
