import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { Suspense } from "react";

const RandomPage = React.lazy(() => import("pages/RandomPage/RandomPage"));
const RiddlePage = React.lazy(() => import("pages/RiddlePage/RiddlePage"));
const Home = React.lazy(() => import("pages/Home/Home"));
const AlnSphereCreatures = React.lazy(() =>
  import("pages/AlnSphereCreatures/AlnSphereCreatures")
);

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/creatures"
          element={
            <Suspense fallback={<div />}>
              <AlnSphereCreatures />
            </Suspense>
          }
        />

        <Route
          path="/riddle52zc"
          element={
            <Suspense fallback={<div />}>
              <RiddlePage />
            </Suspense>
          }
        />
        
        <Route path="/random" 
          element={
            <Suspense fallback={<div />}>
              <RandomPage />
            </Suspense>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
