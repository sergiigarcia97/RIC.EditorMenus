import { Component } from "react";
import { Toast, ToastHeader } from "reactstrap";


export default class RToast extends Component {


    render() {
        return (
            <div>
                <Toast icon={this.props.icon}>
                    <ToastHeader>
                        {this.props.headerText}
                    </ToastHeader>
                    <ToastBody>
                        {this.props.bodyText}
                    </ToastBody>
                </Toast>
            </div>
        );
    }
}
