/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Article = ({ articleLink, imageSource, headline, abstract }) => {
  const styles = {
    component: css`
      padding: 10px;
      text-decoration: none;
      display: flex;
      gap: 20px;
    `,
    image: css`
      display: block;
      border-radius: 50%;
      width: 75px;
      height: 75px;
      object-fit: cover;
    `,
    content: css`
      & h3 {
        font-size: 0.9rem;
        color: #000;
      }
      & p {
        font-size: 0.6rem;
        color: #9cb0be;
      }
    `,
  };

  return (
    <a css={styles.component} href={articleLink}>
      <img
        css={styles.image}
        src={
          imageSource
            ? imageSource
            : "https://images.arla.com/recordid/E56E005C-F872-441F-8B916460DE67CF82/klassens-time-kage.jpg?width=1269&height=715"
        }
        alt="Random text"
        title="Random text"
      />
      <div css={styles.content}>
        <h3>{headline}</h3>
        <p>{abstract}</p>
      </div>
    </a>
  );
};

export default Article;
