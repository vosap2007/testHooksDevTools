import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { myAction, getPokemom } from "./redux/actions";
import axios from "axios";

function App() {
  const name = useSelector((state) => state.pokemon.reducer.name);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => {
        dispatch(getPokemom(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const onChange = () => {
    dispatch(myAction(Math.random()));
  };

  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={onChange}>New name</button>
    </div>
  );
}

export default App;
