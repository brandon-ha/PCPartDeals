import React from 'react';
import url from 'url';
import moment from 'moment';

const Post = (props) => {
  const sourceString = url.parse(props.url).hostname;
  const redditUrl = url.resolve('https://reddit.com', props.permalink);
  const now = moment(new Date());
  const posted = props.created_utc * 1000;
  const timeDiff = moment.duration(now.diff(posted)).humanize();

  return (
    <div className="post">
      {(props.thumbnail !== 'default' && props.thumbnail !== 'self') && <img src={props.thumbnail} alt=''/>}
      <a href={props.url} rel='noopener noreferrer' target="_blank">{props.title}</a>
      <p>Upvotes: {props.ups}</p>
      <h4>{sourceString}</h4>
      <a href={redditUrl} rel='noopener noreferrer' target="_blank">Reddit Thread</a>
      <p>Posted {timeDiff} ago</p>
    </div>
  );
};

export default Post;