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
        setArticles(data.results.slice(0, numberOfArticles));
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
