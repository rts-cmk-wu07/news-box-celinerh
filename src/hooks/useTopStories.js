import { useState, useEffect } from "react";

const useTopStories = (category) => {
  const [topStories, setTopStories] = useState(null);
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
        setTopStories(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      });
  }, [category]);

  return { topStories, error, isPending };
};

export default useTopStories;
