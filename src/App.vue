<script setup>
import { RouterView } from "vue-router"

import Header from "./components/ui/header.vue";
import Footer from "./components/ui/footer.vue";
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
</template>
