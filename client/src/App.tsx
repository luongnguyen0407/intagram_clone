import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const MainLayout = lazy(() => import("./layout/MainLayout"));
function App() {
  return (
    <div className="App">
      <Suspense>
        <Routes>
          <Route path="/">
            <Route element={<MainLayout />}>
              <Route index element={<Home />}></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
