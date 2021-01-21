import React from "react";
import "./Modal.css";

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }


    render() {
        return (
            <React.Fragment>
                {this.state.isOpen && (
                    <div className="modal">
                        <h1>Title</h1>
                        <p>dfdf</p>
                        <button onClick={() => this.setState({ isOpen: false })}>Закрыть</button>
                    </div>
                )}
            </React.Fragment>




        )
    }
}