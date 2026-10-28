<script setup></script>

<template>
  <section class="Hero">
    <div class="Content">
      <h1>VINCI MODEL V3</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever.
      </p>

      <div class="btns">
        <button class="btn btn-primary">Modelos</button>
        <button class="btn btn-outline">Test Drive</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.Hero {
  background-image: url("../../../assets/images/Hero.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;
}
.Hero > .Content {
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 50%;
  height: 100%;
  padding: 64px 64px;
  gap: 24px;
}
.Hero > .Content > h1 {
  font-family: "title";
  font-weight: normal;
  font-size: 72px;
  color: white;
}
.Hero > .Content > p {
  font-size: 20px;
  color: white;
}
.Hero > .Content > .btns {
  display: flex;
  align-items: center;
  width: 500px;
  gap: 16px;
}
</style>
