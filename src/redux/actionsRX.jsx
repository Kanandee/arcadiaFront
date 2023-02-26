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
      console.log("saveLoginInfo: " + state.isLoggedIn + " " + state.userInfo)
    },
    clearLoginInfo: (state) => {
      state.isLoggedIn = false;
      state.userInfo = null;
      console.log("clearLoginInfo: " + state.isLoggedIn + " " + state.userInfo)
    },

    addGamesCart: (state, action) => {
      state.gamesCart.push(action.payload);
      console.log("addGamesCart: " + state.gamesCart)
    },

    removeGameCart: (state, action) => {
      const index = state.gamesCart.indexOf(action.payload);
      if (index > -1) {
        state.gamesCart.splice(index, 1);
      }
      console.log("removeGameCart: " + state.gamesCart)
    },

    clearGamesCart: (state) => {
      state.gamesCart = []
      console.log("clearGamesCart: " + state.gamesCart)
    }
  },
});

export const { saveLoginInfo, clearLoginInfo, addGamesCart, removeGameCart, clearGamesCart } = actionsRX.actions;
export default actionsRX.reducer;