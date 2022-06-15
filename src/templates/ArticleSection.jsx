/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Article from "../components/Article";
import useArticles from "../hooks/useArticles";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";

const ArticleSection = ({ category }) => {
  const { articles, error, isPending } = useArticles(category, 5);

  const styles = {
    component: css``,
    categoryHeader: css`
      padding: 10px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      border-top: 1px solid red;
      border-bottom: 1px solid red;

      & svg {
        display: block;
        font-size: 1.4rem;
      }

      & h2 {
        margin-left: 10px;
        text-transform: uppercase;
        font-size: 1.1rem;
      }
    `,
    iconContainer: css`
      background-color: red;
      padding: 5px;
      border-radius: 50%50%;
    `,
    articles: css`
      & div:not(:last-child) {
        border-bottom: 1px solid orange;
      }
    `,
  };

  return (
    <div css={styles.component}>
      <div css={styles.categoryHeader}>
        <div css={styles.iconContainer}>
          <BiCategoryAlt />
        </div>
        <h2>{category}</h2>
        <IoIosArrowDown />
      </div>

      <div css={styles.articles}>
        {articles &&
          articles.map((article, index) => {
            return (
              <Article
                imageSource={article.multimedia[0].url}
                headline={article.title}
                abstract={article.abstract}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default ArticleSection;
