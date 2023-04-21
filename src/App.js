import React, { Suspense } from "react";
// import Loader from "./component/loader/loader";
import Characters from "./component/characters";
// const LazyEpisodes =  React.lazy(()=> import ('./component/episodes.jsx'))

function App() {
  return (
    <>
    {/* <Suspense fallback={<Loader />}>
      <LazyEpisodes/>
    </Suspense> */}
    <Characters/>
    </>
  );
}

export default App;
