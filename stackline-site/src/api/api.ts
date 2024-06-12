import { jsonResponse } from "../constants";

export const fetchProductData = async () => {
    // Simulating an API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return jsonResponse;
  };