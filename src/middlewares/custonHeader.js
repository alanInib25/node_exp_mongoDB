import { handleHttpError } from "../utils/handleMessages.js";
import { handleHttpError } from '../utils/handlePassword.js'
export const customHeader =  (req, res, next) => {
  try{
    const apikey = req.headers.api_key;
    if(apikey === "alan-inib-01") next();
    else{
      handleHttpError(res, "API_KEY_NO_ES_CORRECTA")
    }

  } catch (error) {
    handleHttpError(res, " ALGO_OCURRIO_EN_CUSTOM_HEADER");
  }
}