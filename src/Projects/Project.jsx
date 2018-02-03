import React from 'react';
import Modal from './Modal';
import us2016Img from '../img/us2016/thumbnail.png';
import pisaImg from '../img/pisa/thumbnail.png';
import jihadistsImg from '../img/jihadists/thumbnail.png';
import flightdelaysImg from '../img/flightdelays/thumbnail.png';



class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalView: false,
        };
        this.project = props.data;
        const thumbnails = {
            us2016: us2016Img,
            pisa: pisaImg,
            jihadists: jihadistsImg,
            flightdelays: flightdelaysImg,
        };
        this.thumbnail = thumbnails[this.project.name];
        this.clickHandler = this.clickHandler.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    clickHandler() {
        this.openModal();
    }

    closeModal() {
        this.setState({
            modalView: false,
        });
    }

    openModal() {
        this.setState({
            modalView: true,
        });
    }

    render() {
        return (
            <div>
                <a
                    className="sixteen-nine"
                    href={`#${this.project.title}`}
                    onClick={this.clickHandler}
                >
                    <img className="project-thumb project-thumb__img" src={this.thumbnail} />
                    <h5 className="project-thumb project-thumb__label">
                        <span>{this.project.title}</span>
                    </h5>
                    <button className="project-thumb project-thumb__button"></button>
                </a>
                <Modal
                    modalView={this.state.modalView}
                    closeModal={this.closeModal}
                />
            </div>
        );
    }
}

export default Project;
