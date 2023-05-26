<template>
  <div class="container">
    <div class="input-type">
      <input type="text" v-model="searchTerm" placeholder="Search recipes" />
      <button @click="searchRecipes" class="search">Search</button>
    </div>

    <!-- Add a new recipe form -->
    <div class="drop-container">
      <div class="dropdwn">
        <h2 class="head-2">Add new Recipe</h2>
        <form @submit.prevent="addRecipe">
          <div class="form-content">
            <label for="title">Title:</label>
            <input type="text" id="title" v-model="newRecipe.title" required />

            <label for="description">Description:</label>
            <textarea
              id="description"
              v-model="newRecipe.description"
              required
            ></textarea>

            <label for="ingredients">Ingredients:</label>
            <textarea
              id="ingredients"
              v-model="newRecipe.ingredients"
              required
            ></textarea>

            <label for="instructions">Instructions:</label>
            <textarea
              id="instructions"
              v-model="newRecipe.instructions"
              required
            ></textarea>

            <button class="submit" type="submit">Add Recipe</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Display existing recipes -->
  <div v-if="filteredRecipes.length > 0">
    <div v-for="recipe in filteredRecipes" :key="recipe.title">
      <RecipeDetails :recipe="recipe" />
    </div>
  </div>
  <div v-else>
    <p class="not-found">Recipe not found.</p>
  </div>
</template>

<script>
import RecipeDetails from "../components/RecipeDetails.vue";
import recipe from "../data/recipe.json";

export default {
  components: {
    RecipeDetails,
  },
  data() {
    return {
      recipes: recipe,
      searchTerm: "",
      newRecipe: {
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
      },
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
    searchRecipes() {},
    addRecipe() {
      // Validate the new recipe
      if (
        !this.newRecipe.title ||
        !this.newRecipe.description ||
        !this.newRecipe.ingredients ||
        !this.newRecipe.instructions
      ) {
        return;
      }

      // Generate a unique ID for the new recipe
      const newRecipeId = Math.random().toString(36).substring(7);

      // Create a new recipe object
      const newRecipe = {
        id: newRecipeId,
        title: this.newRecipe.title,
        description: this.newRecipe.description,
        ingredients: this.newRecipe.ingredients.split("\n"),
        instructions: this.newRecipe.instructions.split("\n"),
      };

      // Add the new recipe to the list of recipes
      this.recipes.push(newRecipe);

      // Clear the form inputs
      this.newRecipe.title = "";
      this.newRecipe.description = "";
      this.newRecipe.ingredients = "";
      this.newRecipe.instructions = "";
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  background-image: url(../images/moimoi.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  color: #222;
}
.head-2 {
  z-index: 1000;
  font-size: 25px;
  outline: none;
  border-radius: 2rem 0 0 2rem;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  box-shadow: inset 0 3px 2px;
  border-top: 4px solid #222;
}
input-type {
  display: flex;
}
input {
  outline: none;
  border-radius: 2rem 0 0 2rem;
  padding: 0.3rem 1rem;
  font-size: 1rem;
  box-shadow: inset 0 3px 2px;
}
.search {
  background: #fff;
  box-shadow: inset 0 2px 2px;
  padding: 0.1rem 0.5rem;
  border-radius: 0 2rem 2rem 0;
  color: #222;
  font-size: 1rem;
  outline: none;
  border: 1px solid #333;
  height: 30px;
}
.drop-container {
  margin-right: 30px;
}
.dropdwn {
  position: relative;
  display: inline-block;
}
form {
  display: none;
  position: absolute;
  background-color: #222;
  color: #c8d1d0;
  width: 350px;
  height: 500px;
  z-index: 1;
}

form label input textarea button {
  color: #c8d1d0;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdwn:hover form {
  display: block;
}
.form-content {
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  margin-left: 30px;
}
label {
  padding: 10px;
}

#title {
  padding: 5px;
  width: 250px;
}

textarea {
  width: 250px;
  height: 60px;
  padding: 5px;
}
.submit {
  border-color: #d5d5d5;
  color: #fff;
  background-color: #222;
  padding: 12px 25px;
  margin: 5px 0;
  margin-right: 7px;
  border-radius: 30px;
  border: 2px solid #e5e5e5;
  box-shadow: 0 10px 10px -8px rgb(0 0 0 / 78%);
  cursor: pointer;
  width: 200px;
  margin-top: 10px;
}

.submit:hover {
  transform: translateY(-5px);
  box-shadow: 0rem 0.2rem 0.4rem #777;
  border-color: #b16afd;
  pointer-events: visible;
  position: relative;
  z-index: 0;
  visibility: visible;
  float: none;
  transition: 0.3s;
}
</style>
