import logo from './logo.svg';
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './Home/Home';
import ProductView from './ProductView/ProductView';

function App() {
  return (
    <div className="App">
            <Header/>
            <Home/>

            {/* <ProductView/> */}

            <Footer/>
    </div>
  );
}

export default App;
