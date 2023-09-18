import "./Header.scss";
import { useEffect, useState } from "react";

import meliLogo from "../../assets/images/Logo_ML.png";
import meliLogo2x from "../../assets/images/Logo_ML@2x.png";
import { Link, useNavigate } from "react-router-dom";
import SearchForm from "../search-form/SearchForm";
import { AVAILABLE_ROUTES } from "../../constants/AppConstants";
import { getSearchParamFromUrl } from "../../utils/helpers";

export default function Header() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState(getSearchParamFromUrl());

  const onSearchItem = (keyword: string) => {
    if (keyword) {
      setKeyword(keyword);
      redirectToResult(keyword);
    }
  };

  const redirectToResult = (keyword: string) => {
    navigate(`${AVAILABLE_ROUTES.ITEMS}?search=${keyword}`);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <img
              src={meliLogo}
              alt="Mercado Livre Brasil - Onde comprar e vender de Tudo"
              className="logo"
              srcSet={`${meliLogo2x} 2x`}
            />
          </Link>
          <SearchForm value={keyword} onSearch={onSearchItem} />
        </div>
      </div>
    </header>
  );
}
