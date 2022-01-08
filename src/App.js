import React from 'react';
import SearchPage from './Component/SearchPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header';
import Footer from './Component/Footer';



function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <SearchPage />
      </main>
      <Footer />
    </>
  );
}

export default App;
