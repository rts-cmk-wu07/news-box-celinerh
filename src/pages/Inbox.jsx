/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import useTopStories from "../hooks/useTopStories";
import ArticleSection from "../templates/ArticleSection";

const Inbox = () => {
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

  const { topStories, error, isPending } = useTopStories("home");

  let categories = [];
  useEffect(() => {
    // add categories to array

    topStories &&
      topStories.map(
        (article) =>
          categories.indexOf(article.section) === -1 &&
          categories.push(article.section)
      );

    categories = categories.slice(0, 6);
  });

  return (
    <div css={styles.inbox}>
      <label>
        <input type="text" placeholder="Search news" />
        <BsSearch />
      </label>

      <div>
        {categories &&
          categories.map((category, index) => {
            return <ArticleSection category={category} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Inbox;
