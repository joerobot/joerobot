export default (props) => (
    <li>
    <pre>{JSON.stringify(props)}</pre>
    {props.title}
    </li>
);
