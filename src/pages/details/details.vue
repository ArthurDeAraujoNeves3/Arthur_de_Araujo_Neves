<script setup>
import Benefits from "./sections/benefits/benefits.vue";
import CarParts from "./sections/carParts.vue";
import FAQ from "./sections/faq.vue";
import Hero from "./sections/hero.vue";
import Technology from "./sections/technology.vue";
import Highway from "../../assets/images/vinci/highway.jpg"
</script>

<template>
  <Hero />
  <Technology />

  <!--Carro na highway-->
  <section class="highway">
    <figure>
      <img
        :src="Highway"
        alt="Carro sendo dirigido na estrada"
        draggable="false"
      />
    </figure>
  </section>

  <Benefits />
  <CarParts />
  <FAQ />
</template>

<style scoped>
main {
  margin: 0 auto;
  max-width: 1600px;
}

.highway {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.highway > figure {
  padding: 0px 24px;
}
.highway > figure,
.highway > figure > img {
  width: 100%;
  border-radius: 12px;
}
</style>
