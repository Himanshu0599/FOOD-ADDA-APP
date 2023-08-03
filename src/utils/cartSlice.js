import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    // addItem: (state, action) => {
    //   console.log("state, action",state, action);
    //   if (!state.items.hasOwnProperty(action.payload.id)) {
    //     state.items[action.payload.id] = {
    //       menu: action.payload,
    //       quantity: 1,
    //     };
    //   } else {
    //     Object.keys(state.items).map((eachKey) => {
    //       if (parseInt(eachKey) === action.payload.id) {
    //         state.items[eachKey].quantity += 1;
    //       }
    //     });
    //   }
    // },
    addItem: (state, action) => {
      console.log("state, action",state, action);
      const { id } = action.payload; // Assuming the action payload contains 'id' property
      if (!state.items[id]) {
        state.items[id] = {
          menu: action.payload,
          quantity: 1,
        };
      } else {
        state.items[id].quantity += 1;
      }
    },
    // addItem: (state, action) => {
    //   console.log("state, action",state, action);
    //   const { id } = action.payload;
    //   console.log(id);
    //   if (!state.items[id]) {
    //     state.items[id] = {
    //       menu: action.payload,
    //       quantity: 1,
    //     };
    //   } else {
    //     console.log("redux",state.items[id]);
    //     state.items[id].quantity += 1;
    //   }
    // },
    removeItem: (state, action) => {
      Object.keys(state.items).map((eachKey) => {
        if (parseInt(eachKey) === action.payload) {
          state.items[eachKey].quantity -= 1;
        }
      });
    },
    clearItems: (state, action) => {
      if (action.payload) {
        delete state.items[action.payload];
      } else {
        state.items = {};
      }
    },
  },
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;