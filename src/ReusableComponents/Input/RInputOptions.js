import { Component } from "react";
import { connect } from 'react-redux';
import contentType from "../../common/Editor/types/contentType";
import optionType from "../../common/Editor/types/optionType";
import sourceType from "../../common/Editor/types/sourceType";
import { MODAL_SHOW } from "../../redux/reducers/modal/actions/modal-actions";
import RIcon from "../../ReusableComponents/Button/RIcon";
import RLabelInput from "../../ReusableComponents/Input/RLabelInput";
import PositionModal from "../../RICComponents/Modal/PositionModal";

class RInputOptions extends Component {

    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //hay que inicializar el estado porque lo alteramos desde otro componente
        this.state = {}

    }

    handleClick(e, name) {
        this.props.onDeleteOption(name);
        //this.props.deleteOption(this.props.parentRow, this.props.parentColumn, value.order)
    }

    handleChange(e, attributeKey) {
        let parentHandleChange = this.props.handleAttributeField;
        parentHandleChange(e, attributeKey);
    }


    render() {
        const { itemList } = this.props;
        //console.log("itemList", itemList)
        let deleteButtonClassName = "";
        let deleteButtonDisabled = false;

        if (this.props.minimumOptions === itemList.length) {
            deleteButtonClassName = "disabledIcon";
            deleteButtonDisabled = true;
        }
        let classToButtons = "pointer button-md button-grey";
        //}


        let label = itemList.length > 0 ? this.props.label : null;
        return (
            <div>
                {label}
                <div className={this.props.classToDiv}>
                    {itemList.map((value, key) => {
                        //console.log("value", value)
                        return <div key={key} className="modal-option-container">
                            <div className="modal-option-fields">
                                {value.defaultChecked !== undefined && value.defaultChecked !== null ?
                                    <RLabelInput
                                        key={key}
                                        classToDiv={"modal-default-checked-container"}
                                        className="modal-input-checkbox"
                                        //classToDiv="modal-checkbox-container"
                                        //labelClassName={COMMON_INPUT_PROPERTIES.labelClassName + " modal-label-checkbox"}
                                        onChange={e => this.props.handleAttributeField(e, this.props.originKey)}
                                        type={contentType.CHECKBOX}
                                        name={"defaultChecked-" + value.order}
                                        id={"defaultChecked-" + value.order}
                                        enabled={true}
                                        //placeholder={this.props.card.content.placeholder}
                                        //labelText={INPUT_PROPERTIES.labelText}
                                        //initialValue={value}
                                        checked={value.defaultChecked}
                                        helpText={"Indicativo de que la opción se visualizará marcada por defecto"}
                                    />
                                    : null}
                                <RLabelInput
                                    key={"option-label-" + value.order}
                                    type="text"
                                    name={"option-label-" + value.order}
                                    id={"option-label-" + value.order}
                                    className="form-control"
                                    classToDiv="modal-option-input-container"
                                    placeholder={this.props.optionType === optionType.HTML ? "Nombre de opción" : "Nombre de atributo"}
                                    enabled={true}
                                    //labelText={this.props.optionType === optionType.ATTR ? value.key : null}
                                    onBlur={e => this.props.handleAttributeField(e, this.props.originKey)}
                                    initialValue={value.label}
                                />
                                {value.value !== undefined && value.value !== null ?
                                    <RLabelInput
                                        key={"option-value-" + value.order}
                                        type="text"
                                        name={"option-value-" + value.order}
                                        id={"option-value-" + value.order}
                                        className="form-control"
                                        classToDiv="modal-option-input-container"
                                        placeholder={"Valor de opción"}
                                        enabled={true}
                                        //labelText={this.props.optionType === optionType.ATTR ? value.key : null}
                                        onBlur={e => this.handleChange(e, this.props.originKey)}
                                        //initialValue={this.props.optionType === optionType.ATTR ? value.value : null}
                                        initialValue={value.value}
                                    />
                                    : null}
                                <div className="modal-option-buttons-container">
                                    <RIcon
                                        id={"eliminarValue-option-" + value.order}
                                        className={classToButtons + " " + deleteButtonClassName}
                                        iconType="minus"
                                        iconSize="small"
                                        iconClassname="icon-black"
                                        tooltipText={"Eliminar opción"}
                                        key={"eliminarValue" + value.order}
                                        disabled={deleteButtonDisabled}
                                        onClick={() => this.props.deleteAttribute(value.order, this.props.originKey)} />
                                    <RIcon
                                        id={"anadirValue-option-" + value.order}
                                        className={classToButtons}
                                        iconType="plus"
                                        iconSize="small"
                                        iconClassname="icon-black"
                                        key={"anadirValue" + value.order}
                                        tooltipText={"Añadir opción"}
                                        onClick={() => this.props.addAttribute(value.order, this.props.originKey)}
                                    />
                                    {value.position !== undefined && value.position !== null ?
                                        <div>
                                            <RIcon
                                                className={classToButtons}
                                                id="btnModalVerPosicionesVID"
                                                value="defaultValue"
                                                iconType="edit"
                                                iconSize="small"
                                                iconClassname="icon-black"
                                                tooltipText="Editar posición"
                                                onClick={() => this.props.parentToggle(this.props.originKey, value.order)}
                                            />
                                            <PositionModal
                                                title={value.position.label}
                                                activePosition={value.position.fields}
                                                activeCondition={value.condition && value.condition !== null ? value.condition.fields : null}
                                                parentAttribute={this.props.originKey}
                                                parentOption={value.id}
                                                modal={value.modal}
                                                parentToggle={() => this.props.parentToggle(this.props.originKey, value.order)}
                                                unsetParentFields={() => this.props.unsetParentFields(this.props.originKey, value.id)}
                                                handleChange={e => this.handleChange(e, this.props.originKey)}
                                            />
                                        </div>
                                        : null}
                                    {value.properties !== undefined && value.properties !== null ?
                                        <div>
                                            <RIcon
                                                className={classToButtons}
                                                id="btnModalVerPropiedades"
                                                value="defaultValue"
                                                iconType="editar"
                                                iconSize="small"
                                                iconClassname="icon-black"
                                                tooltipText="Editar propiedades"
                                                onClick={() => this.props.parentToggle(this.props.originKey, value.order)}
                                            />
                                            <PositionModal
                                                title={value.properties.label}
                                                activePosition={value.properties.fields}
                                                parentAttribute={this.props.originKey}
                                                parentOption={value.id}
                                                modal={value.modal}
                                                parentToggle={() => this.props.parentToggle(this.props.originKey, value.order)}
                                                unsetParentFields={() => this.props.unsetParentFields(this.props.originKey, value.id)}
                                                handleChange={e => this.handleChange(e, this.props.originKey)}
                                            />
                                        </div>
                                        : null}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}
//cojemos los valores de la "store" o Redux
function mapStateToProps(state) {
    return {
        //rows: state.grid.rows,
        activeInput: state.grid.activeInput,
        localStorage: state.grid.localStorage
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        showModal: (type) => {
            dispatch(MODAL_SHOW(type))
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RInputOptions);