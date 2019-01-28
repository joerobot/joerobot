import "./Footer.scss";
import Contact from './../Contact/Contact';

export default () => (
    <footer>
        <Contact />
        <div className="footer__wrapper">
            <div className="footer__triangle"></div>
            <div className="footer__content">
                <ul className="footer__links">
                    <li>
                        Github
                    </li>
                    <li>
                        Twitter
                    </li>
                    <li>
                        Unsplash
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);
