/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useContext } from "react";
import Article from "../components/Article";
import { ArchiveContext } from "../context/Contexts";
import {
  TrailingActions,
  SwipeAction,
  SwipeableList,
  SwipeableListItem,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { MdDelete } from "react-icons/md";

const Archive = () => {
  const {
    archive: { articles },
    setArchive,
  } = useContext(ArchiveContext);

  const styles = {
    swipe: css`
      background-color: #ef4444;
      display: flex;
      align-items: center;
      padding: 8px;
      font-size: 1.5rem;
      font-weight: 500;
      user-select: none;
      color: #fff;
    `,
  };

  const trailingActions = (deletedArticleShortURL) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => {
          setArchive({
            articles: articles.filter(
              (article) => article.short_url !== deletedArticleShortURL
            ),
          });
        }}
      >
        <div css={styles.swipe}>
          <MdDelete />
        </div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div>
      <SwipeableList>
        {articles.map((article) => {
          return (
            <SwipeableListItem
              key={article.short_url}
              trailingActions={trailingActions(article.short_url)}
            >
              <Article
                articleLink={article.url}
                imageSource={article.multimedia[0].url}
                headline={article.title}
                abstract={article.abstract}
              />
            </SwipeableListItem>
          );
        })}
      </SwipeableList>
    </div>
  );
};

export default Archive;
