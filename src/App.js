import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';


function App() {
  //Set state default to Home
  const [currentPage, handlePageChange] = useState("About");
  //Render page function to switch statement
  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Contact":
        return <ContactForm />
    }
  };
  return (
    <div>
      <main>
        <Nav
          currentPage={currentPage}
          handlePagechange={handlePageChange}
        />
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default App;
