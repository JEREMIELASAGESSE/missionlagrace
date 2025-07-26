<template>
  <div class="contact">
    <section class="image">
      <h1>
        Si vous avez des questions, des commentaires ou si vous souhaitez en
        savoir plus sur notre église, n'hésitez pas à nous contacter.
      </h1>
    </section>
    <h1 class="titre">Contactez-nous</h1>
    <section class="partie1">
      <div class="email_telephone_whatssap">
        <p>
          <strong><img :src="imageUrle" alt="ddd" class="logo" />:</strong>
          <a href="mailto:ndrikouamejeremie@gmail.com"> Email</a>
        </p>
        <p>
          <strong><img :src="imageUrlp" alt="ddd" class="logo" />:</strong>
          <a href="tel:+2250769373509">0769373509</a>
        </p>
        <p>
          <strong><img :src="imageUrlw" alt="ddd" class="logo" /> :</strong>
          <a
            href="https://wa.me/2250500429932?text=Bonjour%20KOUAME,%20je%20viens%20du%20site%20et%20j’ai%20une%20question
"
          >
            WhatsApp</a
          >
        </p>
        <p>
          <strong><img :src="imageUrlf" alt="ddd" class="logo" /> :</strong>
          <a href="https://www.facebook.com/geremi.ndri">Facebook</a>
        </p>
        <div class="text">
          <p>Nous serons ravis de vous entendre où de voir !</p>
          <p>Nous sommes là pour vous aider et répondre à vos besoins.</p>
          <p>Merci de votre intérêt pour notre église.</p>
          <p>Nous attendons avec impatience de vos nouvelles !</p>
        </div>
      </div>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929279759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8e8e8e8e%3A0x8e8e8e8e8e8e8e8e!2sEglise%20Exemple!5e0!3m2!1sfr!2sfr!4v1616161616161"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
    <section class="text">
      <h1>Formulaire de contact</h1>
      <p class="info">
        Si vous souhaitez nous envoyer un message,ou un sujet des priere
        veuillez remplir le formulaire ci-dessous. Nous vous répondrons dès que
        possible.
      </p>
    </section>
    <section id="contact">
      <div class="form">
        <form action="">
          <input type="text" placeholder="votre nom " required />
          <input type="email" placeholder="votre e-mail " required />
          <input type="text" placeholder="l'objet " required />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="votre message"
            required
          ></textarea>
          <button type="submit" class="infobtn">Envoyer</button>
        </form>
      </div>
      <div class="membre">
        <div class="perso">
          <img :src="imageUrlc1" alt="ddd" class="logo" />
          <ul>
            <li>
              <b> l'Evangiliste Jeremie</b>
            </li>
            <li>pere fondateur</li>
            <li>tel:+2250787967548</li>
            <li>E-mail: jeremie@gmail.com</li>
          </ul>
        </div>
        <div class="perso">
          <img :src="imageUrlc2" alt="ddd" class="logo" />
          <ul>
            <li>
              <b>Prophetesse mathe</b>
            </li>
            <li>fondatrice des camps</li>
            <li>tel:+2550709518819</li>
            <li>E-mail: mathe@gmail.com</li>
          </ul>
        </div>
        <div class="perso">
          <img :src="imageUrlc3" alt="ddd" class="logo" />
          <ul>
            <li>
              <b>Pateur xavier</b>
            </li>
            <li>Le president</li>
            <li>tel:+2550500429932</li>
            <li>E-mail: xavier@gmail.com</li>
          </ul>
        </div>
        <div class="perso">
          <img :src="imageUrlc4" alt="ddd" class="logo" />
          <ul>
            <li>
              <b>Chantre Jeremie</b>
            </li>
            <li>Responsable des Chantres</li>
            <li>tel:+2550500429932</li>
            <li>E-mail: jeremie@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
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
      imageUrlw: require("@/assets/images/whatsapp.png"), // Chemin vers l'image WhatsApp
      // Vous pouvez ajouter des données ici si nécessaire
      imageUrle: require("@/assets/images/mail.png"), // Chemin vers l'image Email
      imageUrlp: require("@/assets/images/phone.png"), // Chemin vers l'image Téléphone
      imageUrlf: require("@/assets/images/facebook.png"), // Chemin vers l'image Facebook
      // Chemins vers les images des membres de l'église
      imageUrlc1: require("@/assets/images/mail.png"), // Chemin vers l'image de l'évangéliste Jeremie
      imageUrlc2: require("@/assets/images/mathe.jpg"), // Chemin vers l'image de la prophétesse Mathe
      imageUrlc3: require("@/assets/images/facebook.png"), // Chemin vers l'image du pasteur Xavier
      imageUrlc4: require("@/assets/images/phone.png"), // Chemin vers l'image du chantre Jeremie
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: Arial, sans-serif; /* Police de caractères */
}

