import { combineReducers } from "redux";
import categoryReducer from './categoriesReducer';
import productsReducer from "./productsReducer";
import minamaxReducer from "./minmaxReducer";

const rootReducer = combineReducers({
    category: categoryReducer,
    minmax: minamaxReducer,
    products: productsReducer
});

export default rootReducer