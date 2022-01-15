import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Collection from "layouts/AlnSphereCreatures/Collection/Collection";
import Gallery from "layouts/Marketplace/Gallery/Gallery";
import Dashboard from "layouts/Marketplace/Dashboard/Dashboard";
import questionMark from "assets/images/question-mark.png";
import CardComponent from "components/CardComponent";
import DataContextProvider from "context/DataContextProvider";

const RandomPage = React.lazy(() => import("pages/RandomPage/RandomPage"));
const RiddlePage = React.lazy(() => import("pages/RiddlePage/RiddlePage"));
const Home = React.lazy(() => import("pages/Home/Home"));
const AlnSphereCreatures = React.lazy(() =>
  import("pages/AlnSphereCreatures/AlnSphereCreatures")
);

function App() {
  return (
    <DataContextProvider>
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
            path="/marketplace"
            element={
              <Suspense fallback={<div />}>
                <AlnSphereCreatures />
              </Suspense>
            }
          >
            <Route path="collection" element={<Collection />}>
              <Route path="" element={<CardComponent type="alns" />} />
              <Route path="lands" element={<CardComponent type="lands" />} />
              <Route path="items" element={<CardComponent type="items" />} />
              <Route
                path="enchants"
                element={<CardComponent type="enchants" />}
              />
              <Route path="mounts" element={<CardComponent type="mounts" />} />
              <Route
                path="mysteryboxes"
                element={<CardComponent type="mysteryboxes" />}
              />
            </Route>
            <Route path="gallery" element={<Gallery />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <div className="centered-comming-soon">
                  <img
                    className="question-mark invert"
                    src={questionMark}
                    alt=""
                  />
                </div>
              }
            />
          </Route>

          <Route
            path="/riddle52zc"
            element={
              <Suspense fallback={<div />}>
                <RiddlePage />
              </Suspense>
            }
          />

          <Route
            path="/random"
            element={
              <Suspense fallback={<div />}>
                <RandomPage />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </DataContextProvider>
  );
}

export default App;
