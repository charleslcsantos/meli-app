import { FormEvent, useState } from "react";
import searchIcon from "../../assets/images/ic_Search.png";
import searchIcon2x from "../../assets/images/ic_Search@2x.png";
import "./SearchForm.scss";

type SearchFormProps = {
  value: string;
  onSearch: (keyword: string) => void;
};

export default function SearchForm({ value, onSearch }: SearchFormProps) {
  const [keyword, setKeyword] = useState(value);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSearch(keyword);
  };

  return (
    <form
      className="search-form"
      onSubmit={handleSubmit}
      aria-label="formulário"
      role="form"
    >
      <input
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleInputChange}
        className="search-form__input"
        aria-label="Ingresá lo que quieras encontrar"
        placeholder="Nunca dejes de buscar"
      />
      <button type="submit" className="search-form__button" role="submit">
        <img
          src={searchIcon}
          alt="Buscar"
          aria-label="Buscar"
          srcSet={`${searchIcon2x} 2x`}
        />
      </button>
    </form>
  );
}
