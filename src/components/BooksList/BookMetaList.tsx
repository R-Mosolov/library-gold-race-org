import utils from "../../utils";
import { booksList } from "../../data";
import { Books } from "../../types/Books";
import { BookMetaOne } from "..";

const BookMetaList = () => {
  return (
    <ul>
      {booksList.map((item: Books.Meta.One, idx: number) => {
        return (
          <li key={utils.addID()}>
            <BookMetaOne {...item} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookMetaList;
