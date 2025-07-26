<template>
  <!-- Contenu de la page d'accueil -->
  <div class="acceiul">
    <h1>Psaume 63:2</h1>
    <!-- Vous pouvez ajouter du contenu ici -->
    <p>
      <strong>« Ô Dieu, tu es mon Dieu, je te cherche dès l’aurore ;</strong
      ><br />
      <strong>mon âme a soif de toi, ma chair languit après toi,</strong><br />
      <strong>dans une terre aride, desséchée, sans eau. »</strong>
    </p>
  </div>
  <section class="acceiul-description">
    <P>
      La Mission Evangélique La Grace De Dieu Est Un Ensemble D’églises Et De
      Camps Prières Basées Dans Le Domaine De La Délivrance Et La Restauration
      Des Ames Pour Nos Seigneur Jésus Christ.
    </P>
    <p>
      Nous sommes ravis de vous accueillir sur notre site. Notre église est un
      lieu de foi, d'amour et de communauté. Nous croyons en la puissance de
      l'Évangile et en la transformation que Dieu peut apporter dans la vie de
      chacun.
    </p>
  </section>
  <div class="acceiul-content">
    <p>
      Notre Mission Est De Proclamer L’évangile De Jésus-Christ, D’annoncer La
      Bonne Nouvelle Du Royaume De Dieu Et De Faire Des Disciples Dans Le Monde
      Entier.
    </p>
    <p>
      Nous Croyons Que La Parole De Dieu Est Puissante Pour Transformer Les
      Vies, Guérir Les Blessures Et Apporter La Rédemption À Tous Ceux Qui
      Croient.
    </p>
    <p>
      Notre Vision Est De Voir Des Vies Changées, Des Cœurs Rénovés Et Des
      Communautés Transformées Par La Puissance De L’amour De Dieu.
    </p>
  </div>
  <p id="p">
    <strong
      >« Vous connaîtrez la vérité, et la vérité vous affranchira. »</strong
    >
  </p>
  <section class="redirection">
    <div id="navigation">
      <p class="lien">
        Vous pouvez voir les sermons Ici
        <router-link to="/Sermonts" class="lien"
          ><span>Sermonts</span></router-link
        >
      </p>
      <p class="lien">
        Vous pouvez voir les Evernements Ici
        <router-link to="/Sermonts" class="lien"
          ><span>Evernements</span></router-link
        >
      </p>
      <p class="lien">
        Vous pouvez nous laisser vos sujets de prieres Ici
        <router-link to="/Contact" class="lien"
          ><span>Contact</span></router-link
        >
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AcceiulPage",
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
}
.acceiul {
  /* Styles de base */
  padding: 1rem; /* Espacement intérieur */
  margin-top: 5rem;
  background-image: url("@/assets/images/img1.png"); /* Image de fond */
  background-size: cover; /* Couvrir tout l'espace */
  background-position: center; /* Centrer l'image de fond */
  background-repeat: no-repeat;
  text-align: center;
  color: #ffffff; /* Couleur du texte */
  font-family: Arial, sans-serif; /* Police de caractères */
}
h1 {
  font-size: 2.5rem; /* Taille de police du titre */
  margin-bottom: 1rem; /* Marge inférieure pour espacement */
  color: #2c3e50; /* Couleur du titre */
}
.acceiul-description p {
  font-size: 1.7rem; /* Taille de police des paragraphes */
  line-height: 1.3; /* Hauteur de ligne pour une meilleure lisibilité */
  margin: 0.5rem 0; /* Marge autour des paragraphes */
  text-align: center;
  color: #2c3e50;
  font-weight: 800;
}
.acceiul-description {
  background-color: rgba(255, 255, 255, 0.8); /* Fond semi-transparent */
  padding: 1rem; /* Espacement intérieur */
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ombre portée */
  margin: 3%; /* Centrer le bloc */
}
.redirection {
  margin-bottom: 5rem;
}
#navigation p {
  padding: 5px;
  font-size: 1.5rem;
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); /* Ombre portée */
  text-align: center;
}
.lien {
  text-decoration: none;
  font-size: 0.9rem;
  font-style: italic;
}
#navigation p span {
  background-color: rgb(93, 7, 7);
  color: #ffffff;
  padding: 5px;
  border-radius: 6px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.acceiul-content {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  width: 100%;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.acceiul-content p {
  padding: 5px;
  margin-right: 3px;
  width: 40%;
}
#p {
  padding: 5px;
  font-size: 1.2rem;
  border-radius: 8px; /* Coins arrondis */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Ombre portée */
  text-align: center;
  font-size: 2.5rem;
}
.lien {
  animation: info 2s infinite;
  color: #b34c4c;
  font-weight: bold;
  text-align: center;
}
@keyframes info {
  0% {
    color: #b34c4c;
  }
  50% {
    color: #52514f;
  }
  100% {
    color: #b34c4c;
  }
}
/* Media queries pour la réactivité */
@media (max-width: 768px) {
  .acceiul-content[data-v-4b68863c] {
    display: block;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    font-family: Georgia, "Times New Roman", Times, serif;
}
.acceiul-content p[data-v-4b68863c] {
    padding: 5px;
    margin-right: 3px;
    width: 100%;
}
#p[data-v-4b68863c] {
    padding: 5px;
    font-size: 1.2rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-size: 1.5rem;
}
#navigation p[data-v-4b68863c] {
    padding: 3px;
    font-size: 1rem;
    border-radius: 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.lien[data-v-4b68863c] {
    text-decoration: none;
    font-size: 0.5rem;
    font-style: italic;
}
}
</style>
