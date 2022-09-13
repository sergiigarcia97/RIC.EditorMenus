import React, { Component } from 'react';

export default class Box extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}