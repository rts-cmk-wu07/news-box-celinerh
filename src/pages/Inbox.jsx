/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { SectionsContext, SettingsContext } from "../context/Contexts";
import useTopStories from "../hooks/useTopStories";
import ArticleSection from "../components/ArticleSection";

const Inbox = () => {
  const { topStories } = useTopStories("home");
  const { sections, setSections } = useContext(SectionsContext);
  const { settings, setSettings } = useContext(SettingsContext);

  useEffect(() => {
    if (!topStories) {
      return;
    }

    const uniqueSections = [
      ...new Set(topStories.map((story) => story.section)),
    ].slice(0, 2);

    setSections(uniqueSections);

    if (settings.sections === null) {
      setSettings({
        ...settings,
        sections: uniqueSections.reduce((acc, section) => {
          acc[section] = true;
          return acc;
        }, {}),
      });
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
        {sections.map((section, index) => {
          return (
            settings.sections[section] && (
              <ArticleSection section={section} key={index} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default Inbox;
