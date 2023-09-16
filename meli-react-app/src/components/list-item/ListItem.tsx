import "./ListItem.scss";
import { Component } from "react";
import iphoneCover from "../../assets/images/iphone.webp";
import iconShipping from "../../assets/images/ic_shipping.png";
import iconShipping2x from "../../assets/images/ic_shipping@2x.png";
import { Link } from "react-router-dom";

type ListItemProps = {
  isShipping?: boolean;
};

export class ListItem extends Component<ListItemProps> {
  render() {
    return (
      <Link className="list-item" to="2">
        <img className="list-item__preview" src={iphoneCover} alt="iphone 13" />
        <div className="list-item__details">
          <div className="list-item__price">
            <span>$ 1.980</span>
            {this.props.isShipping && (
              <img
                src={iconShipping}
                alt="Este produto possui envio imediato"
                className="icon-shipping"
                srcSet={`${iconShipping2x} 2x`}
              />
            )}
          </div>
          <h2 className="list-item__title">
            iPhone 13 Com 128gb E 4gb De Ram Estelar Apple
          </h2>
        </div>
        <div className="list-item__location">Capital Federal</div>
      </Link>
    );
  }
}

export default ListItem;
