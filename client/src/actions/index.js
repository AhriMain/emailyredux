import axios from "axios";
import { FETCH_USER } from "./types";

const fetchUser = () => async (dispatch) => {
  const user = await axios.get("http://localhost:5000/api/current_user");
  dispatch({ type: FETCH_USER, payload: user });

  console.log(user.data);
};
export { fetchUser };
