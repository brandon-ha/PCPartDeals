import React from 'react';

const Post = (props) => {
  console.log(props)

  return (
    <div className="post">
      {(props.thumbnail !== 'default' && props.thumbnail !== 'self') && <img src={props.thumbnail} />}
      <a href={props.url} rel='noopener noreferrer' target="_blank">{props.title}</a>
    </div>
  );
};

export default Post;