import us2016Desc from './project-descriptions/us2016.md';
import jihadistsDesc from './project-descriptions/jihadists.md';
import housePricesDesc from './project-descriptions/house-prices.md';
import affordableRentDesc from './project-descriptions/affordable-rent.md';

export default [{
    name: "us2016",
    title: "US Election 2016",
    url: "https://www.bbc.co.uk/news/election/us2016/results",
    urlTitle: "US Election 2016 Results",
    views: "31m",
    description: us2016Desc,
    images: [
        {
            name: 'us2016-1.png',
        },
        {
            name: 'us2016-2.png',
        },
        {
            name: 'us2016-3.png',
        },
        {
            name: 'us2016-4.png',
            vertical: true,
        },
        {
            name: 'us2016-5.png',
            vertical: true,
        },
    ],
},
{
    name: "jihadists",
    title: "Britain’s Jihadists",
    url: "https://www.bbc.co.uk/news/uk-32026985",
    urlTitle: "Who are Britain's Jihadists?",
    views: "1m",
    description: jihadistsDesc,
    images: [
        {
            name: 'jihadists-3.png',
        },
        {
            name: 'jihadists-2.png',
        },
        {
            name: 'jihadists-1.png',
            vertical: true,
        },
        {
            name: 'jihadists-4.png',
            vertical: true,
        },
        {
            name: 'jihadists-5.png',
            vertical: true,
        },
    ],
    
},
{
    name: "house-prices",
    title: "Neighborhood House Prices",
    url: "https://www.bbc.co.uk/news/business-41582755",
    urlTitle: "House prices: Have they actually gone up in your neighbourhood?",
    views: "2.2m",
    description: housePricesDesc,
    awards: [
        "BIGGIES (EMEA) 2018 - Excellence in Creativity in a Data-Driven Project",
        "Royal Statistical Society Awards 2018 - Regional Journalism"
    ],
    images: [
        {
            name: 'house-prices-1.png',
            vertical: true,
        },
        {
            name: 'house-prices-2.png',
        },
        {
            name: 'house-prices-3.png',
        },
    ],
},
{
    name: "affordable-rent",
    title: "Affordable Rent",
    url: "https://www.bbc.co.uk/news/business-45559456",
    urlTitle: "Where does rent hit young people the hardest in Britain?",
    views: "1m",
    description: affordableRentDesc,
    images: [
        {
            name: 'affordable-rent-1.png',
            vertical: true,
        },
        {
            name: 'affordable-rent-2',
            video: true,
        }
    ],
}]
