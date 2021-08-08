import React from 'react';

function Nav(props) {
    const tabs = ['Home', 'About', 'Portfolio', 'Contact', 'Resume']

    return (
        <header className="flex-row">
            <h2>
                <a href="https://dani-hartley.github.io/react-portfolio/">Dani Hartley</a>
            </h2>
            <nav className="flex-row">
                <ul className="flex-row align-item-center nav-bar">
                    {tabs.map(tab => (
                        <li className={`nav-list ${props.currentPage === tab ? 'navActive' : 'nav-list'}`} key={tab}>
                            <span data-testid={tab.toLowerCase()} onClick={() => props.handlePageChange(tab)}
                            >
                                {tab}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;