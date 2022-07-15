import { FC } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { Main, BooksList } from "./pages";

const App = () => {
  const routes = useRoutes([
    { path: "*", element: <Main /> },
    { path: "/:lang/", element: <Main /> },
    { path: "/:lang/books-list", element: <BooksList /> },
  ]);
  return routes;
};

const AppWrapper: FC = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
