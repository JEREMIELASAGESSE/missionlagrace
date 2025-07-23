<template>
  <div class="contact">
    <section class="image">
      <h1>Contactez-nous</h1>
      <p>Nous serions ravis de vous entendre !</p>
    </section>

    <p>Pour toute question ou information, n'hésitez pas à nous contacter.</p>
    <p>
      Vous pouvez nous joindre par email à
      <a href="mailto:contact@example.com">ici</a> ou par téléphone au
      <a href="tel:+123456789">+123456789</a>.
    </p>
    <p>Nous sommes là pour vous aider et répondre à vos besoins.</p>
    <p>Merci de votre intérêt pour notre église.</p>
    <p>Nous attendons avec impatience de vos nouvelles !</p>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
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
body {
  margin: 0;
  padding: 0;
  background-color: #9b7777; /* Couleur de fond */
  font-family: Arial, sans-serif; /* Police de caractères */
}
.contact {
  margin-top: 6rem;
  text-align: center;
}
.image {
  background-image: url("@/assets/images/bible3.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 180px;
}
</style>
