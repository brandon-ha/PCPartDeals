import sub from '../reddit/reddit';

const getNewSearchParams = (current, flair, ...rest) => ({
        ...current,
        query: `flair:${flair} ${rest}`
});

export default ({item, sortBy, showOutOfStock}) => {
    let searchParams = {
        query: '',
        sort: sortBy
    };

    // Handle exceptions
    switch (item) {
        case 'all':
            if (sortBy === 'hot') {
                return sub.getHot();
            } else if (sortBy === 'new') {
                return sub.getNew();
            } else {
                console.log('Invalid sort selected!');
                break;
            }
        case 'cpu':
            searchParams = getNewSearchParams(searchParams, item, 'NOT Cooler');
            break;
        case 'gpu':
            searchParams = getNewSearchParams(searchParams, item, 'NOT Cooler');
            break;
        case 'hdd':
            searchParams = getNewSearchParams(searchParams, item, 'NOT ssd');
            break;
        case 'ssd':
            searchParams = getNewSearchParams(searchParams, item, 'NOT hdd');
            break;
        default:
            searchParams = getNewSearchParams(searchParams, item);
    }

    return sub.search(searchParams);
};