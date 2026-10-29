<script setup>
const specs = [
  { title: "520 km", desc: "com 1 carga" },
  { title: "2.800 rpm", desc: "de torque" },
  { title: "10 anos", desc: "garantia" },
];
</script>

<template>
  <section class="technology">
    <p>Tecnologia aliada ao futuro</p>

    <div class="specs">
      <div v-for="spec in specs" :key="spec.title" class="spec">
        <p class="title">{{ spec.title }}</p>
        <p class="desc">{{ spec.desc }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.technology {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 0 60px;
}
.technology > p {
  color: var(--subtitle);
  text-transform: uppercase;
  text-align: center;
}
.technology > .specs {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 32px 64px;
  width: 100%;
}

.spec {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}
.spec > .title {
  font-family: "title";
  text-transform: uppercase;
  font-size: clamp(36px, 5vw, 72px);
  color: black;
  white-space: nowrap;
}
.spec > .desc {
  font-family: "title";
  text-transform: uppercase;
  font-size: clamp(18px, 2vw, 24px);
  color: black;
}

/* Tablet */
@media (max-width: 1120px) {
  .technology {
    padding: 0 24px;
  }
  .technology > .specs {
    gap: 40px 48px;
  }
}

/* Celular: um embaixo do outro */
@media (max-width: 640px) {
  .technology > .specs {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
}
</style>
