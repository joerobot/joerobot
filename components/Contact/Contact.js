import "./Contact.scss";

export default () => (
    <div className="contact">
        <h2 className="contact__header">Contact</h2>
        <table className="contact__table">
            <tbody>
                <tr className="contact__item">
                    <th>email:</th>
                    <td><a className="contact__link" href="mailto:joe.reed.4@gmail.com">joe.reed.4@gmail.com</a></td>
                </tr>
                <tr className="contact__item">
                    <th>twitter:</th>
                    <td><a className="contact__link" href="https://www.twitter.com/joerobot">@joerobot</a></td>
                </tr>
            </tbody>
        </table>
    </div>
);
