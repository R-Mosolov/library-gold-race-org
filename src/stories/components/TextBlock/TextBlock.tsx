import { Info } from "../../assets";
import "../../styles/TextBlock.scss";

const TextBlock = () => {
  return (
    <section className="storybook-text-block">
      <img className="icon" alt="Иконка информации" src={Info} />
      <div>
        <p>Уважаемые гости сайта!</p>
        <p>
          Вы находитесь на портале «Библиотека Новых Знаний». Здесь Вы можете
          читать книги
          <a
            href="https://gold-race.org/L-A-Seklitova-biography/ru"
            target="_blank"
          >
            {" "}
            Л.А. Секлитовой{" "}
          </a>
          и Л.Л. Стрельниковой, соавторов около 80 книг по эзотерической
          философии, в электронном виде. Портал был разработан коллективом
          <a href="https://gold-race.org" target="_blank">
            {" "}
            Центра «Золотая Раса»
          </a>
          . Если Вы не знаете, как пользоваться сайтом, рекомендуем посмотреть
          инструкцию по ссылке [ССЫЛКА] или попросить о помощи
          <a href="https://vk.com/id380943036" target="_blank">
            {" "}
            службу технической поддержки
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default TextBlock;
