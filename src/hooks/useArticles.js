import { useState, useEffect } from "react";

const useArticles = (category, numberOfArticles) => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=PF8A2Jr4UOKYnv9hbdHsEAvBgeBEjLDw`
    )
      .then((response) => {
        if (!response.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return response.json();
      })
      .then((data) => {
        if (
          data.results[2].section === "admin" ||
          data.results[2].section === "" ||
          data.results[2].title === "" ||
          data.results[2].abstract === ""
        ) {
          setArticles(data.results.slice(3, numberOfArticles + 3));
        } else if (
          data.results[1].section === "admin" ||
          data.results[1].section === "" ||
          data.results[1].title === "" ||
          data.results[1].abstract === ""
        ) {
          setArticles(data.results.slice(2, numberOfArticles + 2));
        } else if (
          data.results[0].section === "admin" ||
          data.results[0].section === "" ||
          data.results[0].title === "" ||
          data.results[0].abstract === ""
        ) {
          setArticles(data.results.slice(1, numberOfArticles + 1));
        } else {
          setArticles(data.results.slice(0, numberOfArticles));
        }

        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [category, numberOfArticles]);

  return { articles, error, isPending };
};

export default useArticles;
