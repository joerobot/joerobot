import us2016Desc from './project-descriptions/us2016.md';
import jihadistsDesc from './project-descriptions/jihadists.md';
import housePricesDesc from './project-descriptions/house-prices.md';
import affordableRentDesc from './project-descriptions/affordable-rent.md';

export default [{
    name: "us2016",
    title: "US 2016",
    url: "https://www.bbc.co.uk/news/election/us2016/results",
    views: "31m",
    description: us2016Desc,
},
{
    name: "jihadists",
    title: "Who are Britain’s Jihadists?",
    url: "https://www.bbc.co.uk/news/uk-32026985",
    views: "1m",
    description: jihadistsDesc,
},
{
    name: "house-prices",
    title: "Neighborhood House Prices",
    url: "https://www.bbc.co.uk/news/business-41582755",
    views: "2.2m",
    description: housePricesDesc,
    awards: [
        "BIGGIES (EMEA) 2018 - Excellence in Creativity in a Data-Driven Project",
        "Royal Statistical Society Awards 2018 - Regional Journalism"
    ],
},
{
    name: "affordable-rent",
    title: "Affordable Rent",
    url: "https://www.bbc.co.uk/news/business-45559456",
    views: "1m",
    description: affordableRentDesc,
}]
