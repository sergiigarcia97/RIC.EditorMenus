import React, { Component } from 'react';

export default class RDropdownList extends Component {

    render() {

        let optionSelected;
        this.props.itemList.forEach(item => {
            if (item.key === this.props.initialValue) {
                optionSelected = item.key;
            }
        })

        let label = this.props.label ? this.props.label : null;

        return (
            <div className={this.props.classToDiv}>
                <label className="form-group">
                    {label}
                </label>
                <select
                    name={this.props.originKey}
                    defaultValue={optionSelected}
                    className={this.props.className}
                    onChange={this.props.onChange}
                >
                    {this.props.itemList.map((item, i) => {
                        let value;
                        if (i === 0) {
                            value = "defaultText";
                        } else {
                            value = item.key;
                        }
                        return <option key={this.props.originKey + "-" + item.value} value={value}> {item.value} </option>
                    })}
                </select>
            </div>
        );
    }
}

