interface ProductMeta {
  discount?: number;
  promotionCaption?: string;
}

export interface ProductList {
  name: string;
  price: string;
  category: string;
  stock: number;
  meta: ProductMeta;
  outOfStockDate: Date;
}

export interface ProductListProps {
  list: ProductList[];
}
