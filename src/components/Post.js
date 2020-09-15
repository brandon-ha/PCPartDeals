import React from 'react';
import url from 'url';
import moment from 'moment';
import Card from 'react-bootstrap/Card';

const parts = ['cpu', 'gpu', 'ram', 'mobo', 'psu', 'm.2 ssd', 'ssd', 'hdd', 'case', 'cpu cooler', 'fan'];

const Post = (props) => {
  // Generates placeholder image for post thumbnail
  const generatePlaceholder = (flair = '') => {
    if (!flair) {
      return (
        <div className="post__placeholder">
          <p className="post__placeholder-text">?</p>
        </div>
      )
    }

    if (flair === 'motherboard') {
      flair = 'mobo';
    } else if (flair === 'cpu cooler') { 
      flair = 'cooler';
    }

    if (parts.includes(flair)) {
      return (
        <div className="post__placeholder">
          <img src={`/images/items/${flair}.svg`} alt={flair} className="post__placeholder__icon"/>
        </div>
      );
    } else {
      return (
        <div className="post__placeholder">
          <p className="post__placeholder-text">{flair.toUpperCase()}</p>
        </div>
      )
    }
  };

  const redditUrl = url.resolve('https://reddit.com', props.permalink);
  const now = moment(new Date());
  const posted = props.created_utc * 1000;
  const timeDiff = moment.duration(now.diff(posted)).humanize();
  let productImage = null;

  // Check amazon and staples for thumbnail
  if (!props.link_flair_text) {
    productImage = generatePlaceholder();
  } else if (props.domain === 'amazon.com' || props.domain === 'smile.amazon.com') {
    productImage = generatePlaceholder(props.link_flair_text.toLowerCase());
  } else if (props.domain === 'staples.com') {
    productImage = generatePlaceholder(props.link_flair_text.toLowerCase());
  } else if (props.domain === 'nzxt.com') {
    productImage = generatePlaceholder(props.link_flair_text.toLowerCase());
  } else if (props.domain === 'evga.com') {
    productImage = generatePlaceholder(props.link_flair_text.toLowerCase());
  } else if (props.thumbnail !== 'default' && props.thumbnail !== 'self' && props.thumbnail !== 'spoiler') {
    productImage = (<img src={props.thumbnail} className="post__image" alt=''/>);
  } else {
    productImage = generatePlaceholder(props.link_flair_text.toLowerCase());
  }

  return (
    <Card body className="post">
      <div className="post-container">
        <a href={props.url} rel='noopener noreferrer' target="_blank" className="post__image-a">
          <div className="post__image-box">
            {productImage}
          </div>
        </a>
        <a href={props.url} rel='noopener noreferrer' target="_blank" className="post__title">
          {props.title}
        </a>
        <div className="post__info-block">
          <p>Upvotes: {props.ups}</p>
          {props.domain !== "self.buildapcsales" && <p><small>{props.domain}</small></p>}
          <p>Posted {timeDiff} ago</p>
          <a href={redditUrl} rel='noopener noreferrer' target="_blank">Reddit Thread</a>
        </div>
      </div>
    </Card>
  );
};

export default Post;