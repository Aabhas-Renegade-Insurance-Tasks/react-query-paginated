import "./App.css";
import Slider from "./components/Slider";
import { useState } from "react";
import { useQuery } from "react-query";

function App() {
  const [page, setPage] = useState(1);

  const fetchPost = (page = 1) =>
    fetch(`https://jsonplaceholder.typicode.com/posts/${page}`).then((res) =>
      res.json()
    );

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(["posts", page], () => fetchPost(page), {
      keepPreviousData: true,
    });

  return (
    <div className="app">
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div className="content">
          <h3>{data.title}</h3>

          <p>{data.body}</p>
        </div>
      )}
      <Slider
        prev={() => setPage((p) => (p > 1 ? p - 1 : p))}
        next={() => setPage((p) => p + 1)}
      >
        <span>{page}</span>
      </Slider>
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}

export default App;
