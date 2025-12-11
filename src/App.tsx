import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="aurora-background">
        <div className="aurora-blob w-[500px] h-[500px] bg-primary rounded-full top-[-150px] left-[-150px]"></div>
        <div className="aurora-blob w-[400px] h-[400px] bg-secondary rounded-full bottom-[50px] right-[-100px]"></div>
        <div className="aurora-blob w-[300px] h-[300px] bg-action rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
      </div>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="flex flex-col w-full max-w-6xl flex-1">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/features" element={<Features />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
