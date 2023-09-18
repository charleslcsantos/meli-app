import { Component } from "react";
import "./Breadcrumb.scss";

type BreadcrumbProps = {
  categories: string[];
};

type BreadcrumbState = {
  categories: string[];
  showBreadcrumb: boolean;
};

export default class Breadcrumb extends Component<
  BreadcrumbProps,
  BreadcrumbState
> {
  constructor(props: BreadcrumbProps) {
    super(props);
    console.log(props.categories);

    this.state = {
      categories: props.categories,
      showBreadcrumb: this.props.categories.length > 0,
    };
  }

  render() {
    return (
      this.state.showBreadcrumb && (
        <div className="container">
          <ol className="breadcrumb">
            {this.state.categories &&
              this.state.categories.map((category) => (
                <li className="breadcrumb__item" key={category}>
                  {category}
                </li>
              ))}
          </ol>
        </div>
      )
    );
  }
}
