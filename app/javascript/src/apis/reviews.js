import axios from "axios"
import { BASE_URL } from "constants";

const create=(payload)=>
    axios.post(`${BASE_URL}/reviews/`,payload)

const reviewsApi= {create}

export default reviewsApi