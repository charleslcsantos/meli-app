import "./ItemDetail.scss";
import { Component } from "react";

import iphoneCover from "../../assets/images/iphone.webp";

export class ItemDetail extends Component {
  render() {
    return (
      <div className="container">
        <div className="item">
          <div className="item__headline">
            <img className="item__cover" src={iphoneCover} alt="" />
            <div className="item__details">
              <span className="item__status">Nuevo - 234 vendidos</span>
              <h1 className="item__title">
                iPhone 13 Com 128gb E 4gb De Ram Estelar Apple
              </h1>
              <span className="item__price">$ 1.980</span>
              <button className="item__buy">Comprar</button>
            </div>
          </div>

          <div className="item__description">
            <h2>Descripción del producto</h2>
            <p>The iphone is bla bla bla</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
