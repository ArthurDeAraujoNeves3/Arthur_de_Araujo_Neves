<script setup>
const { imageSrc, title, desc } = defineProps({
  imageSrc: String,
  title: String,
  desc: String,
});
</script>

<template>
  <div class="benefit">
    <div class="heading">
      <p class="title">{{ title }}</p>
      <p class="desc">{{ desc }}</p>
    </div>

    <figure>
      <img
        :src="imageSrc"
        alt="Mulher carregando seu carro"
        draggable="false"
      />
    </figure>
  </div>
</template>

<style scoped>
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
