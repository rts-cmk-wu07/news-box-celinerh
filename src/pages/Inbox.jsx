/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import useTopStories from "../hooks/useTopStories";
import ArticleSection from "../templates/ArticleSection";

const Inbox = () => {
  const { topStories } = useTopStories("home");
  //let categories = [];
  const [categories, setCategories] = useState([]);

  console.log("render");

  useEffect(() => {
    // add categories to array
    topStories &&
      topStories.map(
        (article) =>
          categories.indexOf(article.section) === -1 &&
          categories.push(article.section)
      );

    topStories && setCategories(categories.slice(0, 4));
  }, [topStories]);

  const styles = {
    inbox: css`
      & label {
        display: flex;
        background-color: #f0f3f4;
        padding: 10px 20px;
        margin: 20px;
        border-radius: 5px;
      }

      & input {
        border: none;
        outline: none;
        width: 100%;
        background-color: inherit;

        &::placeholder {
          color: #6e8ca0;
        }
      }

      & svg {
        color: #6e8ca0;
      }
    `,
  };

  return (
    <div css={styles.inbox}>
      <label>
        <input type="text" placeholder="Search news" />
        <BsSearch />
      </label>

      <div>
        {categories &&
          categories.map((category, index) => {
            console.log("COMPONENT!!!!", category);
            return <ArticleSection category={category} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Inbox;
