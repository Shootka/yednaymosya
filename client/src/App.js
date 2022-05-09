import './App.css';
import Hero from "./components/pages/Hero/Hero";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <div className={'app'}>
      <div className={'container'}>
        <Hero/>
        <AppRoutes/>
      </div>
    </div>
  );
}

export default App;
