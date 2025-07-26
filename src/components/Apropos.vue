<template>
  <section>
    <div class="acceiul">
      <strong
        >Là où la main de l'homme ou la médecine est limitée c'est là que la
        main de Dieu commence.
      </strong>
    </div>
  </section>
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
      Notre Mission Est De Proclamer L’évangile De Jésus-Christ, D’annoncer La
      Bonne Nouvelle Du Royaume De Dieu Et De Faire Des Disciples Dans Le Monde
      Entier.
    </p>
    <p>
      Notre vision est de voir des vies transformées par la puissance de Dieu,
      des cœurs guéris et des communautés restaurées. Nous croyons que chaque
      individu a une valeur inestimable aux yeux de Dieu et mérite d'entendre la
      bonne nouvelle de Jésus-Christ.
    </p>
    <p>
      Notre église est un lieu de culte, de prière et de partage. Nous croyons
      en la puissance de la prière et en l'importance de la communauté dans la
      vie spirituelle.
    </p>
    <p>
      Nous organisons régulièrement des événements, des cultes et des activités
      pour tous les âges. Notre objectif est de créer un environnement où chacun
      peut grandir spirituellement et se sentir soutenu.
    </p>
    <p>
      Rejoignez-nous pour découvrir la richesse de notre foi, participer à nos
      activités et faire partie d'une communauté dynamique et bienveillante.
    </p>
    <p>
      Pour plus d'informations sur nos activités, nos cultes et nos événements,
      n'hésitez pas à nous contacter directement.
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
      <li>Annexe Daloa</li>
      <li>Annexe Zakoua</li>
      <li>Annexe Gbalagoua</li>
      <li>Annexe Yamoussoukro</li>
    </ul>

    <h3>Nos Camps de Prières</h3>
    <p>
      Nous avons des camps de prières pour permettre à chacun de vivre des
      moments forts dans la présence de Dieu et recevoir les malades. Ces camps
      sont ouverts à tous et favorisent la croissance spirituelle, la guérison
      et la restauration.
    </p>

    <ul>
      <li>Camp de prière Zakoua</li>
      <li>Camp de prière Gbalagoua</li>
      <li>Camp de prière Yamoussoukro</li>
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
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
.acceiul {
  padding: 5rem;
  text-align: center;
  margin-top: 5rem;
  background-image: url("@/assets/images/img1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
}
.acceiul strong {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 50%;
}
.apropos {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.2rem;
  background: #f9f9f9;
  border-radius: 8px;
}
.apropos h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 30px;
  font-weight: bold;
}
.apropos p {
  line-height: 1.2;
  color: #16191c;
  font-size: 18px;
}
.annexes-camps {
  margin-top: 3rem;
}
.annexes-camps p {
  line-height: 1.5;
  color: #16191c;
  font-size: 18px;
}
.annexes-camps p strong {
  margin-top: 1rem;
  padding-left: 1.5rem;
  color: #2c3e50;
  font-size: 20px;
  font-weight: bold;
  display: block;
}
.annexes-camps h3 {
  color: #2c3e50;
  margin-top: 1.5rem;
  font-size: 25px;
  font-weight: bold;
}
.annexes-camps ul {
  padding-left: 1.5rem;
}
.annexes-camps li {
  margin-bottom: 0.5rem;
  color: #812727;
  font-size: 20px;
  list-style-type: square;
  font-weight: bold;
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
