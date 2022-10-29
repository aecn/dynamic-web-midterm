import React from "react";

function ArticleCard({ article, description, publishedAt, title }) {
  return (
    <div className="ArticleCard">
      <h3>{title}</h3>
      <h4>{description}</h4>
      <p>{publishedAt}</p>
    </div>
  );
}

export default ArticleCard;
