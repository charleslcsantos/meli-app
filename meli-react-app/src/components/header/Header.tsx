import "./Header.scss";
import { Component } from "react";
import searchIcon from "../../assets/images/ic_Search.png";
import searchIcon2x from "../../assets/images/ic_Search@2x.png";
import meliLogo from "../../assets/images/Logo_ML.png";
import meliLogo2x from "../../assets/images/Logo_ML@2x.png";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header__content">
            <img
              src={meliLogo}
              alt="Mercado Livre Brasil - Onde comprar e vender de Tudo"
              className="logo"
              srcSet={`${meliLogo2x} 2x`}
            />
            <form className="search-box">
              <input
                type="text"
                name="keyword"
                className="search-input"
                aria-label="Digite o que você quer encontrar"
                placeholder="Nunca dejes de buscar"
              />
              <button type="submit" className="search-button">
                <img
                  src={searchIcon}
                  alt="botão buscar"
                  srcSet={`${searchIcon2x} 2x`}
                />
              </button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}
