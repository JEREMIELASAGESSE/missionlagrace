<template>
  <Pagemenu />
  <router-view />
  <PiedPage />
</template>
<script>
import Pagemenu from "./components/menu.vue";
import PiedPage from "./components/pied.vue";
export default {
  name: "App",
  components: {
    Pagemenu,
    PiedPage,
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    // Vous pouvez ajouter des méthodes ici si nécessaire
  },
  mounted() {
    // Code à exécuter lorsque le composant est monté
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
</style>
