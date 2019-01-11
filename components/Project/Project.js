import ReactMarkdown from 'react-markdown';
// import Flickity from 'react-flickity-component';
import Carousel from './../Carousel/Carousel';

const flickityOptions = {};

export default (props) => (
    <li>
    {props.title}
    <ReactMarkdown source={props.description} />
    <Carousel>
        {props.images &&
            props.images.map((img, i) => <img src={`/static/img/${img}.png`} key={i} />)}
    </Carousel>
    </li>
);
