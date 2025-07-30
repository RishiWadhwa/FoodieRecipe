import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriterecipes: [], // Updated to handle favorite articles
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const recipe = action.payload;
      const index = state.favoriterecipes.findIndex(
        (item) => item.idFood === recipe.idFood
      );

      if (index !== -1) {
        // If recipe exists, remove it
        state.favoriterecipes.splice(index, 1);
      } else {
        // If not, add it
        state.favoriterecipes.push(recipe);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
