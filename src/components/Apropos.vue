<template>
  <section class="apropos">
    <h2>À propos de nous</h2>
    <p>
      Nous sommes une communauté engagée à partager la foi, l'amour et
      l'entraide. Notre mission est de rassembler, d'édifier et d'impacter
      positivement notre environnement.
    </p>
    <p>
      La Mission Évangélique La Grâce de Dieu est une église chrétienne
      évangélique qui se consacre à la proclamation de l'Évangile, à la
      formation spirituelle et à l'aide aux personnes dans le besoin.
    </p>
    <p>
      Notre église est un lieu de culte, de prière et de partage. Nous croyons
      en la puissance de la prière et en l'importance de la communauté dans la
      vie spirituelle.
    </p>
  </section>
  <section class="annexes-camps">
    <h3>Nos Valeurs</h3>
    <p>
      Nous croyons en l'amour inconditionnel de Dieu, en la puissance de la
      prière et en l'importance de la communauté. Nos valeurs fondamentales
      incluent :
    </p>
    <ul>
      <li>Foi et spiritualité</li>
      <li>Solidarité et entraide</li>
      <li>Éducation et développement</li>
    </ul>
  </section>
  <section class="annexes-camps">
    <h3>Nos Annexes</h3>

    <p>
      La Mission Évangélique La Grâce de Dieu s'étend à travers plusieurs
      annexes, chacune dédiée à la diffusion de l'Évangile et au service
      communautaire. Nos annexes sont des lieux de rassemblement, de prière et
      de formation spirituelle.
    </p>
    <ul>
      <li>Annexe Béthanie</li>
      <li>Annexe El-Shaddaï</li>
      <li>Annexe Siloé</li>
      <li>Annexe Jéricho</li>
    </ul>

    <h3>Nos Camps de Prières</h3>
    <p>
      Nous organisons régulièrement des camps de prières pour permettre à chacun
      de vivre des moments forts dans la présence de Dieu. Ces camps sont
      ouverts à tous et favorisent la croissance spirituelle, la guérison et la
      restauration.
    </p>
    <ul>
      <li>Camp de prière Mont Carmel</li>
      <li>Camp de prière Béthel</li>
      <li>Camp de prière Gethsémané</li>
    </ul>
  </section>
  <section id="plus">
    <router-link to="/Evernements" id="lien">1</router-link>
    <router-link to="/Evernements" id="lien">2</router-link>
    <router-link to="/Evernements" id="lien">→</router-link>
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
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}
.apropos h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
}
.apropos p {
  line-height: 1.6;
  color: #34495e;
}
.annexes-camps {
  margin-top: 3rem;
}
.annexes-camps h3 {
  color: #2980b9;
  margin-top: 1.5rem;
}
.annexes-camps ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}
.annexes-camps li {
  margin-bottom: 0.5rem;
  color: #34495e;
  font-size: 20px;
  list-style-type: square;
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
</style>
