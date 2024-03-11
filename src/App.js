import React from 'react';
import './App.css'; // Import your existing styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Home from './Home';
import SignIn from './Component/SignIn'; // Update import path for SignIn
import RegisterForm from './Component/RegisterForm'; // Update import path for RegisterForm
import TokenGeneration from './TokenGeneration';
import TokenRedemption from './TokenRedemption';
import WasteReporting from './WasteReporting';
import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('Home');
  const [currentImage, setCurrentImage] = React.useState(1);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 3) + 1);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'TokenRedemption':
        return <TokenRedemption />;
      case 'WasteReporting':
        return <WasteReporting />;
      default:
        return <TokenGeneration />;
    }
  };

  const handleLinkClick = (e, page) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: `url(${currentImage === 1 ? image1 : currentImage === 2 ? image2 : image3})`,
        }}
      >
        <header>
          <nav className="horizontal-menu">
            <ul>
              <li><a href="/" onClick={(e) => handleLinkClick(e, 'Home')}>Home</a></li>
              <li><a href="/token-generation" onClick={(e) => handleLinkClick(e, 'TokenGeneration')}>Token Generation</a></li>
              <li><a href="/token-redemption" onClick={(e) => handleLinkClick(e, 'TokenRedemption')}>Token Redemption</a></li>
              <li><a href="/waste-reporting" onClick={(e) => handleLinkClick(e, 'WasteReporting')}>Waste Reporting</a></li>
              <li><a href="/signin">Sign In</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes> {/* Wrap Routes around your Route components */}
            <Route exact path="/" element={<Home />} />
            <Route path="/token-generation" element={<TokenGeneration />} />
            <Route path="/token-redemption" element={<TokenRedemption />} />
            <Route path="/waste-reporting" element={<WasteReporting />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<RegisterForm />} /> {/* Include the RegisterForm component */}
          </Routes>
        </main>
        <footer>
          <p>&copy; 2023 Waste Collection Platform</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
