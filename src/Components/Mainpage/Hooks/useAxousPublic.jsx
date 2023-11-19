import axios from "axios";

export const axiospublic = axios.create({
    baseURL: 'https://resturent-backend.vercel.app'
    // baseURL: 'https://resturent-backend.vercel.app'
    //https://resturent-backend.vercel.app
 
  });

const useAxousPublic = () => {
    return  axiospublic
};

export default useAxousPublic;