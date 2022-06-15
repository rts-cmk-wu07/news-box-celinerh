import Article from "../components/Article";
import useArticles from "../hooks/useArticles";

const ArticleSection = ({ category }) => {
  const { articles, error, isPending } = useArticles(category, 5);

  articles && console.log("articles", articles);

  return (
    <div>
      <h2>{category}</h2>
      {articles &&
        articles.map((article, index) => {
          return (
            <Article
              imageSource={article.multimedia[2].url}
              headline={article.title}
              abstract={article.abstract}
              key={index}
            />
          );
        })}
    </div>
  );
};

export default ArticleSection;
