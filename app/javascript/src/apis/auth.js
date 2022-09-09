import axios from "axios";
import { BASE_URL } from "constants";

const signUp =payload=> axios.post(`${BASE_URL}/users`,payload)
const login =payload=> axios.post(`${BASE_URL}/session`,payload)

const authApi={signUp,login};


export default authApi