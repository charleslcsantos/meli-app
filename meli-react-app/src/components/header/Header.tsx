import "./Header.scss";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import SearchForm from "../search-form/SearchForm";
import { AVAILABLE_ROUTES } from "../../constants/AppConstants";
import { getSearchParamFromUrl } from "../../utils/helpers";
import Logo from "../logo/Logo";

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
            <Logo />
          </Link>
          <SearchForm value={keyword} onSearch={onSearchItem} />
        </div>
      </div>
    </header>
  );
}
