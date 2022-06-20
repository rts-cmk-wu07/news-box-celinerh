/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Article from "./Article";
import useArticles from "../hooks/useArticles";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategoryAlt } from "react-icons/bi";
import {
  TrailingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { GrInbox } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

const ArticleSection = ({ section }) => {
  const { articles, error, isPending } = useArticles(section, 5);

  const handleToggle = (e) => {
    const header = e.target.closest(".categoryHeader");

    header.classList.toggle("closed");
  };

  const styles = {
    component: css``,
    categoryHeader: css`
      padding: 10px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;

      border-top: 1px solid #f0f3f4;
      border-bottom: 1px solid #f0f3f4;
      cursor: pointer;

      & > svg {
        display: block;
        font-size: 1.4rem;
      }

      & h2 {
        margin-left: 10px;
        text-transform: uppercase;
        font-size: 1.1rem;
        color: #334856;
      }

      &.closed {
        & .arrow {
          transform: rotate(0deg);
        }

        & ~ .articles {
          display: none;
        }
      }
    `,
    iconContainer: css`
      background-color: #fff;
      box-shadow: 0px 5px 10px 0px rgba(66, 89, 101, 0.3);
      padding: 5px;
      border-radius: 50%;

      & > svg {
        color: #d97d54;
      }
    `,
    arrow: css`
      color: #334856;
      transform: rotate(180deg);
    `,

    articles: css`
      & div:not(:last-child) {
        border-bottom: 1px solid #f0f3f4;
      }
    `,
    swipe: css`
      background-color: #87bcbf;
      -height: 100%;
      display: flex;
      align-items: center;
      padding: 8px;
      font-size: 1.5rem;
      font-weight: 500;
      user-select: none;

      & svg {
        color: red;
      }
    `,
  };

  const trailingActions = (article) => (
    <TrailingActions>
      <SwipeAction onClick={() => console.log(article)}>
        <div css={styles.swipe}>
          <GrInbox />
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div css={styles.component}>
      <div
        className="categoryHeader"
        css={styles.categoryHeader}
        onClick={(e) => {
          handleToggle(e);
        }}
      >
        <div css={styles.iconContainer}>
          <BiCategoryAlt />
        </div>
        <h2>{section}</h2>
        <IoIosArrowDown className="arrow" css={styles.arrow} />
      </div>

      <div css={styles.articles} className="articles">
        <SwipeableList>
          {articles &&
            articles.map((article, index) => {
              return (
                <SwipeableListItem
                  trailingActions={trailingActions(article)}
                  key={index}
                >
                  <Article
                    imageSource={article.multimedia[0].url}
                    headline={article.title}
                    abstract={article.abstract}
                    key={index}
                  />
                </SwipeableListItem>
              );
            })}
        </SwipeableList>
      </div>
    </div>
  );
};

export default ArticleSection;
