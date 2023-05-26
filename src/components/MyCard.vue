<template>
  <router-link to="/recipe/1">
    <section class="card-container">
   <div class="card-image">
    <img src="../images/moimoi.jpg" alt="" class="image-design">
   </div>
   <div class="recipe-name">
   <h4>Jollof Rice</h4>

   <router-link :to="{name: 'RecipeDeets', params: {id: `sss`}}">See Recipe Details</router-link>
   </div>
  </section>
  </router-link>
  
</template>

<script>
 export default {
  props: ['recipe'],
  setup() {

  }
 }
</script>

<style>
 .card-container {
   background-color: white;
   box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
   display: flex;
   flex-direction: column;
   overflow: hidden;
   width: 250px;
   height: 300px;
   border-radius: 5px;
   padding: 20px;
 }
 .card-container:hover {
  transform: translateY(4px);
  transition-duration: 300s;
  transition-timing-function: ease-in-out;

 }
 .card-image {
  width: 250px;
  height: 150px;
  border-radius: 6px;
 }
 .image-design {
  width: 250px;
  height: 140px;
 }
 

</style>

