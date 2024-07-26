import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { FechArticles } from "./components/API/articles.api";
import { Hourglass } from "react-loader-spinner";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessag from "./components/ErrorMessag/ErrorMessag";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");

  const handalSubmit = async (newTopic) => {
    setArticles([]);
    setPage(1);
    setTopic(newTopic);
  };
  useEffect(() => {
    if (topic === "") {
      return;
    }
  });
  const handelButton = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getArticals() {
      try {
        setError(null);
        setLoading(true);
        const data = await FechArticles(topic, page);
        setArticles((prevArticls) => {
          return [...prevArticls, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getArticals();
  }, [page, topic]);
  return (
    <div>
      <SearchBar onSubmit={handalSubmit} />
      {articles.length > 0 && <ImageGallery items={articles} />}
      {loading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      )}
      {error && <ErrorMessag toast={toast} />}
      {articles.length > 0 && <LoadMoreBtn handelButton={handelButton} />}
      <Toaster position="top-center" reverseOrder={true} />
    </div>
  );
}