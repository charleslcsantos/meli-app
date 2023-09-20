import "./ListItem.scss";
import iconShipping from "../../assets/images/ic_shipping.png";
import iconShipping2x from "../../assets/images/ic_shipping@2x.png";
import { Link } from "react-router-dom";
import { Product } from "../../models/Product";

type ListItemProps = {
  item: Product;
};

export default function ListItem(props: ListItemProps) {
  const { item } = props;
  return (
    <Link className="list-item" to={item.id}>
      <img className="list-item__preview" src={item.picture} alt={item.title} />
      <div className="list-item__details">
        <div className="list-item__price">
          <span>$ {item.price.amount}</span>
          {item.free_shipping && (
            <img
              src={iconShipping}
              alt="Este produto possui envio imediato"
              className="icon-shipping"
              srcSet={`${iconShipping2x} 2x`}
            />
          )}
        </div>
        <h2 className="list-item__title">{item.title}</h2>
      </div>
      <div className="list-item__location">{item.location}</div>
    </Link>
  );
}
