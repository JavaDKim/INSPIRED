import { combineReducers } from "@reduxjs/toolkit";
import navigationReducer from "./features/navigationSlice";
import colorsReducer from "./features/colorSlice";
import goodsReducer from "./features/goodsSlice";
import productReducer from "./features/productSlice";
import favoritesReducer from "./features/favoritesSlice";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
});
