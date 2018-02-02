import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <div className="navigation">
                <button>
                    <span>Projects</span>
                </button>
                <button>
                    <span>Person</span>
                </button>
            </div>
        )
    }
}

export default Nav;
