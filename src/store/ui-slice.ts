import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Tnotification } from '@/store/type';

const initialState: { notification: Tnotification | null } = {
  notification: null
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    showNotification(state, action: PayloadAction<Tnotification>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
