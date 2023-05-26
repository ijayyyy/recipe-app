<template>
  <div class="recipe-container">
    <div class="container">
      <div class="input-type">
        <input type="text" v-model="searchTerm" placeholder="Search recipes" />
        <button @click="searchRecipes" class="search">Search</button>
      </div>

      <div class="dropdwn-container">
        <div class="dropdwn">
          <div class="add-recipe-form">
            <h2 class="head-2">Add New Recipe</h2>
            <form @submit.prevent="addRecipe">
              <div class="form-content">
                <label for="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  v-model="newRecipe.title"
                  required
                />
              </div>
              <div>
                <label for="description">Description:</label>
                <textarea
                  id="description"
                  v-model="newRecipe.description"
                  required
                ></textarea>
              </div>
              <div>
                <label for="ingredients">Ingredients:</label>
                <textarea
                  id="ingredients"
                  v-model="newRecipe.ingredients"
                  required
                ></textarea>
              </div>
              <div>
                <label for="instructions">Instructions:</label>
                <textarea
                  id="instructions"
                  v-model="newRecipe.instructions"
                  required
                ></textarea>
              </div>
              <button type="submit" class="submit">Add Recipe</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <h1>Recipes</h1>
    <div class="recipe">
      <div v-if="filteredRecipes.length > 0">
        <div v-for="recipes in filteredRecipes" :key="recipes.title">
          <div class="instructions">
            <h2>{{ recipes.title }}</h2>
            <p>{{ recipes.description }}</p>
            <ul>
              <li v-for="ingredient in recipes.ingredients" :key="ingredient">
                {{ ingredient }}
              </li>
            </ul>
            <ol>
              <li
                v-for="instruction in recipes.instructions"
                :key="instruction"
              >
                {{ instruction }}
              </li>
            </ol>
            <div class="imgg-container">
              <img
                :src="recipes.imageURL"
                alt="recipe-image"
                class="recipe-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Recipe not found.</p>
      </div>
    </div> 
  </div>
</template>

<script>
import recipe from "@/data/recipe.json"; // Import the recipe JSON file

export default {
  data() {
    return {
      recipe: [], // Store the recipes data here
      searchTerm: "", // Store the search term here
      newRecipe: {
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
      },
    };
  },
  mounted() {
    this.recipe = recipe; // Assign the imported JSON data to the recipes property
  },
  computed: {
    filteredRecipes() {
      // Filter recipes based on the search term
      if (this.searchTerm) {
        const searchTermLower = this.searchTerm.toLowerCase();
        return this.recipe.filter((recipes) =>
          recipes.title.toLowerCase().includes(searchTermLower)
        );
      }
      return this.recipe;
    },
  },
  methods: {
    searchRecipes() {
      // Perform search when the search button is clicked
      this.filteredRecipes;
    },
    addRecipe() {
      // Add a new recipe to the list
      this.recipe.push({
        title: this.newRecipe.title,
        description: this.newRecipe.description,
        ingredients: this.newRecipe.ingredients.split("\n"),
        instructions: this.newRecipe.instructions.split("\n"),
      });

      // Clear the input fields
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
  background-image: url(../images/fish.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 200px;
  color: #222;
}
h1 {
  text-align: center;
  padding-top: 30px;
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

.recipe {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.instructions {
  flex: 60%;
}

.imgg-container {
  flex: 40%;
  width: 300px;
  height: 300px;
}

.recipe-image {
  max-width: 100%;
  height: auto;
}

p {
  padding: 10px;
}

.recipe-image {
  width: 300px;
  height: 300px;
}
h3 {
  padding: 5px;
}

ul li {
  list-style-type: none;
}

ol li {
  list-style-type: none;
}

ol {
  padding: 10px;
}
</style>
