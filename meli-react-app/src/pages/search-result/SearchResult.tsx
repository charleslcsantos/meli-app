import "./SearchResult.scss";
import { Component } from "react";
import ListItem from "../../components/list-item/ListItem";

export default class SearchResult extends Component {
  render() {
    return (
      <div className="container">
        <div className="result">
          <ListItem isShipping />
          <ListItem />
          <ListItem isShipping />
          <ListItem />
        </div>
      </div>
    );
  }
}
