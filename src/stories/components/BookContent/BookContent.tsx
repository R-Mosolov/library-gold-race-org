import React, { ReactElement } from "react";
import { creatingMan } from "../../data";
import '../../styles/BookContent.scss';
import { BookContent as BookContentType } from "../../types/BookContent";

const BookContent: () => ReactElement<HTMLDivElement> = () => {
  let pageCounter = 0;

  return (
    <div className="storybook-book-content">
      <div className="left-page">
        <div className="navigation" />
        <div className="content">
          <h2>{creatingMan[0].title}</h2>
          {creatingMan[0].content.map((item: BookContentType.Content) => {
            const isUsualText = typeof item === 'string';

            pageCounter++;

            if (isUsualText) {
              return <p>{item}</p>;
            } else if (item.type && item.type === 'bold') {
              return <p>{item.text}</p>;
            } else {
              return <></>;
            }
          })}
        </div>
        <span className="page-counter">{pageCounter}</span>
      </div>

      <div className="right-page">
        <div className="navigation" />
        <div className="content">
          <h2>{creatingMan[1].title}</h2>
          {creatingMan[1].content.map((item: BookContentType.Content) => {
            const isUsualText = typeof item === 'string';

            pageCounter++;

            if (isUsualText) {
              return <p className="usual-text">{item}</p>;
            } else if (item.type && item.type === 'bold') {
              return <p className="bold-text">{item.text}</p>;
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BookContent;
