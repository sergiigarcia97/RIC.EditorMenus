import classnames from 'classnames';
import React, { useState } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';

const RTab = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    const toggle = tab => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    }

    return (
        <div>
            <Nav tabs>
                {props.tabList.map((tab, index) => {
                    return <NavItem key={"navItem-" + index}>
                        <NavLink
                            key={"nav-" + index}
                            className={classnames({ active: activeTab === index })}
                            onClick={() => { toggle(index); }}
                        >
                            {tab.title}
                        </NavLink>
                    </NavItem>

                })}
            </Nav>
            <TabContent activeTab={activeTab}>
                {props.tabList.map((tab, index) => {
                    return <TabPane
                        tabId={index}
                        key={"tab-" + index}
                    >
                        {tab.content}
                    </TabPane>
                })}
            </TabContent>
        </div>
    );
}

export default RTab;