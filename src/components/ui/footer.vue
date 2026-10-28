<script setup></script>

<template>
  <footer>
    <section class="Pages">
      <section class="Logo">
        <figure>
          <img
            src="../../assets/images/brand/Logo-name.svg"
            alt="Vinci Veículos"
            draggable="false"
          />
        </figure>
      </section>

      <section class="Sections">
        <div class="Section">
          <h3>Sobre</h3>

          <div>
            <p>A marca</p>
            <p>História</p>
            <p>Qualidade</p>
            <p>Onde estamos</p>
            <p>Investidores</p>
          </div>
        </div>

        <div class="Section">
          <h3>Contato</h3>

          <div>
            <p>Fale Conosco</p>
            <p>Atendimento</p>
            <p>SAC</p>
          </div>
        </div>

        <div class="Section">
          <h3>SAC</h3>

          <div>
            <p>Canais Oficiais</p>
            <p>Redes Sociais</p>
            <p>Suporte</p>
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
  width: 100%;
  height: 300px;
  padding: 0px 60px;
  padding-top: 64px;
}
footer > .Pages {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
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
.Copyright > p {
  font-family: "title";
  color: var(--subtitle);
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 6.4px;
}
</style>
