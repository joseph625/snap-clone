import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cameraImage: null
};


export const cameraSlice = createSlice({
  name: 'camera',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImge:(state)=>{
        state.cameraImage = null;
    }
  },
});
 

export const { setCameraImage ,resetCameraImge } = cameraSlice.actions;

export const selectcameraImage = (state) => state.camera.cameraImage;


export default cameraSlice.reducer;
