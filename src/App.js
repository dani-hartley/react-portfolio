import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/Contact';


function App() {
  //Set state default to Home
  const [currentPage, handlePageChange] = useState("Home");
  //Render page function to switch statement
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <ContactForm />
      default: return <Home />;
    }
  };
  return (
    <div>
        <main>
            <Nav
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />

            <div>{renderPage(currentPage)}</div>

            
        </main>
    </div>
);
}

export default App;
