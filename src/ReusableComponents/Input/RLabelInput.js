import { Component } from 'react';
import { connect } from 'react-redux';
import contentType from '../../common/Editor/types/contentType';
import modalTypes from '../../common/Editor/types/modalType';
import RTooltip from '../Tooltip/RTooltip';
/**
 * Componente para mostrar un input html
 * @class RLabelInput
 * @memberof RInput
 * @prop {string} id - Identificador del input
 * @prop {string} name - Nombre input (usado para radios,checkbox)
 * @prop {typedef} type - Tipo input (itemType)
 * @prop {string | ReadonlyArray<string> | number} value - valor del input (se controla por estado)
 * @prop {string} className - Clase css
 * @prop {string} classToDiv - Clase css del contenedor(div) del input
 * @prop {string} labelText - Texto a mostrar encima del input
 * @prop {string} labelClassName - Clase css del texto mostrado con el input
 * @prop {string} placeholder - Texto a mostrar mientras no haya value en el input (type="text")
 * @prop {boolean} enabled - Indicador de si se puede modificar el valor de este input
 * @prop {number} minValue - Valor mínimo del input (type="number"/itemType.number)
 * @prop {number} maxValue - Valor máximo del input (type="number"/itemType.number)
 * 
*/
class RLabelInput extends Component {

    constructor (props) {
        super(props);
        //hay que inicializar el estado porque lo alteramos desde otro componente
        this.state = {
            toggleHelpText: false,
            //value: this.props.initialValue
        }
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
        //console.log("entro ghandlechange labelinput")
    }

    showVIDProperties(item) {
        //console.log("item on inputoptions", item)
        this.props.setVIDProperties(item)
        this.props.showModal(modalTypes.VID_PROPERTIES);
    }
    showHelpText(e) {

        //console.log("entra")

        this.toggleHelpText();

    }

    toggleHelpText() {
        this.setState(prevState => ({
            toggleHelpText: !prevState.toggleHelpText,
        }))
    }

    render() {

        let labelText = this.props.labelText !== '' ?
            <label
                className={this.props.labelClassName}
                htmlFor={this.props.id}
            //onFocus={() => this.toggleHelpText()}
            //onBlur={() => this.toggleHelpText()}
            >
                {this.props.labelText}
            </label>
            :
            null;

        let input = <input
            type={this.props.type}
            name={this.props.name}
            id={this.props.id}
            className={this.props.className}
            placeholder={this.props.placeholder}
            disabled={!this.props.enabled}
            //onChange={this.props.onChange ? this.props.onChange : (e) => this.handleChange(e)}
            onChange={this.props.onChange}
            defaultValue={this.props.initialValue}
            //value={this.state.value}
            checked={this.props.checked}
            defaultChecked={this.props.defaultChecked}
            //onMouseEnter={this.props.type !== contentType.RADIO && this.props.type !== contentType.CHECKBOX ? (e) => this.showHelpText(e) : null}
            //onMouseLeave={this.props.type !== contentType.RADIO && this.props.type !== contentType.CHECKBOX ? () => this.toggleHelpText() : null}
            //onFocus={(e) => this.toggleHelpText()}
            //onBlur={() => this.toggleHelpText()}
            min={this.props.minValue}
            max={this.props.maxValue}
            maxLength={this.props.maxLength}
            onKeyDown={this.props.onKeyDown}
            onBlur={this.props.onBlur}
            required={this.props.required}
        />;

        let helpText = <RTooltip
            target={this.props.id}
            showText={this.props.helpText ? this.props.helpText : null}
            placement={this.props.tooltipPlacement ? this.props.tooltipPlacement : "top"}
        />

        let content = this.props.type === contentType.RADIO || this.props.type === contentType.CHECKBOX ?
            <div key={this.props.initialValue} className={this.props.classToDiv}>
                {input}
                {labelText}
                {helpText}
            </div>
            :
            <div key={this.props.initialValue} className={this.props.classToDiv}>
                {labelText}
                {input}
                {helpText}
            </div>

        return (
            content
        )
    }
}
//cojemos los valores de la "store" o Redux
function mapStateToProps(state) {
    return {
        //rows: state.grid.rows,
        localStorage: state.grid.localStorage,
        //activeInput: state.grid.activeInput
    };
}
// export default connect(mapStateToProps, null)(RLabelInput);//esto es con redux
export default RLabelInput;