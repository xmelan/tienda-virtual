export interface Product {
  name: string;
  marca: string;
  productByPrices: Array<ProductPrice>[];
}

export interface ProductPrice {
  productId: string;
  color: string;
  cost: number;
  product: Product;
}
