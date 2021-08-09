import React, { useState } from 'react';
import About from './components/About';
import ContactForm from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  // renderPage method uses switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <ContactForm />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <React.Fragment>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main>
      {renderPage(currentPage)}
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default App;
