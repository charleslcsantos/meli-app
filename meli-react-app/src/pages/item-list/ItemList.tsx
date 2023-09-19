import "./ItemList.scss";
import ListItem from "../../components/list-item/ListItem";
import { useEffect, useState } from "react";
import { ProductService } from "../../services/product";
import { Product } from "../../models/Product";
import { getSearchParamFromUrl } from "../../utils/helpers";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";

export default function ItemList() {
  const location = useLocation();
  const [items, setItems] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    getItems();
  }, [location.search]);

  async function getItems() {
    const keyword = getSearchParamFromUrl();
    const response = await ProductService.search(keyword);
    if (response) {
      const { items, categories } = response.data;

      console.log(categories);

      setItems(items);
      setCategories(categories);
    }
  }

  return (
    <>
      {categories && <Breadcrumb categories={categories} />}
      <div className="container">
        <div className="result">
          {items &&
            items.map((item: Product) => (
              <ListItem key={item.id} isShipping item={item} />
            ))}
        </div>
      </div>
    </>
  );
}
