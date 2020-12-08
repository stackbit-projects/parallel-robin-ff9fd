import React from 'react';
import _ from 'lodash';

import {classNames, Link, withPrefix, toStyleObj} from '../utils';
import Picture from './Picture';

export default class Header extends React.Component {
    render() {
        let page = _.get(this.props, 'page', null);
        let site = _.get(this.props, 'site', null);
        let white_header = _.get(page, 'frontmatter.white_header', null) || false;
        return (
            <header className="header">
                <nav className={classNames('nav', {'nav--light': white_header, 'nav--dark': white_header !== true})}>
                    <div className="nav__logo" data-dark={_.get(site, 'siteMetadata.logo_dark', null)}>
                        <Link to={withPrefix('/')}>
                            {(white_header || (_.get(page, 'frontmatter.template', null) === 'product')) ? (
                                <Picture {...this.props} image={_.get(site, 'siteMetadata.logo_light', null)} cssClass={'nav__logo-image'} alt={'Site logo'} />
                            ) : 
                                <Picture {...this.props} image={_.get(site, 'siteMetadata.logo_dark', null)} cssClass={'nav__logo-image'} alt={'Site logo'} />
                            }
                        </Link>
                    </div>
                    <ul className="nav__menu">
                        {_.map(_.get(site, 'siteMetadata.main_menu', null), (item, item_idx) => {
                            let section = _.get(page, 'frontmatter.section', null) || _.get(page, 'frontmatter.title', null);
                            let isActive = (_.get(item, 'title', null) === section) ? (true) : false;
                            return (<React.Fragment key={item_idx + '.1'}>
                                <li key={item_idx} className="nav__menu-item">
                                    <Link to={withPrefix(_.get(item, 'url', null))} className={classNames('nav__menu-item-link', {'nav__menu-item-link--active': isActive})}>
                                        {_.get(item, 'title', null)}
                                    </Link>
                                </li>
                            </React.Fragment>)
                        })}
                    </ul>
                    <div className="nav__right">
                        <button className="snipcart-checkout nav__button button button--transparent">
                            <span className="button__icon nav__button-icon">
                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M22.907 4.22024C23.0315 4.1993 23.1614 4.20403 23.2896 4.2384L23.2895 4.23818C23.7947 4.37362 24.0977 4.94184 23.9714 5.48253L21.6723 15.1262C21.546 15.5601 21.1671 15.8849 20.7378 15.8849H8.31003L8.86555 18.2952H19.2223C19.7531 18.2952 20.1824 18.7555 20.1824 19.3248C20.1824 19.8941 19.7531 20.3543 19.2223 20.3543H8.13351C7.67862 20.3543 7.29973 20.0295 7.19908 19.5692L3.3095 2.55908H0.960093C0.429223 2.55908 0 2.09881 0 1.52954C0 0.960271 0.429223 0.5 0.960093 0.5H4.0416C4.49648 0.5 4.87538 0.824833 4.97602 1.2851L7.8562 13.8269H20.0304L21.7767 6.45023H13.8998C13.2827 6.45023 12.7823 5.94993 12.7823 5.33277C12.7823 4.71561 13.2827 4.2153 13.8998 4.2153L22.8012 4.21533C22.8369 4.21533 22.8722 4.21699 22.907 4.22024ZM9.92751 24.4999C10.7781 24.4999 11.4678 23.7593 11.4678 22.8472C11.4678 21.9351 10.7781 21.1944 9.92751 21.1944C9.07596 21.1944 8.38623 21.9351 8.38623 22.8472C8.38623 23.7593 9.07596 24.4999 9.92751 24.4999ZM19.4244 22.8472C19.4244 23.7593 18.7346 24.4999 17.8841 24.4999C17.0325 24.4999 16.3428 23.7593 16.3428 22.8472C16.3428 21.9351 17.0325 21.1944 17.8841 21.1944C18.7346 21.1944 19.4244 21.9351 19.4244 22.8472Z" fill="white"/>
                                </svg>                      
                            </span>
                            <span className="snipcart-items-count nav__total-items button__text">0</span>
                        </button>
                        <button className="hamburger button button--transparent">
                            <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="hamburger__icon-path" fillRule="evenodd" clipRule="evenodd" d="M0 1.00049C0 0.448204 0.447715 0.000488281 1 0.000488281H23C23.5523 0.000488281 24 0.448204 24 1.00049C24 1.55277 23.5523 2.00049 23 2.00049H1C0.447716 2.00049 0 1.55277 0 1.00049ZM0 8.00049C0 7.4482 0.447715 7.00049 1 7.00049H13C13.5523 7.00049 14 7.4482 14 8.00049C14 8.55277 13.5523 9.00049 13 9.00049H1C0.447716 9.00049 0 8.55277 0 8.00049ZM1 14.0005C0.447715 14.0005 0 14.4482 0 15.0005C0 15.5528 0.447715 16.0005 1 16.0005H16C16.5523 16.0005 17 15.5528 17 15.0005C17 14.4482 16.5523 14.0005 16 14.0005H1Z" fill="white"/>
                            </svg>                            
                        </button>
                        <div className="hamburger__content hamburger__content--closed" style={toStyleObj('background-image: url(' + withPrefix(_.get(site, 'siteMetadata.hamburger_background_image', null)) + ')')}>
                            <div className="hamburger__options">
                                <button className="snipcart-checkout button button--transparent">
                                <span className="button__icon nav__button-icon">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M22.907 4.22024C23.0315 4.1993 23.1614 4.20403 23.2896 4.2384L23.2895 4.23818C23.7947 4.37362 24.0977 4.94184 23.9714 5.48253L21.6723 15.1262C21.546 15.5601 21.1671 15.8849 20.7378 15.8849H8.31003L8.86555 18.2952H19.2223C19.7531 18.2952 20.1824 18.7555 20.1824 19.3248C20.1824 19.8941 19.7531 20.3543 19.2223 20.3543H8.13351C7.67862 20.3543 7.29973 20.0295 7.19908 19.5692L3.3095 2.55908H0.960093C0.429223 2.55908 0 2.09881 0 1.52954C0 0.960271 0.429223 0.5 0.960093 0.5H4.0416C4.49648 0.5 4.87538 0.824833 4.97602 1.2851L7.8562 13.8269H20.0304L21.7767 6.45023H13.8998C13.2827 6.45023 12.7823 5.94993 12.7823 5.33277C12.7823 4.71561 13.2827 4.2153 13.8998 4.2153L22.8012 4.21533C22.8369 4.21533 22.8722 4.21699 22.907 4.22024ZM9.92751 24.4999C10.7781 24.4999 11.4678 23.7593 11.4678 22.8472C11.4678 21.9351 10.7781 21.1944 9.92751 21.1944C9.07596 21.1944 8.38623 21.9351 8.38623 22.8472C8.38623 23.7593 9.07596 24.4999 9.92751 24.4999ZM19.4244 22.8472C19.4244 23.7593 18.7346 24.4999 17.8841 24.4999C17.0325 24.4999 16.3428 23.7593 16.3428 22.8472C16.3428 21.9351 17.0325 21.1944 17.8841 21.1944C18.7346 21.1944 19.4244 21.9351 19.4244 22.8472Z" fill="white"/>
                                    </svg>                      
                                </span>
                                </button>
                                <div className="">
                                    <span className="snipcart-items-count" /> products | <span className="snipcart-total-price" />                        </div>
                                </div>
                            <button className="link snipcart-checkout hamburger__checkout">
                                Checkout
                                <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.6819 6.07886H0V7.79048H22.8139L18.2402 12.3182L19.434 13.5L26 7L19.434 0.5L18.2402 1.68182L22.6819 6.07886Z" fill="#88DD9B"/>
                                </svg>                            
                            </button>
                            <ul className="hamburger__nav">
                                {_.map(_.get(site, 'siteMetadata.main_menu', null), (item, item_idx) => {
                                    let section = _.get(page, 'frontmatter.section', null) || _.get(page, 'frontmatter.title', null);
                                    let isActive = (_.get(item, 'title', null) === section) ? (true) : false;
                                    return (<React.Fragment key={item_idx + '.1'}>
                                        <li key={item_idx} className="hamburger__nav-item">
                                            <Link to={withPrefix(_.get(item, 'url', null))} className={classNames('hamburger__nav-link', {'hamburger__nav-link--active': isActive})}>
                                                {_.get(item, 'title', null)}
                                            </Link>
                                        </li>
                                    </React.Fragment>)
                                })}
                            </ul>
                        </div>                
                    </div>
                </nav>
            </header>
        );
    }
}
