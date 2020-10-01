import axios from 'axios';
import cheerio from 'cheerio';

const getHTML = async (url) => {
    const data = await axios.get(url)
        .catch((err) => {
            console.log(err);
        });
    return data;
};

const getImageUrl = async (html) => {
    console.log(html);
    const cHTML = cheerio.load(html);

    const span = cHTML('#imgTagWrapperId');

    console.log(span.html());
}

// getImageUrl(getHTML('https://www.amazon.com/Sabrent-Rocket-Internal-Performance-SB-RKTQ-2TB/dp/B0829DZH2W/ref=sr_1_4?dchild=1&keywords=nvme+m.2&qid=1601265574&sr=8-4'));