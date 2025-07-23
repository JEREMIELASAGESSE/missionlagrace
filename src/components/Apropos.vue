<template>
  <section class="apropos">
    <h2>À propos de nous</h2>
    <p>
      Bienvenue sur le site de MEGD. Nous sommes une communauté engagée à
      partager la foi, l'amour et l'entraide. Notre mission est de rassembler,
      d'édifier et d'impacter positivement notre environnement.
    </p>
    <ul>
      <li>Foi et spiritualité</li>
      <li>Solidarité et entraide</li>
      <li>Éducation et développement</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "AproposPage",
  components: {
    // Vous pouvez ajouter des composants ici si nécessaire
  },
  props: {
    // Vous pouvez ajouter des props ici si nécessaire
  },
  data() {
    return {
      // Vous pouvez ajouter des données ici si nécessaire
    };
  },
};
</script>

<style scoped>
.apropos {
  margin-top: 5rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}
.apropos h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
.apropos ul {
  margin-top: 1rem;
  padding-left: 1.2rem;
}
.apropos li {
  margin-bottom: 0.5rem;
}
</style>
