import { Component } from "react";
import { connect } from 'react-redux';
import contentType from "../../common/Editor/types/contentType";
import modalTypes from "../../common/Editor/types/modalType";
import optionType from "../../common/Editor/types/optionType";
import propertiesVIDType from "../../common/Editor/types/propertiesVIDType";
import sourceType from "../../common/Editor/types/sourceType";
import { MODAL_SHOW } from "../../redux/reducers/modal/actions/modal-actions";
import RIcon from "../../ReusableComponents/Button/RIcon";
import RLabelInput from "../../ReusableComponents/Input/RLabelInput";

class RInputKeyValueList extends Component {

    constructor (props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //hay que inicializar el estado porque lo alteramos desde otro componente
        this.state = {}

    }

    showVIDProperties(item) {
        //console.log("item on inputoptions", item);
        let id = null;
        if (this.props.contentType === contentType.CHECKBOX) {
            id = item.id;
        }
        let VIDProperties = {
            position: item.position,
            VID_Condition: item.VID_Condition,
            target: item.name,
            type: propertiesVIDType.OPTION,
            contentType: this.props.contentType,
            optionId: id
        }
        this.props.setVIDProperties(VIDProperties);
        this.props.showModal(modalTypes.VID_PROPERTIES);
    }

    handleClick(e, name) {
        this.props.onDeleteOption(name);
        //this.props.deleteOption(this.props.parentRow, this.props.parentColumn, item.order)
    }

    handleChange(e, attributeKey) {
        let parentHandleChange = this.props.onChange;
        parentHandleChange(e, attributeKey);
    }


    render() {
        const { itemList } = this.props;
        let deleteButtonClassName = "";
        let deleteButtonDisabled = false;


        /*
                if (this.props.optionType === optionType.HTML) {
                    //console.log("minimumOptions", this.props.minimumOptions)
                    //console.log("itemList length", itemList.length)
                    if (this.props.minimumOptions === itemList.length) {
                        deleteButtonClassName = "disabledIcon";
                        deleteButtonDisabled = true;
                    }
                    //optionType.ATTR
                } else {
                    if (this.props.minimumOptions === (itemList.length - 1)) {
                        deleteButtonClassName = "disabledIcon";
                        deleteButtonDisabled = true;
                    }
                }*/
        let classToButtons = " pointer button-md button-grey";


        let label = itemList && itemList.length > 0 ? this.props.label : null;
        return (
            <div className={this.props.optionType === optionType.ATTR ? "modal-options-container" : ""}>
                {label}
                <div className={this.props.classToDiv}>
                    {itemList !== undefined ? itemList.map((item, key) => {
                        //console.log("el item" + item.name + " deberia estar con valor " + item.defaultChecked)
                        //console.log("item on inputoptions",item)
                        return <div key={key} className="modal-option-container">
                            <div className="modal-option-fields">
                                <RLabelInput
                                    key={"option-label-" + item.order}
                                    type="text"
                                    name={this.props.optionType === optionType.HTML ? "option-label-" + item.name : "attr-key-" + item.order}
                                    id={this.props.optionType === optionType.HTML ? "option-label-" + item.name : "attr-key-" + item.order}
                                    className="form-control"
                                    classToDiv="modal-option-input-container"
                                    placeholder={this.props.optionType === optionType.HTML ? "Nombre de opción" : "Nombre de atributo"}
                                    enabled={true}
                                    //labelText={this.props.optionType === optionType.ATTR ? item.key : null}
                                    onBlur={e => this.handleChange(e, this.props.originKey)}
                                    initialValue={this.props.optionType === optionType.ATTR ? item.key : item.label}
                                />
                                {this.props.localStorage.source !== sourceType.VID ?
                                    <RLabelInput
                                        key={"option-value-" + item.order}
                                        type="text"
                                        name={this.props.optionType === optionType.HTML ? "option-value-" + item.name : "attr-value-" + item.order}
                                        id={this.props.optionType === optionType.HTML ? "option-value-" + item.name : "attr-value-" + item.order}
                                        className="form-control"
                                        classToDiv="modal-option-input-container"
                                        placeholder={this.props.optionType === optionType.HTML ? "Valor de opción" : "Valor de atributo"}
                                        enabled={true}
                                        //labelText={this.props.optionType === optionType.ATTR ? item.key : null}
                                        onBlur={e => this.handleChange(e, this.props.originKey)}
                                        //initialValue={this.props.optionType === optionType.ATTR ? item.value : null}
                                        initialValue={item.value}
                                    />
                                    : null}
                                <div className="modal-option-buttons-container">
                                    {this.props.localStorage.source !== sourceType.VID && (this.props.type === contentType.RADIO || this.props.type === contentType.DROPDOWN) ?
                                        <RLabelInput
                                            key={key}
                                            classToDiv={this.props.classToDefaultChecked}
                                            className="modal-input-checkbox"
                                            //classToDiv="modal-checkbox-container"
                                            //labelClassName={COMMON_INPUT_PROPERTIES.labelClassName + " modal-label-checkbox"}
                                            onChange={this.props.onChange}
                                            type={contentType.CHECKBOX}
                                            name={"defaultChecked-" + item.name}
                                            id={"defaultChecked-" + item.name}
                                            enabled={true}
                                            //placeholder={this.props.card.content.placeholder}
                                            //labelText={INPUT_PROPERTIES.labelText}
                                            //initialValue={value}
                                            checked={item.defaultChecked}
                                            helpText="Indicativo de que la opción se visualizará marcada por defecto"
                                        />
                                        : null}
                                    <RIcon
                                        id={"eliminarValue-attr-" + item.order}
                                        className={classToButtons + " " + deleteButtonClassName}
                                        iconType="minus"
                                        iconSize="sm"
                                        iconClassname="icon-black"
                                        tooltipText="Eliminar atributo"
                                        key={"eliminarValue" + item.order}
                                        disabled={deleteButtonDisabled}
                                        onClick={() => this.props.deleteAttribute(item.order, this.props.originKey)}
                                    />
                                    <RIcon
                                        id={"anadirValue-attr-" + item.order}
                                        className={classToButtons}
                                        iconType="plus"
                                        iconSize="sm"
                                        iconClassname="icon-black"
                                        key={"anadirValue" + item.order}
                                        tooltipText="Añadir atributo"
                                        onClick={() => this.props.addAttribute(item.order, this.props.originKey)}
                                    />
                                    {this.props.localStorage.source === sourceType.VID && this.props.localStorage.role < 3 ?
                                        <RIcon
                                            className={classToButtons}
                                            id="btnModalVerPropiedadesVID"
                                            value="defaultValue"
                                            iconType="editar"
                                            iconSize="sm"
                                            iconClassname="icon-black"
                                            tooltipText="Editar posiciones y condiciones VID"
                                            onClick={() => this.showVIDProperties(item)}
                                        />
                                        : null}
                                </div>
                            </div>
                        </div>
                    }) : null}
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
export default connect(mapStateToProps, mapDispatchToProps)(RInputKeyValueList);