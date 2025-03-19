import { configureStore } from "@reduxjs/toolkit";
import HospitalApiSlice from "./Slice/Service";


const Store = configureStore({
  reducer: {
    [HospitalApiSlice.reducerPath]: HospitalApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(HospitalApiSlice.middleware),
});
export default Store;
