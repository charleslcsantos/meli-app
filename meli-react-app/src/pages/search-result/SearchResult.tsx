import "./SearchResult.scss";
import ListItem from "../../components/list-item/ListItem";
import { Component } from "react";
import { ProductService } from "../../services/product";
import { Product } from "../../models/Product";
import { getSearchParamFromUrl } from "../../utils/helpers";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

type SearchResultProps = {
  items?: Product[];
};

type SearchResultState = {
  items: Product[];
  categories: string[];
};

export default class SearchResult extends Component<
  SearchResultProps,
  SearchResultState
> {
  constructor(props: SearchResultProps) {
    super(props);

    this.state = {
      items: [],
      categories: [],
    };
  }

  async componentDidMount() {
    const keyword = getSearchParamFromUrl();
    const response = await ProductService.search(keyword);
    if (response) {
      const { items, categories } = response.data;

      console.log(categories);

      this.setState({
        items,
        categories,
      });
    }
  }

  render() {
    const { categories, items } = this.state;
    return (
      <>
        <Breadcrumb categories={categories} />
        <div className="container">
          <div className="result">
            {items.map((item: Product) => (
              <ListItem key={item.id} isShipping item={item} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
