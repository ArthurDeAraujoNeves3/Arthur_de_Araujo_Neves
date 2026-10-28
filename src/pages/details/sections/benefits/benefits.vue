<script setup>
import Charging from "../../../../assets/images/vinci/car_charging.png";
import CarPanel from "../../../../assets/images/vinci/car_panel.png";
import Charging2 from "../../../../assets/images/vinci/car_charging_2.png";
import Driving from "../../../../assets/images/vinci/man_driving_car.png";
import BenefitCard from "./benefitCard.vue";
</script>

<template>
  <section class="benefits">
    <!--Recarga rapida-->
    <BenefitCard
    :imageSrc="Charging"
    title="Recarga rápida"
    desc="Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard."
    />
    
    <!--Recarga rapida-->
    <BenefitCard
      :imageSrc="CarPanel"
      title="Painel de instrumentos"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard."
    />

    <!--Recarga rapida-->
    <BenefitCard
      :imageSrc="Charging2"
      title="Pontos de recarga"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard."
    />

    <!--Direção-->
    <BenefitCard
      :imageSrc="Driving"
      title="Design premiado"
      desc="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard."
    />
  </section>
</template>

<style scoped>
.benefits {
  display: flex;
  align-items: center;
}
</style>
