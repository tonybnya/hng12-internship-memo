import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
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
