// import axios from "axios";
// import React, { useEffect, useState } from "react";
import React, { Suspense } from "react";
import { useQuery, gql } from "@apollo/client";
import SkeletonLoader from "./loader/skeleton.jsx";
const LazyEpisodesDetails = React.lazy(() => import("./details.jsx"));

// apollo graph ql starts here below....
const GET_EPISODES = gql`
  query {
    episodes {
      results {
        id
        name
        air_date
        characters {
          image
        }
      }
    }
  }
`;
const Episodes = () => {
  // apollo graph ql starts here below....

  const { error, data } = useQuery(GET_EPISODES);
  console.log("data", data);
  if (error) return <p>Error :{error.message}</p>;

  return (
    <>
      <div className="grid grid-row-2">
        {data?.episodes?.results?.map((props) => (
          <Suspense fallback={<SkeletonLoader />}>
            <LazyEpisodesDetails {...props} />
          </Suspense>
        ))}
      </div>
    </>
  );
};

export default Episodes;
