import React from 'react';
import url from 'url';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import { AiFillRedditCircle, AiFillClockCircle } from 'react-icons/ai';

const parts = ['cpu', 'gpu', 'ram', 'mobo', 'psu', 'm2', 'ssd', 'hdd', 'case', 'cpu cooler', 'fan'];

const Post = (props) => {
  let classList = ['post'];

  if (props.id === "go3ezv") {
    return null;
  }

  switch (props.link_flair_css_class) {
    case ('oos'):
    case ('expired'):
      classList.push('expired');
      break;
    default:
      break;
  }

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
    } else if (flair === 'm.2 ssd') {
      flair = 'm2';
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
    <Card body className={classList}>
      <div className="post-container">
        <h1 className="post-upvotes">{props.ups}</h1>
        <a href={props.url} rel='noopener noreferrer' target="_blank" className="post__image-a">
          <div className="post__image-box">
            {productImage}
          </div>
        </a>
        <a href={props.url} rel='noopener noreferrer' target="_blank" className="post__title">
          {props.title}
        </a>
        <div className="post__info-block">
          {props.domain !== "self.buildapcsales" && <p><small>{props.domain}</small></p>}
          <span><AiFillClockCircle /><span> {timeDiff} ago</span></span>
        </div>
        <a href={redditUrl} rel='noopener noreferrer' target="_blank" className="post__reddit"><AiFillRedditCircle /></a>
      </div>
    </Card>
  );
};

export default Post;