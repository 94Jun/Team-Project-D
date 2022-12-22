import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPlaces: [],
};

const plan = createSlice({
  name: "plan",
  initialState,
  reducers: {
    ADD_SELECTED_PLACE: (state, action) => {
      state.selectedPlaces.push(action.payload);
    },
    REMOVE_SELECETED_PLACE: (state, action) => {
      const filteredPlaces = state.selectedPlaces
        .filter((place) => {
          return place.id !== action.payload;
        })
        .map((place, idx) => {
          return { ...place, id: idx + 1 };
        });
      state.selectedPlaces = filteredPlaces;
    },
  },
});

export const { ADD_SELECTED_PLACE, REMOVE_SELECETED_PLACE } = plan.actions;
export default plan.reducer;
