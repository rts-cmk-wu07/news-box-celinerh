const Article = ({ imageSource, headline, abstract }) => {
  return (
    <div>
      <img src={imageSource} alt="Random text" title="Random text" />
      <h3>{headline}</h3>
      <p>{abstract}</p>
    </div>
  );
};

export default Article;
