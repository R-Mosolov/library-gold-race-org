import { ReactElement } from "react";
import { Books } from "../../types/Books";
import "../../styles/BooksList/BookMetaOne.scss";

const BookMetaOne: (props: Books.Meta.One) => ReactElement<HTMLDivElement> = ({
  id,
  title,
  authors,
  series,
  annotation,
}) => {
  return (
    <data className="book-meta-one" value={id}>
      <h2 className="title">{title}</h2>
      <span className="authors">{authors.join(", ")}</span>
      <span className="series">{series}</span>
      <p className="annotation">{annotation}</p>
      <div className="action-container">
        <button className="action">Подробнее</button>
      </div>
    </data>
  );
};

export default BookMetaOne;
