import sub from '../reddit/reddit';

const getNewSearchParams = (current, flair, ...rest) => {
    let query = ''

    if (!!flair) {
        query = `flair:${flair} ${rest}`
    } else {
        query = rest
    }

    return {
        ...current,
        query
    }
};

const fetchPosts = ({item, sortBy, time, search}) => {
    let searchParams = {
        query: '',
        sort: sortBy,
        time
    };

    switch (item) {
        case 'all':
            if (!search) {
                switch (sortBy) {
                    case 'hot':
                        return sub.getHot({time});
                    case 'new':
                        return sub.getNew({time});
                    case 'top':
                        return sub.getTop({time});
                    case 'rising':
                        return sub.getRising({time});
                    default:
                        return 
                }
            } else {
                searchParams = getNewSearchParams(searchParams, '', search);
                break;
            }
        case 'mobo':
            searchParams = getNewSearchParams(searchParams, item, `OR flair:motherboard ${search}`);
            break;
        case 'cpu':
            searchParams = getNewSearchParams(searchParams, item, `NOT Cooler ${search}`);
            break;
        case 'gpu':
            searchParams = getNewSearchParams(searchParams, item, `NOT Cooler ${search}`);
            break;
        case 'hdd':
            searchParams = getNewSearchParams(searchParams, item, `NOT ssd ${search}`);
            break;
        case 'ssd':
            searchParams = getNewSearchParams(searchParams, item, `OR flair:"m2. ssd" NOT hdd ${search}`);
            break;
        case 'cooler':
            searchParams = getNewSearchParams(searchParams, item, `OR flair:"CPU Cooler" ${search}`);
            break;
        default:
            searchParams = getNewSearchParams(searchParams, item, search);
    }

    return sub.search(searchParams);
};

const fetchMorePosts = (post) => {
    console.log('fetching');
    return post.fetchMore({amount: 25});
};


export { fetchPosts, fetchMorePosts };