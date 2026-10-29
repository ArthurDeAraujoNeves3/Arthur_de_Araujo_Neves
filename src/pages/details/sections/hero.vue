<script setup>
import Car from "../../../assets/images/vinci/car.png";
</script>

<template>
  <section class="hero">
    <figure class="car">
      <img :src="Car" alt="Vinci Model 3" draggable="false" />
    </figure>

    <div class="content">
      <h1>VINCI MODEL V3</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever.
      </p>

      <div class="btns">
        <button class="btn btn-primary">Modelos</button>
        <button class="btn btn-outline-black">Test Drive</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.hero > .car > img {
  max-width: 100%;
  width: 1000px;
}
.hero > .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  gap: 16px;
}
.hero > .content > p {
  text-align: center;
}
.hero > .content > .btns {
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 70%;
}

@media (max-width: 1020px) {
  .hero > .content {
    width: 80%;
  }
}
</style>