.contact {
  margin-top: 5rem;
  text-align: center;
}
.image {
  background-image: url("@/assets/images/bible1.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 180px;
}
.image h1 {
  padding-top: 1rem;
  color: #222020;
  font-size: 2.5rem;
  margin-top: 2rem;
  text-shadow: 2px 2px 4px rgba(253, 253, 253, 0.984);
}
h1 {
  color: #222020;
  font-size: 2.5rem;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(164, 107, 107, 0.984);
}
.partie1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
}
.partie1 p {
  color: #413d3d;
  font-size: 1.2rem;
  margin: 0.5rem 0;
  line-height: 1.5;
  text-align: left;
  width: 80%;
  font-weight: bold;
}
.email_telephone_whatssap {
  flex: 1;
  text-align: left;
  width: 20%;
  height: 100%;
}
a {
  color: #b34c4c;
  text-decoration: none;
  font-weight: bold;
}
a:hover {
  text-decoration: underline;
}
.logo {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 5px;
}
.text {
  margin-top: 3rem;
  color: #413d3d;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: left;
}
.text h1 {
  color: #222020;
  font-size: 2.5rem;
  margin-top: 1rem;
  text-shadow: 2px 2px 4px rgba(164, 107, 107, 0.984);
  text-align: center;
}
.map {
  flex: 1;
  width: 80%;
}
.map iframe {
  width: 100%;
  height: 400px;
  border: none;
}
/* contact*/
#contact {
  margin-bottom: 2.5rem;
}
.form {
  width: 65%;
}
.form h2 {
  text-align: center;
  font-size: 25px;
}
form {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
form input,
form textarea {
  margin-bottom: 10px;
  padding: 15px;
  outline: none;
  border: 1px solid #e4e3e3;
}
form button {
  padding: 10px;
  border: none;
  color: #fff;
  background-color: #b34c4c;
  font-weight: bold;
  width: 130px;
  border-radius: 10px;
  cursor: pointer;
}
.localise {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
#sms li {
  list-style: none;
  display: flex;
  gap: 10px;
  align-items: center;
}
.membre {
  margin-top: 10px;
}
.membre img {
  width: 60px;
  height: 50px;
  border-radius: 20px;
  padding-left: 10px;
}
.perso {
  display: flex;
  gap: 0px;
  align-items: center;
  margin-top: 5px;
  justify-content: space-between;
}
.perso ul li {
  list-style: none;
}
#contact {
  display: flex;
  padding: 20px;
}
/*Animations*/
.clignote {
  animation: clignoter 1s infinite;
}
.info {
  animation: info 2s infinite;
  color: #b34c4c;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
}

@keyframes info {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}

.clignote {
  animation: blinkColor 1s infinite;
}

.titre {
  animation: titre 2s infinite;
  color: #b34c4c;
  font-weight: bold;
  font-size: 2.5rem;
}

@keyframes titre {
  0% {
    color: #b34c4c;
  }
  50% {
    color: transparent;
  }
  100% {
    color: rgb(238, 206, 206);
  }
}
.image-clignote {
  animation: clignoter 0.8s infinite;
}
.logo {
  animation: clignoter 1s infinite;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-right: 5px;
}
@keyframes clignoter {
  0% {
    opacity: 1;
  }
  40% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
}
.infobtn {
  animation: info 2s infinite;
  padding: 10px;
  border: none;
  color: #fff;
  background-color: #b34c4c;
  font-weight: bold;
  width: 130px;
  border-radius: 10px;
  cursor: pointer;
}

@keyframes info {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
  /* Responsive styles */
@media (max-width: 768px) {
  .image {
  width: 100%;
}
  .image h1[data-v-cf6573c0] {
    padding-top: 0.5rem;
    color: #222020;
    font-size: 1.5rem;
    margin-top: 2rem;
    text-shadow: 2px 2px 4px rgba(253, 253, 253, 0.984);
}
.acceiul-description p{
    font-size: 1.7rem;
    line-height: 1.3;
    margin: .5rem 0;
    text-align:start;
    color: #2c3e50;
    font-weight: 800;
}
.partie1{
    display: block;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
}
.email_telephone_whatssap {
    flex: 1;
    text-align: left;
    width: 100%;
    height: 100%;
}
  .map{
    flex: 1;
    width: 100%;
}
.info {
    animation: info-cf6573c0 2s infinite;
    color: #b34c4c;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
}
#contact{
    display: block;
    padding: 10px;
}
.form[data-v-cf6573c0] {
    width: 100%;
}
}
</style>
