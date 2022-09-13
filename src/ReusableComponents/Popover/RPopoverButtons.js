/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import RIcon from '../Button/RIcon';

const RPopoverButtons = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    const onClickAction = (action) => {
        var onClickConfirm = props.onClickConfirm;
        onClickConfirm();
        toggle();
    }

    

    return (
        <Popover
            placement={props.placement ? props.placement : "left"}
            isOpen={popoverOpen}
            target={props.target}
            toggle={toggle}
            trigger={props.trigger ? props.trigger : "legacy"} // legacy / click / focus
        >
            <PopoverHeader>{props.header}</PopoverHeader>
            <PopoverBody>
                <span>{props.confirmText}</span>
                <div className="popover-buttons-container">
                    <RIcon
                        className="button-md  button-black"
                        id="btnModalCerrar"
                        value="defaultValue"
                        iconType="cancel"
                        iconSize="medium"
                        onClick={() => toggle()}
                    />
                    <RIcon
                        className="button-md button-red"
                        id="btnModalConfirmar"
                        value="defaultValue"
                        iconType="ok"
                        iconSize="medium"
                        onClick={() => onClickAction()}
                    />
                </div>
            </PopoverBody>
        </Popover>
    );
}

export default RPopoverButtons;