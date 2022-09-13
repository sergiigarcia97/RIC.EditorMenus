import React, { Component } from 'react';
import RTooltip from '../Tooltip/RTooltip';

/**
 * Componente para crear un icono html
 * @class RIcon
 * @property {string} id - Identificador del icono
 * @property {string} className - Clase css
 * @property {typedef} iconType - Tipo de icono (iconType)
 * @property {string} iconSize - Tamaño/Tipo de icono (small,medium,large y específicos(column,card-options,drop))
 * @property {React.MouseEventHandler<HTMLButtonElement>} onClick - Método que queremos que ejecute cuando se haga click a este icono
 */
export default class RIcon extends Component {
    render() {
        return (
            <div
                className={this.props.className}
                id={this.props.id}
                onClick={this.props.onClick}
            //aria-disabled={this.props.disabled}
            >
                <i
                    //id={this.props.id + "-icon"}
                    className={"icon-" + this.props.iconType + " icon-" + this.props.iconSize + " " + this.props.iconClassname}
                />
                {this.props.text ?
                    <span className={this.props.textClassname}>
                        {this.props.text}
                    </span>
                    : null}
                {this.props.tooltipText ?
                    <RTooltip
                        target={this.props.tooltipText ? this.props.id : null}
                        showText={this.props.tooltipText}
                        placement={this.props.tooltipPlacement}
                    />
                    : null}
            </div>
        )
    }
}