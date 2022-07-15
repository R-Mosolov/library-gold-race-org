import { Menu, TextBlock, Page } from "../stories/components";

const Main = () => {
  return (
    <Page
      content={
        <>
          <TextBlock />
          <Menu />
        </>
      }
    />
  );
};

export default Main;
