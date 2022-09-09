import axios from "axios";
import { Toastr } from "@bigbinary/neetoui";
import {DEFAULT_ERROR_NOTIFICATION} from "constants"
import {getFromLocalStorage} from "utils/storage.js"

axios.defaults.baseURL="/"

const setAuthHeader=(setLoading=()=>null)=>{
    axios.defaults.headers={
        Accept:"application/json",
        "Content-Type":"application/json",
        "X-CSRF-TOKEN":document.querySelector('[name="csrf-token"]').getAttribute("content")
    }
    const token = getFromLocalStorage("authToken");
    const email = getFromLocalStorage("authEmail");
    if(token && email) {
        axios.defaults.headers["X-Auth-Email"] = email;
        axios.defaults.headers["X-Auth-Token"] = token;
    }
    setLoading(false)
}

const handleSuccessResponse= response =>{
    if(response.status === 200 &&  response.data?.notice) {
        Toastr.success(response.data?.notice)
    }
    return response
}

const handlErrorResponse = errorResponseObject =>{
    if(errorResponseObject.response.status === 401) {
        setTimeout(()=> window.href="/",2000);
    }
    Toastr.error(
        axiosErrorObject.response?.data?.error || DEFAULT_ERROR_NOTIFICATION
      );
    if(errorResponseObject.response.status == 423) {
        window.location.href="/"
    }
    return Promise.reject(axiosErrorObject)
}

const registerIntercepts= ()=>{
    axios.interceptors.response.use(handleSuccessResponse, error=>   handlErrorResponse(error))
}

export  {setAuthHeader,registerIntercepts}