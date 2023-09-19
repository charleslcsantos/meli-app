import { useEffect, useState } from "react";
import "./Breadcrumb.scss";

type BreadcrumbProps = {
  categories: string[];
};

export default function Breadcrumb(props: BreadcrumbProps) {
  const [categories, setCategories] = useState(props.categories);

  useEffect(() => {
    setCategories(props.categories);
  }, [props.categories]);

  return (
    <div className="container">
      <ol className="breadcrumb">
        {categories &&
          categories.map((category) => (
            <li className="breadcrumb__item" key={category}>
              {category}
            </li>
          ))}
      </ol>
    </div>
  );
}
