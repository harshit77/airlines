import axios from "axios"
import { BASE_URL } from "constants";


const fetch= () => axios.get(`${BASE_URL}/airlines`);

const show=slug=>axios.get(`${BASE_URL}/airlines/${slug}`);

const airlinesApi= {fetch,show}

export default airlinesApi;