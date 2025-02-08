export interface IGetResponseProducts {
  data: IGetProducts;
  message: string;
  statusCode: number;
}

export interface IGetProducts {
  products: IProduct[];
  limit: number;
  skip: number;
  total: number;
}

export interface IProduct {
  id: number;
  category: string;
  description: string;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  title: string;
  thumbnail: string[];
  reviews: string[];
}

export interface IProductQuery {
  filter?: string;
  order?: "asc" | "desc";
  skip?: number;
  limit?: number;
  price?: "asc" | "desc";
}