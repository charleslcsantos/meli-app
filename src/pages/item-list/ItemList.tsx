import "./ItemList.scss";
import ListItem from "../../components/list-item/ListItem";
import { useEffect, useState } from "react";
import { ProductService } from "../../services/product";
import { Product } from "../../models/Product";
import { getSearchParamFromUrl } from "../../utils/helpers";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { useLocation } from "react-router-dom";
import Loader from "../../components/loader/Loader";

export default function ItemList() {
  const location = useLocation();
  const [items, setItems] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getItems();
    document.title = "Resultados da pesquisa - Seu Site"; // IMPLEMENTAR SEO Component com tags default da pagina
  }, [location.search]);

  async function getItems() {
    setIsLoading(true);
    const keyword = getSearchParamFromUrl();
    const response = await ProductService.search(keyword);
    if (response) {
      const { items, categories } = response.data;

      setItems(items);
      setCategories(categories);
    }
    setIsLoading(false);
  }

  return (
    <>
      {categories && <Breadcrumb categories={categories} />}
      {isLoading ? (
        <Loader text="Buscando productos" />
      ) : (
        <div className="container">
          <div className="result">
            {items && items.length > 0 ? (
              items.map((item: Product) => (
                <ListItem key={item.id} item={item} />
              ))
            ) : (
              <div className="empty-box">
                <span>:/</span>
                No hay productos con esta palabra.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
