import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface UIState {
  isLoginModalVisible: boolean;
}

// Define the initial state using that type
const initialState: UIState = {
  isLoginModalVisible: false,
};

export const counterSlice = createSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    closeLoginModal: (state) => {
      state.isLoginModalVisible = false;
    },
    openLoginModal: (state) => {
      state.isLoginModalVisible = true;
    },
  },
});

export const { openLoginModal, closeLoginModal } = counterSlice.actions;
export default counterSlice.reducer;
