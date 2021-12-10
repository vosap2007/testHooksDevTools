import { configureStore } from "@reduxjs/toolkit";
import pokemonReduser from "./reduser";

const store = configureStore({ reducer: { pokemon: pokemonReduser } });

export default store;
