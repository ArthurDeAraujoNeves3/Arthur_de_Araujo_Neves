<script setup>
import Charging from "../../../../assets/images/vinci/car_charging.png";
import CarPanel from "../../../../assets/images/vinci/car_panel.png";
import Charging2 from "../../../../assets/images/vinci/car_charging_2.png";
import Driving from "../../../../assets/images/vinci/man_driving_car.png";
import BenefitCard from "./benefitCard.vue";

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.";

const benefits = [
  { title: "Recarga rápida", imageSrc: Charging, desc: lorem },
  { title: "Painel de instrumentos", imageSrc: CarPanel, desc: lorem },
  { title: "Pontos de recarga", imageSrc: Charging2, desc: lorem },
  { title: "Design premiado", imageSrc: Driving, desc: lorem },
];
</script>

<template>
  <section class="benefits">
    <BenefitCard
      v-for="benefit in benefits"
      :key="benefit.title"
      :imageSrc="benefit.imageSrc"
      :title="benefit.title"
      :desc="benefit.desc"
    />
  </section>
</template>

<style scoped>
.benefits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;
  padding: 0 60px;
}

/* Tablet: 2 colunas */
@media (max-width: 1120px) {
  .benefits {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 24px;
  }
}

/* Celular: 1 coluna */
@media (max-width: 640px) {
  .benefits {
    grid-template-columns: 1fr;
  }
}
</style>