
import './App.css';
import Header from './layout/Header';
import PageContent from './pages/PageContent';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './layout/Footer';

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <Header />
        <PageContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
