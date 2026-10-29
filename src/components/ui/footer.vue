<script setup>
import Logo from "../../assets/images/brand/Logo-name.svg";

const sections = [
  {
    title: "Sobre",
    items: ["A marca", "História", "Qualidade", "Onde estamos", "Investidores"],
  },
  {
    title: "Contato",
    items: ["Fale Conosco", "Atendimento", "SAC"],
  },
  {
    title: "SAC",
    items: ["Canais Oficiais", "Redes Sociais", "Suporte"],
  },
];
</script>

<template>
  <footer>
    <section class="Pages">
      <section class="Logo">
        <figure>
          <img :src="Logo" alt="Vinci Veículos" draggable="false" />
        </figure>
      </section>

      <section class="Sections">
        <div v-for="section in sections" :key="section.title" class="Section">
          <h3>{{ section.title }}</h3>

          <div>
            <p v-for="item in section.items" :key="item">{{ item }}</p>
          </div>
        </div>
      </section>
    </section>

    <!--COPYRIGHT-->
    <section class="Copyright">
      <p>©Copyright 2026</p>
      <p>Todos os direitos reservados</p>
    </section>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  min-height: 300px;
  padding: 64px 60px 32px;
}
footer > .Pages {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 48px;
}
footer > .Pages > .Logo img {
  display: block;
  max-width: 100%;
}
footer > .Pages > .Sections {
  display: flex;
  gap: 64px;
}
footer > .Pages > .Sections > .Section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
footer > .Pages > .Sections > .Section > h3 {
  font-family: "title";
  font-size: 24px;
  font-weight: normal;
  color: black;
  letter-spacing: 4.8px;
}
footer > .Pages > .Sections > .Section > div {
  display: flex;
  flex-direction: column;
  font-family: "title";
  color: var(--subtitle);
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 18px;
  gap: 16px;
}
footer > .Pages > .Sections > .Section > div > p {
  cursor: pointer;
  transition: 0.2s;
}
footer > .Pages > .Sections > .Section > div > p:hover {
  color: var(--primary);
}
.Copyright {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
}
.Copyright > p {
  font-family: "title";
  color: var(--subtitle);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 6.4px;
}

/* Tablet */
@media (max-width: 1120px) {
  footer {
    padding: 48px 24px 32px;
  }
  footer > .Pages {
    flex-direction: column;
    gap: 40px;
  }
  footer > .Pages > .Sections {
    width: 100%;
    justify-content: space-between;
    gap: 32px;
  }
}

/* Celular */
@media (max-width: 640px) {
  footer > .Pages > .Sections {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px 24px;
  }
  footer > .Pages > .Sections > .Section > h3 {
    font-size: 20px;
    letter-spacing: 3px;
  }
  footer > .Pages > .Sections > .Section > div {
    font-size: 16px;
    letter-spacing: 2px;
  }
  .Copyright {
    flex-direction: column;
  }
  .Copyright > p {
    font-size: 14px;
    letter-spacing: 3px;
  }
}
</style>