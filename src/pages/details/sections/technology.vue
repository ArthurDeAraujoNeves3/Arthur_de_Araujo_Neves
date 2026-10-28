<script setup></script>

<template>
  <section class="technology">
    <p>Tecnologia alidada ao futuro</p>

    <div class="specs">
      <!--KM-->
      <div class="spec">
        <p class="title">520 km</p>
        <p class="desc">com 1 carga</p>
      </div>

      <!--RPM-->
      <div class="spec">
        <p class="title">2.800 rpm</p>
        <p class="desc">de torque</p>
      </div>

      <!--GARANTIA-->
      <div class="spec">
        <p class="title">10 anos</p>
        <p class="desc">garantia</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technology {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.technology > p {
  color: var(--subtitle);
  text-transform: uppercase;
}
.technology > .specs {
  display: flex;
  align-items: center;
  gap: 64px;
}

.spec {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.spec > .title {
  font-family: "title";
  text-transform: uppercase;
  font-size: 72px;
  color: black;
}
.spec > .desc {
  font-family: "title";
  text-transform: uppercase;
  font-size: 24px;
  color: black;
}
</style>
