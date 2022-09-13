/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const RTooltip = (props) => {
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        props.showText !== null ?
            <Tooltip
                placement={props.placement}
                isOpen={tooltipOpen}
                target={props.target}
                toggle={toggle}
                className="prueba"
                arrowClassName="tooltip-arrow"
                innerClassName="tooltip-content"
            >
                {props.showText}
            </Tooltip> :
            null
    );
}

export default RTooltip;