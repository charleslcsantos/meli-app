import { ProductDetailResponse, ProductListResponse } from "../models/Product";
import { http } from "./http";

export const ProductService = {
  search: (keyword: string) => {
    if (keyword) {
      try {
        return http.get<ProductListResponse>("/items", {
          params: { q: keyword },
        });
      } catch (error) {
        throw new Error("Erro ao buscar items da API");
      }
    }
  },

  findById: (id: string) => {
    if (id) {
      try {
        return http.get<ProductDetailResponse>(`/items/${id}`);
      } catch (error) {
        throw new Error("Erro ao buscar detalhe do produto da API");
      }
    }
  },
};
