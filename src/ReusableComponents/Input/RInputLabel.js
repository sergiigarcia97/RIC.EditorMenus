import { Component } from 'react';
import contentType from '../../common/Editor/types/contentType';
/**
 * Componente para mostrar un input html
 * @class RInputLabel
 * @memberof RInput
 * @prop {string} id - Identificador del input
 * @prop {string} name - Nombre input (usado para radios,checkbox)
 * @prop {typedef} type - Tipo input (itemType)
 * @prop {string | ReadonlyArray<string> | number} value - valor del input (se controla por estado)
 * @prop {string} className - Clase css
 * @prop {string} classToDiv - Clase css del contenedor(div) del input
 * @prop {string} labelText - Texto a mostrar con el input
 * @prop {string} labelClassName - Clase css del texto mostrado con el input
 * @prop {string} placeholder - Texto a mostrar mientras no haya value en el input (type="text"/itemType.NUMBER)
 * @prop {boolean} enabled - Indicador de si se puede modificar el valor de este input
 * @prop {number} minValue - Valor mínimo del input (type="number"/itemType.number)
 * @prop {number} maxValue - Valor máximo del input (type="number"/itemType.number)
*/
export default class RInputLabel extends Component {

    constructor (props) {
        super(props);
        //hay que inicializar el estado porque lo alteramos desde otro componente
        this.state = {}
    }

    render() {
        return (
            <div className={this.props.classToDiv}>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    id={this.props.id}
                    className={this.props.className}
                    placeholder={this.props.placeholder}
                    disabled={!this.props.enabled}
                    onChange={this.props.onChange}
                    defaultValue={this.props.initialValue}
                    value={this.state.value}
                    checked={this.props.checked}
                    defaultChecked={this.props.defaultChecked}
                //min={this.props.type === contentType.NUMBER ? this.props.minValue : null}
                //max={this.props.type === contentType.NUMBER ? this.props.maxValue : null}
                />
                {this.props.labelText !== '' ?
                    <label
                        className={this.props.labelClassName}
                        htmlFor={this.props.id}
                    >
                        {this.props.labelText}
                    </label>
                    :
                    null
                }
            </div>
        )
    }
}