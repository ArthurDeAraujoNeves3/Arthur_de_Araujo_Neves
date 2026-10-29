<script setup>
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Menu, X, ChevronDown } from "@lucide/vue";

import whiteImg from "../../assets/images/cars/sideVIew/white.svg";
import redImg from "../../assets/images/cars/sideVIew/red.svg";
import blackImg from "../../assets/images/cars/sideVIew/black.svg";
import greenImg from "../../assets/images/cars/sideVIew/green.svg";

const route = useRoute();

const showVehiclesHeader = ref(false); // submenu desktop
const mobileOpen = ref(false); // painel hamburger
const mobileVehiclesOpen = ref(false); // acordeão de veículos no mobile

// Troque pelos seus modelos reais
const vehicles = [
  { id: 1, name: "Modelo V1", image: whiteImg },
  { id: 2, name: "Modelo V2", image: redImg },
  { id: 3, name: "Modelo V3", image: blackImg },
  { id: 4, name: "Modelo V4", image: greenImg },
  { id: 5, name: "Modelo V5", image: whiteImg },
  { id: 6, name: "Modelo V6", image: whiteImg },
];

const sectionPages = [
  "Ofertas",
  "Test drive",
  "Lojas",
  "Serviços",
  "Sac",
  "Privacidade",
];

function closeAll() {
  showVehiclesHeader.value = false;
  mobileOpen.value = false;
  mobileVehiclesOpen.value = false;
}

function toggleMobile() {
  mobileOpen.value = !mobileOpen.value;
  if (!mobileOpen.value) mobileVehiclesOpen.value = false;
}

// Trava o scroll da página enquanto o painel está aberto
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

// Fecha ao trocar de rota
watch(() => route.path, closeAll);
</script>

