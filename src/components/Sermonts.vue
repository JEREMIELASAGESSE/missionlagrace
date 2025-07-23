<template>
  <div class="sermonts">
    <h1>
      Jean 8:32<br />
      Vous connaîtrez la vérité, et la vérité vous affranchira.
    </h1>
  </div>
  <section id="lessermons">
    <div id="cart-sermont">
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div id="details">
        <p>Orateur</p>
        <p>Theme</p>
        <p>Date</p>
      </div>
    </div>
    <div id="cart-sermont">
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/K3dtImKtyD8?si=YJEObrk64hkxiEsu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div id="details">
        <p>Orateur</p>
        <p>Theme</p>
        <p>Date</p>
      </div>
    </div>
    <div id="cart-sermont">
      <div class="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2OBD87YoLkc?si=qSV5b2HOFviFuE3E"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div id="details">
        <p>Orateur</p>
        <p>Theme</p>
        <p>Date</p>
      </div>
    </div>
  </section>
  <section id="plus">
    <router-link to="/Sermonts" id="lien">1</router-link>
    <router-link to="/Sermonts" id="lien">2</router-link>
    <router-link to="/Sermonts" id="lien">→</router-link>
  </section>
</template>

<script>
export default {
  name: "SermontsPage",
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
  background-color: #b56161; /* Couleur de fond */
  font-family: Arial, sans-serif; /* Police de caractères */
}
.sermonts {
  margin-top: 5rem;
  padding-top: 0.1rem; /* Espacement intérieur */
  text-align: center; /* Centrer le texte */
  font-size: 1.2rem; /* Taille de police */
  color: #333; /* Couleur du texte */
  background-image: url("@/assets/images/img3.png"); /* Image de fond */
  background-size: cover; /* Couvrir tout l'espace */
}
h1 {
  text-align: center; /* Centrer le titre */
  font-size: 3rem; /* Taille de police du titre */
  color: #e2e5e9; /* Couleur du titre */
  margin-bottom: 1rem; /* Marge inférieure pour espacement */
}
#plus {
  text-align: center;
  margin-bottom: 5rem;
}
#plus #lien {
  padding: 10px;
  margin: 3px;
  color: white;
  background-color: #812727;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  width: 25px;
  border-radius: 4px;
}
#lessermons {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  width: 100%;
}

#cart-sermont {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  max-width: 900px;
  width: 100%;
}

.video {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

#details {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: #812727;
}

#details p {
  margin: 0;
  padding: 0.5rem 0;
  font-weight: bold;
  border-bottom: 1px solid #eee;
}
</style>
