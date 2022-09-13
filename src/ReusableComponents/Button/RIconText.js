import React, { Component } from 'react';
import RTooltip from '../Tooltip/RTooltip';

/**
 * Componente para crear un icono html con texto
 * @class RIconText
 * @property {string} id - Identificador del icono
 * @property {string} className - Clase css
 * @property {string} showText - Texto que muestra el icono
 * @property {typedef} iconType - Tipo de icono (iconType)
 * @property {string} iconSize - Tamaño/Tipo de icono (small,medium,large y específicos(column,card-options,drop))
 * @property {React.MouseEventHandler<HTMLButtonElement>} onClick - Método que queremos que ejecute cuando se haga click a este icono
 */
export default class RIconText extends Component {
    render() {
        let className = "";
        if (this.props.enabled === true) {
            className = this.props.className;
        }
        if (this.props.visible === true && this.props.enabled === false) {
            className = this.props.disabledClassname + " disabledIcon"
        }
        if (this.props.visible === false) {
            className = "displayNone";
        }
        return (
            <div
                //className={this.props.enabled === true ? this.props.className : this.props.visible === true ? this.props.disabledClassname + " disabledIcon" : "displayNone"}
                className={className}
                id={this.props.id}
                onClick={this.props.onClick}

            >
                {this.props.iconType ?
                    <i className={"icon-" + this.props.iconType + " icon-" + this.props.iconSize + " " + this.props.iconClassname} />
                    : null}
                <span className={this.props.showTextClassname}>{this.props.showText}</span>
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