<template>
  <div ref="root">
    <!-- ============ Submenu de veículos (desktop) ============ -->
    <Transition name="drop">
      <div v-if="showVehiclesHeader" id="vehicles_menu" class="header-menu">
        <div class="cars">
          <div v-for="car in vehicles" :key="car.id" class="car">
            <figure>
              <img
                :src="car.image"
                :alt="car.name"
                draggable="false"
                loading="lazy"
              />
            </figure>

            <h2>{{ car.name }}</h2>

            <div class="btns">
              <p class="btn">Ver mais</p>
              <p class="btn">Comprar</p>
            </div>
          </div>
        </div>

        <div class="sections">
          <div class="title">
            <p>Navegue</p>
          </div>

          <div class="pages">
            <p v-for="page in sectionPages" :key="page">{{ page }}</p>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ============ Header ============ -->
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
        <div
          @click="showVehiclesHeader = !showVehiclesHeader"
          class="header-link"
        >
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

      <button
        class="hamburguer"
        type="button"
        :aria-label="mobileOpen ? 'Fechar menu' : 'Abrir menu'"
        :aria-expanded="mobileOpen"
        aria-controls="mobile_menu"
        @click="toggleMobile"
      >
        <X v-if="mobileOpen" :size="24" />
        <Menu v-else :size="24" />
      </button>
    </header>

    <!-- ============ Menu mobile ============ -->
    <Transition name="fade">
      <div v-if="mobileOpen" class="overlay" @click="closeAll"></div>
    </Transition>

    <nav id="mobile_menu" class="mobile-menu" :class="{ open: mobileOpen }">
      <RouterLink to="/" class="mobile-link">Home</RouterLink>
      <button type="button" class="mobile-link">Sobre</button>

      <button
        type="button"
        class="mobile-link"
        :aria-expanded="mobileVehiclesOpen"
        @click="mobileVehiclesOpen = !mobileVehiclesOpen"
      >
        Veículos
        <ChevronDown
          :size="22"
          class="chevron"
          :class="{ rotated: mobileVehiclesOpen }"
        />
      </button>

      <!-- Acordeão de veículos -->
      <div class="accordion" :class="{ open: mobileVehiclesOpen }">
        <div class="accordion-inner">
          <div v-for="car in vehicles" :key="car.id" class="m-car">
            <img
              :src="car.image"
              :alt="car.name"
              draggable="false"
              loading="lazy"
            />

            <div class="m-car-info">
              <h3>{{ car.name }}</h3>
              <div class="m-car-btns">
                <button type="button">Ver mais</button>
                <button type="button">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="mobile-link">Serviços</button>
      <button type="button" class="mobile-link">Test Drive</button>

      <div class="mobile-secondary">
        <p class="mobile-secondary-title">Navegue</p>
        <button v-for="page in sectionPages" :key="page" type="button">
          {{ page }}
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
/* ================= Header ================= */
header {
  position: fixed;
  z-index: 30;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg);
  padding: 0px 60px;
  width: 100%;
  height: 80px;
}
.header-pages {
  display: flex;
  align-items: center;
  gap: 100px;
}
.header-link {
  text-decoration: none;
}
.header-link > p {
  color: var(--text);
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

.hamburguer {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  color: var(--text);
  cursor: pointer;
}

/* ================= Submenu desktop ================= */
.header-menu {
  position: fixed;
  z-index: 20;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  background-color: var(--bg);
  border-top: 1px solid #d8d8d8;
  box-shadow: 0 7px 27.4px -9px rgba(0, 0, 0, 0.13);
  padding: 16px 24px;
}
.header-menu > .cars {
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 220px));
  gap: 16px 8px;
  width: fit-content;
}
.car {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.car > figure > img {
  aspect-ratio: 3/2;
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  cursor: pointer;
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

/* ================= Menu mobile ================= */
.overlay {
  position: fixed;
  z-index: 24;
  inset: 80px 0 0 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.mobile-menu {
  position: fixed;
  z-index: 25;
  top: 80px;
  right: 0;
  bottom: 0;
  width: min(420px, 100%);
  overflow-y: auto;
  overscroll-behavior: contain;
  background-color: var(--bg);
  padding: 8px 24px 32px;
  border-left: 1px solid #d8d8d8;

  transform: translateX(100%);
  visibility: hidden;
  transition:
    transform 0.3s ease,
    visibility 0s linear 0.3s;
}
.mobile-menu.open {
  transform: translateX(0);
  visibility: visible;
  transition:
    transform 0.3s ease,
    visibility 0s;
}

.mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px 0;
  background: none;
  border: none;
  border-bottom: 1px solid var(--border);
  color: var(--text);
  font-family: "title";
  font-size: 24px;
  text-transform: uppercase;
  text-align: left;
  text-decoration: none;
  cursor: pointer;
}
.chevron {
  transition: transform 0.2s;
}
.chevron.rotated {
  transform: rotate(180deg);
}

/* Acordeão (anima de 0 até a altura do conteúdo) */
.accordion {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}
.accordion.open {
  grid-template-rows: 1fr;
}
.accordion-inner {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.m-car {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
}
.m-car > img {
  width: 120px;
  aspect-ratio: 3/2;
  object-fit: contain;
  flex-shrink: 0;
}
.m-car-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.m-car-info > h3 {
  font-family: "title";
  font-weight: normal;
  font-size: 20px;
  text-transform: uppercase;
  color: var(--text);
}
.m-car-btns {
  display: flex;
  gap: 16px;
}
.m-car-btns > button {
  background: none;
  border: none;
  padding: 0;
  font-family: "title";
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: underline;
  color: var(--text);
  cursor: pointer;
}

.mobile-secondary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding-top: 24px;
}
.mobile-secondary-title {
  font-size: 14px;
  text-transform: uppercase;
  color: var(--subtitle);
}
.mobile-secondary > button {
  background: none;
  border: none;
  padding: 0;
  font-family: "title";
  font-size: 18px;
  text-transform: uppercase;
  color: var(--text);
  cursor: pointer;
}

/* ================= Transições ================= */
.drop-enter-active,
.drop-leave-active {
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.drop-enter-from,
.drop-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ================= Responsivo ================= */
@media (max-width: 1120px) {
  header {
    padding: 0 24px;
  }
  .header-pages,
  .header-menu {
    display: none;
  }
  .hamburguer {
    display: flex;
  }
}

/* Garante que o painel mobile nunca apareça no desktop */
@media (min-width: 1121px) {
  .mobile-menu,
  .overlay {
    display: none;
  }
}
</style>
