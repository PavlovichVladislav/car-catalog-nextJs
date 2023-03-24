import { ICar } from "@/models/Car";
import axios from "axios";

const API_URL = "http://localhost:4200";

axios.defaults.baseURL = API_URL;

export const CarService = {
   async getAll() {
      const { data } = await axios.get<ICar[]>("/cars");
      return data;
   },

   async getById(id: string) {
      const { data } = await axios.get<ICar>(`/cars/${id}`);
      return data;
   },
};
