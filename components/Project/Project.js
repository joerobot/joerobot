import ReactMarkdown from "react-markdown";
import Carousel from "./../Carousel/Carousel";
import "./Project.scss";

export default props => (
  <li className="project">
    <h3 className="project__title">{props.title}</h3>
    <div className="project__content">
      <p className="project__link">
        <a href={props.url}>{props.urlTitle}</a>
      </p>
      {props.awards && (
        <div>
          <p>Awards:</p>
          <ul>
            {props.awards.map((award, i) => (
              <li key={i}>{award}</li>
            ))}
          </ul>
        </div>
      )}
      <ReactMarkdown source={props.description} />
      <Carousel>
        {props.images &&
          props.images.map((img, i) => (
            <div className="carousel__cell" key={i}>
              {img.video ? (
                <video
                  className="project__screencap project__screencap--v"
                  autoPlay
                  loop
                  muted
                >
                  <source
                    src={`static/video/${img.name}.webm`}
                    type="video/webm"
                  />
                  <source src={`static/video/${img.name}.mp4`} type="video/mp4" />
                </video>
              ) : (
                <img
                  data-flickity-lazyload={`/static/img/${img.name}`}
                  className={`project__screencap project__screencap--${
                    img.vertical ? "v" : "w"
                  }`}
                />
              )}
            </div>
          ))}
      </Carousel>
      <noscript>
        {props.images &&
          <img src={`/static/img/${props.images[0].name}`} />
        }
      </noscript>
    </div>
  </li>
);
