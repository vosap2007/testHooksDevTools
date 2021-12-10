import { createAction } from "@reduxjs/toolkit";

const myAction = createAction("MY_ACTION");
const getPokemom = createAction("GET_POKEMON");

export { myAction, getPokemom };
