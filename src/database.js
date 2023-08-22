import { connect } from 'mongoose';
import { MONGODB } from './utils/config.js';
(
  async () => {
    try{
      await connect(MONGODB);
      console.log(`conectado a ${MONGODB}`);
    }
    catch(error){
      console.log(error);
    }
  } 
)()