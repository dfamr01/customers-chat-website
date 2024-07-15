/* eslint-disable react/prop-types */
import { ProductListProps } from "./productList.interface";

const ProductList: React.FC<ProductListProps> = ({ list }) => {
  console.log("🚀 ~ list:", list);
  return <div></div>;
};
