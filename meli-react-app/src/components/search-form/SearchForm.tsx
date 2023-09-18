import "./SearchForm.scss";
import { FormEvent, useEffect, useState } from "react";
import searchIcon from "../../assets/images/ic_Search.png";
import searchIcon2x from "../../assets/images/ic_Search@2x.png";

type SearchFormProps = {
  value: string;
  onSearch: (keyword: string) => void;
};

export default function SearchForm({ value, onSearch }: SearchFormProps) {
  const [keyword, setKeyword] = useState(value);

  useEffect(() => {
    // setKeyword(value);
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSearch(keyword);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleInputChange}
        className="search-form__input"
        aria-label="Digite o que você quer encontrar"
        placeholder="Nunca dejes de buscar"
      />
      <button type="submit" className="search-form__button">
        <img
          src={searchIcon}
          alt="botão buscar"
          srcSet={`${searchIcon2x} 2x`}
        />
      </button>
    </form>
  );
}
