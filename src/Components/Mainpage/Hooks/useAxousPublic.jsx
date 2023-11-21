import axios from "axios";

export const axiospublic = axios.create({
    baseURL: 'http://localhost:5000'
    // baseURL: 'http://localhost:5000'
    //http://localhost:5000
 
  });

const useAxousPublic = () => {
    return  axiospublic
};

export default useAxousPublic;