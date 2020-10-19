import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink, UncontrolledTooltip, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";

import { setActiveTab } from "../../redux/actions";

//Import Images
import logo from "../../assets/images/logo.svg"
import avatar1 from "../../assets/images/users/avatar-1.jpg";

function LeftSidebarMenu(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [dropdownOpenMobile, setDropdownOpenMobile] = useState(false);


    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggle2 = () => setDropdownOpen2(!dropdownOpen2);
    const toggleMobile = () => setDropdownOpenMobile(!dropdownOpenMobile);

    const toggleTab = tab => {
        props.setActiveTab(tab)
    }

    const activeTab = props.activeTab;
    
   
    return (
        <React.Fragment>
            <div className="side-menu flex-lg-column mr-lg-1">
                {/* LOGO */}
                <div className="navbar-brand-box">
                    <Link to="/" className="logo logo-dark">
                        <span className="logo-sm">
                            <img src={logo} alt="logo" height="30" />
                        </span>
                    </Link>

                    <Link to="/" className="logo logo-light">
                        <span className="logo-sm">
                            <img src={logo} alt="logo" height="30" />
                        </span>
                    </Link>
                </div>
                {/* end navbar-brand-box  */}

                {/* Start side-menu nav */}
                <div className="flex-lg-column my-auto">
                    <Nav pills className="side-menu-nav justify-content-center" role="tablist">
                        <NavItem id="profile">
                            <NavLink id="pills-user-tab" className={classnames({ active: activeTab === 'profile' })} onClick={() => { toggleTab('profile'); }}>
                                <i className="ri-user-2-line"></i>
                            </NavLink>
                        </NavItem>
                        <UncontrolledTooltip target="profile" placement="top">
                            Profile
                        </UncontrolledTooltip>
                        <NavItem id="Chats">
                            <NavLink id="pills-chat-tab" className={classnames({ active: activeTab === 'chat' })} onClick={() => { toggleTab('chat'); }}>
                                <i className="ri-message-3-line"></i>
                            </NavLink>
                        </NavItem>
                        <UncontrolledTooltip target="Chats" placement="top">
                        Chats
                        </UncontrolledTooltip>
                        <NavItem id="Groups">
                            <NavLink id="pills-groups-tab" className={classnames({ active: activeTab === 'group' })} onClick={() => { toggleTab('group'); }}>
                                <i className="ri-group-line"></i>
                            </NavLink>
                        </NavItem>
                        <UncontrolledTooltip target="Groups" placement="top">
                        Groups
                        </UncontrolledTooltip>
                        <NavItem id="Contacts">
                            <NavLink id="pills-contacts-tab" className={classnames({ active: activeTab === 'contacts' })} onClick={() => { toggleTab('contacts'); }}>
                                <i className="ri-contacts-line"></i>
                            </NavLink>
                        </NavItem>
                        <UncontrolledTooltip target="Contacts" placement="top">
                        Contacts
                        </UncontrolledTooltip>
                        <NavItem id="Settings">
                            <NavLink id="pills-setting-tab" className={classnames({ active: activeTab === 'settings' })} onClick={() => { toggleTab('settings'); }}>
                                <i className="ri-settings-2-line"></i>
                            </NavLink>
                        </NavItem>
                        <UncontrolledTooltip target="Settings" placement="top">
                            Settings
                        </UncontrolledTooltip>
                        <Dropdown nav isOpen={dropdownOpenMobile} toggle={toggleMobile} className="profile-user-dropdown d-inline-block d-lg-none">
                            <DropdownToggle nav>
                                <img src={avatar1} alt="project-two-framework" className="profile-user rounded-circle" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { toggleTab('profile'); }}>Profile <i className="ri-profile-line float-right text-muted"></i></DropdownItem>
                                <DropdownItem onClick={() => { toggleTab('settings'); }}>Setting <i className="ri-settings-3-line float-right text-muted"></i></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/logout">Log out <i className="ri-logout-circle-r-line float-right text-muted"></i></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </div>
                {/* end side-menu nav */}

                <div className="flex-lg-column d-none d-lg-block">
                    <Nav className="side-menu-nav justify-content-center">
                        <NavItem>
                            <NavLink id="light-dark" target="_blank" href="">
                                <i className="ri-sun-line theme-mode-icon"></i>
                            </NavLink>
                            <UncontrolledTooltip target="light-dark" placement="right">
                                Dark / Light Mode
                            </UncontrolledTooltip>
                        </NavItem>
                        <Dropdown nav isOpen={dropdownOpen} className="btn-group dropup profile-user-dropdown" toggle={toggle}>
                            <DropdownToggle nav>
                            <img src={avatar1} alt="" className="profile-user rounded-circle" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={() => { toggleTab('profile'); }}>Profile <i className="ri-profile-line float-right text-muted"></i></DropdownItem>
                                <DropdownItem onClick={() => { toggleTab('settings'); }}>Setting <i className="ri-settings-3-line float-right text-muted"></i></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="/logout">Log out <i className="ri-logout-circle-r-line float-right text-muted"></i></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                </div>
                {/* Side menu user */}
            </div>
        </React.Fragment>
    );
}

const mapStatetoProps = state => {
    return {
      ...state.Layout
    };
};

export default connect(mapStatetoProps, {
    setActiveTab
})(LeftSidebarMenu);