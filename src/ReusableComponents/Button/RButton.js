import React, { Component } from 'react';
import RTooltip from '../Tooltip/RTooltip';

/**
 * Componente para crear un botón html
 * @class RButton
 * @property {string} id - Identificador del botón
 * @property {string} showText - Texto que muestra el botón
 * @property {string} className - Clase css
 * @property {"button" | "submit" | "reset"} type - Tipo botón (button,submit)
 * @property {string} name - Nombre botón
 * @property {boolean} enabled - Botón activado
 * @property {string | ReadonlyArray<string> | number} value - Valor del botón
 * @property {React.MouseEventHandler<HTMLButtonElement>} onClick - Método que queremos que ejecute cuando se haga click a este botón
 * @property {iconType} iconType - Tipo de icono (iconType)
 */
export default class RButton extends Component {

    render() {


        return (
            <span>
                <button
                    className={this.props.className}
                    disabled={!this.props.enabled}
                    type={this.props.type}
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.value}
                    onClick={this.props.onClick}
                >
                    {this.props.iconType ?
                        <i className={"icon-" + this.props.iconType + " small-icon"} />
                        : null}
                    {this.props.showText}

                </button>
                {this.props.tooltipText ?
                    <RTooltip
                        target={this.props.id}
                        showText={this.props.tooltipText}
                        placement="top"
                    />
                    : null}
            </span>
        )
    }
}