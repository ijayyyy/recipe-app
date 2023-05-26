<template>
  <header>
    <nav>
      <div class="brand-name">
        <h2>Food<span class="gram">Gram</span></h2>
      </div>
      <div class="hamburger"  :class="{'open': isOpen}" @click="isOpen = !isOpen">
              <span></span>
              <span></span>
              <span></span>
            </div>
      <ul :class="{'open': isOpen}">
        <li><router-link to="/" class="router">Home</router-link></li>
        <li><a href="#about" class="router">About us</a></li>
        <li><a href="#contact" class="router">Contact</a></li>
        <li>
          <router-link to="TheRecipes" class="router">Recipes</router-link>
        </li> 
      </ul>
    </nav>
  </header>
  <a name="about"></a>
  <section>
    <div class="flex-container">
      <div class="flex-60">
        <h3 class="heading">Food <span class="gram">Gram</span></h3>
        <p class="para">
          The amazing Nigerian food Recipe app for you, <br />
          Never worry about how to cook that delicious Nigerian meal again!
        </p>
        <p class="para">
          The app provides step-by-step instructions, complete with visuals,<br>
          making it easy for anyone to follow along. No more fumbling through<br>
          cookbooks or getting lost in lengthy recipes. With just a tap,<br> you can
          access detailed ingredient lists, cooking times,<br> and even add ypur own
          recipe to the list of Recipes,<br> to ensure perfect results every time.
        </p>
        <p class="para">Say goodbye to burnt dishes and hello to <span>Food Gram</span>, <br>where everyone is
          a cook!</p>
      </div>
      <div class="img-cover">
        <img src="../images/fish.jpg" alt="imagery" class="img-salad" />
      </div>
    </div>
  </section>

 <a name="contact" style="transition: 0.3s"></a>
  <div class="contact">
    <img src="../images/contact-us.jpg" alt="contact" width="250px" height="180px" >
    <div class="contact-me">
      <h4 class="head-4">
       We love to hear from you<br />
        Keep in touch.
      </h4>
      <p class="para-contact">Feel free to holla at us!</p>
    </div>

    <div class="social-cover">
      <div class="social">
        <a href="mailto:adatimo01@gmail.com" style="color:black"><font-awesome-icon icon="fa-solid fa-envelope" class="envelope-icon"/><span>Send a mail</span></a>
        <a href="https://call.whatsapp.com/video/WsYL51ao4jxzAtz2Od5uaf" style="color:black"><font-awesome-icon icon="fa-brands fa-whatsapp" class="whatsapp-icon"/><span>Whatsapp Text</span></a>
        <a href="https://shorturl.at/eowES" style="color:black"><font-awesome-icon icon="fa-solid fa-download" class="download-icon"/><span>Download Resume</span></a>
      </div>
    </div>
  </div>

  <MyFooter />
</template>

<script>
import MyFooter from "../components/MyFooter.vue";

export default {
   data() {
    return {
      isOpen: false,
    };
  },
  components: {
    MyFooter,
  },
  // View logic and methods
};
</script>
