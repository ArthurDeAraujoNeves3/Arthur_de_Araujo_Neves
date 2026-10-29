<script setup>
import CarCard from '@/components/ui/carCard.vue';

</script>

<template>
  <section class="cars">
    <!--V2-->
    <CarCard
      title="VINCI MODEL V2"
      :power=300
      :autonomy=500
      :weight=1.500
      technology="gps e smartlink"
    />

    <!--V1-->
    <CarCard
      title="VINCI MODEL V1"
      :power=300
      :autonomy=500
      :weight=1.500
      technology="gps e smartlink"
      v1
    />
  </section>
  <section class="car1"></section>
</template>

<style scoped>
.cars {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  gap: 128px;
  padding-top: 64px;
  padding: 0px 16px;
}

@media (max-width: 1080px) {
  .cars {
    flex-direction: column;
  }
}
</style>
