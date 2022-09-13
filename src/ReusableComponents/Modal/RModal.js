import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
export default class RModal extends Component {

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={this.props.toggle}
                className={this.props.modalClass ? this.props.modalClass : "modal-lg"}
                unmountOnClose={this.props.unmountOnClose}
                scrollable={this.props.scrollable}
            >
                <ModalHeader
                    toggle={this.props.toggle}
                    close={this.props.closeButton}
                >
                    {this.props.modalTitle}
                </ModalHeader>
                <ModalBody>
                    <div className="modal-body-container">
                        {this.props.modalBody}
                    </div>
                </ModalBody>
                <ModalFooter>
                    {this.props.modalFooter}
                </ModalFooter>
            </Modal>
        );
    }
}