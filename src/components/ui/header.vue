<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div id="vehicles_menu" class="header-menu hidden">
    <!-- Carros -->
    <div class="cars">
      <div class="car">
        <figure>
          <img
            src="../../assets/images/cars/sideVIew/white.svg"
            alt
            draggable="false"
            loading="false"
          />
        </figure>

        <h2>Modelo v1</h2>

        <div class="btns">
          <p class="btn">Ver mais</p>
          <p class="btn">Comprar</p>
        </div>
      </div>

      <div class="car">
        <figure>
          <img
            src="../../assets/images/cars/sideVIew/red.svg"
            alt
            draggable="false"
            loading="false"
          />
        </figure>

        <h2>Modelo v2</h2>

        <div class="btns">
          <p class="btn">Ver mais</p>
          <p class="btn">Comprar</p>
        </div>
      </div>

      <div class="car">
        <figure>
          <img
            src="../../assets/images/cars/sideVIew/black.svg"
            alt
            draggable="false"
            loading="false"
          />
        </figure>

        <h2>Modelo v3</h2>

        <div class="btns">
          <p class="btn">Ver mais</p>
          <p class="btn">Comprar</p>
        </div>
      </div>

      <div class="car car-second-row">
        <figure>
          <img
            src="../../assets/images/cars/sideVIew/green.svg"
            alt
            draggable="false"
            loading="false"
          />
        </figure>

        <h2>Modelo v1</h2>

        <div class="btns">
          <p class="btn">Ver mais</p>
          <p class="btn">Comprar</p>
        </div>
      </div>

      <div class="car car-second-row">
        <figure>
          <img
            src="../../assets/images/cars/sideVIew/white.svg"
            alt
            draggable="false"
            loading="false"
          />
        </figure>

        <h2>Modelo v1</h2>

        <div class="btns">
          <p class="btn">Ver mais</p>
          <p class="btn">Comprar</p>
        </div>
      </div>

      <div class="car car-second-row">
        <figure>
          <img
            src="../../assets/images/cars/sideVIew/white.svg"
            alt
            draggable="false"
            loading="false"
          />
        </figure>

        <h2>Modelo v1</h2>

        <div class="btns">
          <p class="btn">Ver mais</p>
          <p class="btn">Comprar</p>
        </div>
      </div>
    </div>

    <!-- Seções -->
    <div class="sections">
      <div class="title">
        <p>Navegue</p>
      </div>

      <div class="pages">
        <p>Ofertas</p>
        <p>Test drive</p>
        <p>Lojas</p>
        <p>Serviços</p>
        <p>Sac</p>
        <p>Privacidade</p>
      </div>
    </div>
  </div>

  <header>
    <figure>
      <img
        src="../../assets/images/brand/Logo-name.svg"
        alt="Vinci Veículos"
        draggable="false"
      />
    </figure>

    <div class="header-pages">
      <RouterLink to="/" class="header-link">
        <p>Home</p>
        <div class="line"></div>
      </RouterLink>
      <div class="header-link">
        <p>Sobre</p>
        <div class="line"></div>
      </div>
      <div onclick="openCloseVehiclesMenu()" class="header-link">
        <p>Veículos</p>
        <div class="line"></div>
      </div>
      <div class="header-link">
        <p>Serviços</p>
        <div class="line"></div>
      </div>
      <div class="header-link">
        <p>Test Drive</p>
        <div class="line"></div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  z-index: 20px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  background-color: var(--bg);
  align-items: center;
  padding: 0px 60px;
  width: 100%;
  height: 80px;
}
.header-pages {
  display: flex;
  align-items: center;
  gap: 100px;
}
.header-pages {
  transition: 0.2s;
}
.header-link > p {
  color: var(--text);
  text-decoration: nonnonee;
  font-family: "title";
  text-transform: uppercase;
  cursor: pointer;
}
.header-link > .line {
  width: 0px;
  height: 2px;
  background-color: var(--text);
  transition: 0.2s;
}
.header-link:hover > .line {
  width: 100%;
}

.header-menu {
  position: fixed;
  z-index: 10px;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  width: 100%;
  height: 500px;
  background-color: var(--bg);
  border-top: 1px solid #d8d8d8;
  box-shadow: 0 7px 27.4px -9px rgba(0, 0, 0, 0.13);
  padding: 16px 24px;
}
.header-menu > .cars {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 8px;
  width: fit-content;
}
.car {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.car-second-row {
  grid-row-start: 2;
}
.car > figure > img {
  aspect-ratio: 3/2;
  width: 100%;
  height: 100%;
}
.car > h2 {
  font-family: "title";
  text-transform: uppercase;
  font-size: 24px;
}
.car > .btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
}
.car > .btns > .btn {
  font-family: "title";
  text-transform: uppercase;
}

.car > .sections {
  width: 25%;
  height: 100%;
  background-color: red;
}

.header-menu > .sections {
  width: 320px;
}
.header-menu > .sections > .title {
  width: 100%;
  padding: 12px 0px;
  border-bottom: 1px solid var(--border);
  color: var(--subtitle);
  text-transform: uppercase;
}
.header-menu > .sections > .pages {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}
.header-menu > .sections > .pages > p {
  font-family: "title";
  text-transform: uppercase;
  color: black;
  cursor: pointer;
}
.header-menu > .sections > .pages > p:hover {
  color: var(--primary);
}
</style>
