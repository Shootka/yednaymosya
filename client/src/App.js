import './App.css';
import Hero from "./components/pages/Hero/Hero";
import AppRoutes from "./components/routes/AppRoutes";
import Footer from "./components/pages/Footer/Footer";


function App() {
  return (
    <div className={'app'}>
      <div className={'bg'}>
        <Hero/>
        <AppRoutes/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
