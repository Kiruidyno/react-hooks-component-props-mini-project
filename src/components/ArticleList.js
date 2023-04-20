import React from "react";
import Article from "./Article";

function ArticleList(props) { // add props parameter
  const {posts} = props;
  return (
    <div>
      {posts.map(post => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </div>
  );
}

export default ArticleList;
