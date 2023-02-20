import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import BlogHome from './pages/BlogHome';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Foq from './pages/Foq';
import Index from './pages/Index';
import Layout from './pages/Layout';
import PortfolioItems from './pages/PortfolioItems';
import PortfolioView from './pages/PortfolioView';
import Pricing from './pages/Pricing';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="bloghome" element={<BlogHome />}></Route>
            <Route path="blogpost" element={<BlogPost />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="foq" element={<Foq />}></Route>
            <Route path="portfolioitem" element={<PortfolioItems />}></Route>
            <Route path="portfoliview" element={<PortfolioView />}></Route>
            <Route path="pricing" element={<Pricing />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;
