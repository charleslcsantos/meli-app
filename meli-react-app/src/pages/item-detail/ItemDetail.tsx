import "./ItemDetail.scss";
import { Component, useEffect, useState } from "react";

import iphoneCover from "../../assets/images/iphone.webp";
import { Product } from "../../models/Product";
import { useParams } from "react-router-dom";
import { ProductService } from "../../services/product";

// type ItemDetailProps = {

// }

// type ItemDetailState = {
//   product: Product
// }

export function ItemDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const params = useParams();

  useEffect(() => {
    getProduct();
  }, [params.id]);

  const getProduct = async () => {
    const { id } = params;

    const response = await ProductService.findById(id!);
    if (response) {
      const { item } = response.data;

      setProduct(item);
    }
  };

  const getSoldQuantity = (quantity?: number) => {
    if (quantity == 0) {
      return "";
    } else if (quantity == 1) {
      return `- ${quantity} vendido`;
    }
    return `- ${quantity} vendidos`;
  };

  const getConditionParsed = (condition: string) => {
    if (condition == "new") {
      return "Nuevo";
    } else if (condition == "used") {
      return "Usado";
    }
    return condition;
  };

  return (
    <>
      {product && (
        <div className="container">
          <div className="item">
            <div className="item__headline">
              <img
                className="item__cover"
                src={product.picture}
                title={product.title}
                alt={product.title}
              />
              <div className="item__details">
                <span className="item__status">
                  {getConditionParsed(product.condition)}{" "}
                  {getSoldQuantity(product.sold_quantity)}
                </span>
                <h1 className="item__title">{product.title}</h1>
                <span className="item__price">$ {product.price.amount}</span>
                <button className="item__buy">Comprar</button>
              </div>
            </div>

            <div className="item__description">
              <h2>Descripción del producto</h2>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemDetail;
