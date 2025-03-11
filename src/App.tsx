import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import routes from "tempo-routes";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Suspense>
  );
};

export default App;
