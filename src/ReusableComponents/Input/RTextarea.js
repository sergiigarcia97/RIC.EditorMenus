import { Component } from "react";
import { connect } from "react-redux";
import RTooltip from "../Tooltip/RTooltip";

/**
 * Componente para mostrar un textarea html
 * @class RLabelInput
 * @memberof RInput
 * @prop {string} id - Identificador del textarea
 * @prop {string} name - Nombre textarea (usado para radios,checkbox)
 * @prop {typedef} type - Tipo textarea (itemType)
 * @prop {string | ReadonlyArray<string> | number} value - valor del textarea (se controla por estado)
 * @prop {string} className - Clase css
 * @prop {string} classToDiv - Clase css del contenedor(div) del textarea
 * @prop {string} labelText - Texto a mostrar encima del textarea
 * @prop {string} labelClassName - Clase css del texto mostrado con el textarea
 * @prop {string} placeholder - Texto a mostrar mientras no haya value en el textarea (type="text")
 * @prop {boolean} enabled - Indicador de si se puede modificar el valor de este textarea
 * 
*/
class RTextarea extends Component {

    constructor (props) {
        super(props);
        //hay que inicializar el estado porque lo alteramos desde otro componente
        this.state = {
            toggleHelpText: false,
            value: this.props.initialValue
        }
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

        let input = <textarea
            name={this.props.name}
            id={this.props.id}
            className={this.props.className}
            placeholder={this.props.placeholder}
            disabled={!this.props.enabled}
            //onChange={this.props.onChange ? this.props.onChange : (e) => this.handleChange(e)}
            onChange={this.props.onChange}
            defaultValue={this.props.initialValue}
            //value={this.state.value}
            //onMouseEnter={this.props.type !== contentType.RADIO && this.props.type !== contentType.CHECKBOX ? (e) => this.showHelpText(e) : null}
            //onMouseLeave={this.props.type !== contentType.RADIO && this.props.type !== contentType.CHECKBOX ? () => this.toggleHelpText() : null}
            //onFocus={(e) => this.toggleHelpText()}
            //onBlur={() => this.toggleHelpText()}
            maxLength={this.props.maxLength}
            onKeyDown={this.props.onKeyDown}
            onBlur={this.props.onBlur}
            required={this.props.required}
        ></textarea>;

        let helpText = <RTooltip
            target={this.props.id}
            showText={this.props.helpText ? this.props.helpText : null}
            placement={this.props.tooltipPlacement ? this.props.tooltipPlacement : "top"}
        />

        let content = <div key={this.props.initialValue} className={this.props.classToDiv}>
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
export default connect(mapStateToProps, null)(RTextarea);