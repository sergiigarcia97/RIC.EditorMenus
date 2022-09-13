import { Component } from "react";
import { connect } from "react-redux";
import attributeType from "../../common/Editor/types/attributeType";
import authorizationType from "../../common/Editor/types/authorizationType";
import contentType from "../../common/Editor/types/contentType";
import validationType from "../../common/Editor/types/validationType";
import { isAuthorized } from "../../common/functions/gridFunctions";
import { getInternalIDS } from "../../common/functions/validations";
import RLabelInput from "../../ReusableComponents/Input/RLabelInput";
import RDropdownList from "../Dropdown/RDropdownList";

class RInputList extends Component {

    render() {
        const { itemList } = this.props;

        return (
            <div className={this.props.classToDiv}>
                {this.props.listLabel}
                {Object.entries(itemList).map(([attributeKey, attributeProps]) => {
                    //console.log("key", attributeKey)
                    //console.log("value", attributeProps)
                    let authorizedView = attributeProps.visible;
                    let authorizedEnabled = attributeProps.editable;
                    if (this.props.role) {
                        if (attributeProps.authorization) {
                            authorizedView = isAuthorized(this.props.role, attributeProps.authorization, authorizationType.VISIBLE);
                            authorizedEnabled = isAuthorized(this.props.role, attributeProps.authorization, authorizationType.EDITABLE);
                        }
                    }
                    if (authorizedView) {
                        let name = "";
                        if (this.props.parentOption !== null && this.props.parentOption !== undefined) {
                            name = this.props.parentAttribute + "-" + this.props.type + "-" + attributeKey + "-" + this.props.parentOption;
                        } else {
                            if (this.props.type !== null && this.props.type !== undefined) {
                                name = this.props.parentAttribute + "-" + this.props.type + "-" + attributeKey;
                            } else {
                                name = this.props.parentAttribute + "-" + attributeKey;

                            }
                        }
                        let fieldClassname = "form-control";
                        let labelClassName = "";
                        //console.log("rinputlistvalidations ",this.props.validations)
                        let validationTexts = this.props.validations.map(validation => {
                            //console.log("validation", validation)
                            let validationText = null;
                            Object.entries(validation).forEach(([index, value]) => {
                                let splittedStateKey = index.split("-");
                                let keyToCheck = "";
                                if (splittedStateKey[0] === validationType.CONDITIONED) {
                                    let childSplit = splittedStateKey[2].split(".");
                                    if(childSplit.length === 1) {
                                        keyToCheck = splittedStateKey[2];
                                    }else{
                                        keyToCheck = childSplit[1];
                                    }
                                    
                                } else {
                                    let childSplit = splittedStateKey[1].split(".");
                                    if(childSplit.length === 1) {
                                        keyToCheck = splittedStateKey[1];
                                    }else{
                                        keyToCheck = childSplit[1];
                                    }
                                }
                                /*console.log("keyToCheck", keyToCheck)*/
                                if (attributeKey === keyToCheck && value.validated === false) {
                                    fieldClassname += " modal-input-error";
                                    labelClassName = "color-red";
                                    validationText = <span key={"validate-" + index} className="modal-text-error color-red">
                                        {value.errorText}
                                    </span>
                                }
                            })
                            return validationText;
                        })
                        //console.log("name to input "+attributeProps.type,name)
                        switch (attributeProps.type) {
                            case attributeType.STRING:
                                return <div key={name}>
                                    <RLabelInput
                                        key={attributeKey}
                                        type={contentType.TEXT}
                                        name={name}
                                        id={name}
                                        className={fieldClassname}
                                        classToDiv={this.props.divClassname}
                                        enabled={authorizedEnabled}
                                        labelText={attributeProps.label}
                                        labelClassName={labelClassName}
                                        initialValue={attributeProps.value}
                                        helpText={attributeProps.helpText}
                                        //onChange={this.props.handleChange}
                                        onBlur={this.props.handleChange}
                                    //minValue={minValue}
                                    //onKeyDown={keyPress}
                                    />
                                    {validationTexts}
                                </div>
                                case attributeType.BOOLEAN:
                                    return <div key={name}>
                                    <RLabelInput
                                        key={attributeKey}
                                        type={contentType.CHECKBOX}
                                        defaultChecked={attributeProps.value}
                                        enabled={authorizedEnabled}
                                        labelText={attributeProps.label}
                                        labelClassName={"margin-left-2 " + labelClassName}
                                        required={attributeProps.required}
                                        helpText={attributeProps.helpText}
                                        id={name}
                                        name={name}
                                        className={"modal-input-checkbox"}
                                        classToDiv="modal-input-checkbox-container"
                                        onChange={this.props.handleChange}
                                    //minValue={minValue}
                                    //onKeyDown={keyPress}
                                    />
                                    {validationTexts}
                                </div>
                            case attributeType.DROPDOWNLIST:

                                if (attributeProps.dynamic !== undefined) {
                                    if (attributeProps.dynamic === true) {
                                        let valueList = getInternalIDS(this.props.rows, this.props.localStorage.source, this.props.contentId);
                                        return <div key={name}><RDropdownList
                                            key={attributeKey}
                                            initialValue={attributeProps.defaultValue}
                                            itemList={valueList}
                                            originKey={name}
                                            label={attributeProps.label}
                                            className={fieldClassname}
                                            onChange={this.props.handleChange}
                                        //classToDiv="modal-input-container"
                                        />
                                            {validationTexts}
                                        </div>
                                    } else {
                                        return <div key={name}><RDropdownList
                                            key={attributeKey}
                                            initialValue={attributeProps.defaultValue}
                                            itemList={attributeProps.value}
                                            originKey={name}
                                            label={attributeProps.label}
                                            className={fieldClassname}
                                            onChange={this.props.handleChange}
                                        //classToDiv="modal-input-container"
                                        />
                                            {validationTexts}
                                        </div>
                                    }
                                } else {
                                    return <div key={name}><RDropdownList
                                        key={attributeKey}
                                        initialValue={attributeProps.defaultValue}
                                        itemList={attributeProps.value}
                                        originKey={name}
                                        label={attributeProps.label}
                                        className={fieldClassname}
                                        onChange={this.props.handleChange}
                                    //classToDiv="modal-input-container"
                                    />
                                        {validationTexts}
                                    </div>
                                }

                            case attributeType.INTEGER:
                                let minValue = null;
                                let maxValue = null;
                                switch (attributeKey) {
                                    case 'page':
                                        minValue = -1;
                                        maxValue = null;
                                        break;
                                    default:
                                        minValue = 0;
                                        break;
                                }
                                return <div key={name}>
                                    <RLabelInput
                                        key={name}
                                        type={contentType.NUMBER}
                                        name={name}
                                        id={name}
                                        className={fieldClassname}
                                        classToDiv={this.props.divClassname}
                                        enabled={authorizedEnabled}
                                        labelText={attributeProps.label}
                                        labelClassName={labelClassName}
                                        initialValue={attributeProps.value}
                                        helpText={attributeProps.helpText}
                                        //onChange={this.props.handleChange}
                                        onBlur={this.props.handleChange}
                                        minValue={minValue}
                                        maxValue={maxValue}
                                    //onKeyDown={keyPress}
                                    />
                                    {validationTexts}
                                </div>
                            default: break;
                        }

                    }
                    return null;
                }
                )}
            </div>
        )
    }
}
//cojemos los valores de la "store" o Redux
function mapStateToProps(state) {
    return {
        // activeInput: state.grid.activeInput,
        //modal: state.modal.toggleEdit,
        rows: state.grid.rows,
        localStorage: state.grid.localStorage,
    }
}
export default connect(mapStateToProps, null)(RInputList);