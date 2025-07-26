<template>
  <header>
    <nav id="navbar" v-show="menuVisible">
      <img :src="logo" alt="LOGO" />
      <ul>
        <li>
          <router-link to="/">Acceuil</router-link>
        </li>
        <li>
          <router-link to="/Sermonts">Sermon</router-link>
        </li>
        <li>
          <router-link to="/Evernements">Annonce</router-link>
        </li>
        <li>
          <router-link to="/Apropos">A Propos</router-link>
        </li>
        <li>
          <router-link to="/Contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <h1>MISSION EVANGELIQUE LA GRACE DE DIEU (MEGD)</h1>
    <nav id="nav2">
      <button @click="toggleMenu">
        <img :src="menu" alt="MENU" width="30px" />
      </button>
    </nav>
  </header>
</template>

<script>
import logo from "../assets/images/LOGO.jpg"; // Assurez-vous que le chemin est correct
import menu from "../assets/images/menu.png"; // Assurez-vous que le chemin est correct
export default {
  name: "menuPage",
  props: {},
  data() {
    return {
      menuVisible: false, // état du menu
      logo, // chemin de l'image du logo
      menu, // chemin de l'image du menu
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
  },
};
</script>

<style scoped>
body {
  padding: 0px;
  margin: 0px;
}
header {
  background-color: rgb(93, 7, 7);
  padding: 0px;
  margin: 0px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
#navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
  background-color: rgb(93, 7, 7);
  /* display: none; */
}
#navbar img {
  width: 60px;
}
#navbar ul {
  display: flex;
  gap: 30px;
}
#navbar ul li {
  list-style: none;
  padding: 5px;
}
#navbar ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  font-weight: bold;
}
h1 {
  margin: 0px;
  text-align: center;
  color: #fff;
  padding-top: 10px;
}
#nav2 {
  display: flex;
  justify-content: right;
  padding-right: 4%;
  padding-bottom: 1%;
}
button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
/* Responsive styles */
@media (max-width: 768px) {
  header{
    background-color: rgb(93, 7, 7);
    padding: 0px;
    margin: 0px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}
#navbar img[data-v-a380d422] {
    width: 40px;
}
  #navbar{
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding-left: 2%;
    padding-right: 2%;
    background-color: rgb(93, 7, 7);  

}
#navbar ul {
    display: flex;
    gap: 7px;
}
#navbar ul li a[data-v-a380d422] {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
}
ul {
    display: block;
    list-style-type: disc;
    padding-inline-start: 10px;
    unicode-bidi: isolate;
}
h1 {
    display: block;
    font-size: 1.3em;
    font-weight: bold;
    unicode-bidi: isolate;
}

}
</style>
