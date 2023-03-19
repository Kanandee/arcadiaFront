import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: {},
  gamesCart: []

};

const actionsRX = createSlice({
  name: "lib",
  initialState,
  reducers: {
    saveLoginInfo: (state, action) => {
      state.isLoggedIn = true;
      state.userInfo = action.payload;
    },
    clearLoginInfo: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
    },

    addGamesCart: (state, action) => {
      // Not exists in the cart?
      if(!state.gamesCart.includes(action.payload)){
        state.gamesCart.push(action.payload);
      }
    },

    removeGameCart: (state, action) => {
      const index = state.gamesCart.indexOf(action.payload);
      if (index > -1) {
        state.gamesCart.splice(index, 1);
      }
    },

    clearGamesCart: (state) => {
      state.gamesCart = []
    }
  },
});

export const { saveLoginInfo, clearLoginInfo, addGamesCart, removeGameCart, clearGamesCart } = actionsRX.actions;
export default actionsRX.reducer;