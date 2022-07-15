import { BookMetaList } from "../components";
import { Searcher, Pagination, Page } from "../stories/components";

const BooksList = () => {
  return (
    <Page
      content={
        <>
          <Searcher />
          <BookMetaList />
          <Pagination />
        </>
      }
    />
  );
};

export default BooksList;
