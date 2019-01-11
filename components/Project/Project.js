import ReactMarkdown from 'react-markdown';

export default (props) => (
    <li>
    {props.title}
    <ReactMarkdown source={props.description} />
    </li>
);
