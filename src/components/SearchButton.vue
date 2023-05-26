<template>
    <div>
      <h1>Recipe Cards</h1>
      <div>
        <input type="text" v-model="searchTerm" placeholder="Search recipes" />
        <button @click="searchRecipes">Search</button>
      </div>
      <div v-if="filteredRecipes.length > 0">
        <div v-for="recipe in filteredRecipes" :key="recipe.title">
          <RecipeDetails :recipe="recipe" />
        </div>
      </div>
      <div v-else>
        <p>Recipe not found.</p>
      </div>
    </div>
  </template>

  <script>
import RecipeDetails from './RecipeDetails.vue';
import recipesData from './recipe.json';

export default {
  components: {
    RecipeDetails,
  },
  data() {
    return {
      recipes: recipesData,
      searchTerm: '',
    };
  },
  computed: {
    filteredRecipes() {
      const searchQuery = this.searchTerm.toLowerCase();
      return this.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery)
      );
    },
  },
  methods: {
    searchRecipes() {
      // Perform any additional logic here if needed
      // For now, the search functionality is handled by the computed property
    },
  },
};
</script>
