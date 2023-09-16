import { Component } from "react";
import "./Breadcrumb.scss";

type BreadcrumbProps = {
  categories: string[];
};

export default class Breadcrumb extends Component<BreadcrumbProps> {
  render() {
    return (
      <div className="container">
        <ol className="breadcrumb">
          {this.props.categories &&
            this.props.categories.map((breadcrumb) => (
              <li className="breadcrumb__item" key={breadcrumb}>
                {breadcrumb}
              </li>
            ))}
        </ol>
      </div>
    );
  }
}
