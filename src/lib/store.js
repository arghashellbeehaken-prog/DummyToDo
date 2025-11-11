import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../actions/todoSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";

// 1. Configuration for persistence
const persistConfig = {
  key: "root",
  storage,
};

// 2. Combine reducers (you might have more later)
const rootReducer = combineReducers({
  todos: todoReducer,
});

// 3. Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. Configure store
export const store = configureStore({
  reducer: persistedReducer,
});

// 5. Create a persistor
export const persistor = persistStore(store);
