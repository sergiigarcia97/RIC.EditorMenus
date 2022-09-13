/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';

const RPopover = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <Popover
            placement={props.placement ? props.placement : "left"}
            isOpen={popoverOpen}
            target={props.target}
            toggle={toggle}
            trigger={props.trigger ? props.trigger : "legacy"} // legacy / click / focus
        >
            <PopoverHeader>{props.header}</PopoverHeader>
            <PopoverBody>{props.body}</PopoverBody>
        </Popover>
    );
}

export default RPopover;