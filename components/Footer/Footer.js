import "./Footer.scss";
import Contact from './../Contact/Contact';
import { GithubLogo, LinkedinLogo, TwitterLogo, UnsplashLogo } from './Logos';

export default () => (
    <footer>
        <Contact />
        <div className="footer__wrapper">
            <div className="footer__triangle"></div>
            <div className="footer__content">
                <ul className="footer__links">
                    <li>
                        <a href="https://www.github.com/joerobot">
                            <GithubLogo />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/joerobot">
                            <TwitterLogo />
                        </a>
                    </li>
                    <li>
                        <a href="https://wwww.linkedin.com/in/loomingbeard">
                            <LinkedinLogo />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.unsplash.com/joerobot">
                            <UnsplashLogo />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
);
