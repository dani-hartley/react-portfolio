import React from 'react';

function Home() {
    return (
        <header id="home">
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">I'm Dani Hartley.</h1>
                    <h3>I'm an Austin based <span>Web Developer</span>. Five years of leadership experience in leading large teams in operations and process improvement. 
                    I am passionate about teaching and developing others, taking on new challenges, and finding creative solutions through data-driven analysis. 
                    I believe change and adaptability are an essential part of growth. </h3>
                    <hr />
                    <ul className="social">
                        <li><a href="https://github.com/dani-hartley"><i className="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    );
}

export default Home;