import snoowrap from 'snoowrap';

const reddit = new snoowrap({
    userAgent: process.env.REACT_APP_REDDIT_USER_AGENT,
    clientId: process.env.REACT_APP_REDDIT_CLIENT_ID,
    clientSecret: process.env.REACT_APP_REDDIT_CLIENT_SECRET,
    username: process.env.REACT_APP_REDDIT_USERNAME,
    password: process.env.REACT_APP_REDDIT_PASSWORD
});

reddit.getSubreddit('buildapcsales').getHot({time: 'hour'}).then(console.log);

const sub = reddit.getSubreddit('buildapcsales');

export default sub;
