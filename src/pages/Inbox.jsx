/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { SettingsContext } from "../context/Contexts";
import useTopStories from "../hooks/useTopStories";
import ArticleSection from "../templates/ArticleSection";

const Inbox = () => {
  const { topStories } = useTopStories("home");
  let allCategories = [];
  const [categories, setCategories] = useState([]);
  const { categorySettings, setCategorySettings } = useContext(SettingsContext);

  useEffect(() => {
    topStories &&
      topStories.map(
        (article) =>
          allCategories.indexOf(article.section) === -1 &&
          allCategories.push(article.section)
      );

    topStories && console.log(allCategories);

    topStories && setCategories(allCategories.slice(0, 2));

    if (categories.length > 0) {
      console.log(categories);

      setCategorySettings(
        categories.reduce((a, v) => ({ ...a, [v]: true }), {})
      );
    }
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
            return <ArticleSection category={category} key={index} />;
          })}
      </div>
    </div>
  );
};

export default Inbox;
