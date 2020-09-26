import snoowrap from 'snoowrap';

let creds = {
    userAgent: process.env.REACT_APP_REDDIT_USER_AGENT,
    clientId: process.env.REACT_APP_REDDIT_CLIENT_ID,
    clientSecret: process.env.REACT_APP_REDDIT_CLIENT_SECRET
};

if (!!process.env.REACT_APP_REDDIT_REFRESH_TOKEN) {
    creds = {
        ...creds,
        refreshToken: process.env.REACT_APP_REDDIT_REFRESH_TOKEN
    };
} else {
    creds = {
        ...creds,
        username: process.env.REACT_APP_REDDIT_USERNAME,
        password: process.env.REACT_APP_REDDIT_PASSWORD
    };
}

const reddit = new snoowrap(creds);

const sub = reddit.getSubreddit('buildapcsales');

export default sub;
