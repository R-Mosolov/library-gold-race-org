import { Button } from "../index";
import "../../styles/Searcher.scss";

const Searcher = () => {
  return (
    <div className="storybook-searcher">
      <input className="field" type="text" placeholder="Поисковый запрос" />
      <div className="button">
        <Button primary size="large" label={"Найти"} />
      </div>
    </div>
  );
};

export default Searcher;
