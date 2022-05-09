import './App.css';
import Hero from "./components/pages/Hero/Hero";
import AppRoutes from "./components/routes/AppRoutes";

function App() {
  return (
    <div className="container">
      <Hero/>
      <AppRoutes/>
    </div>
  );
}

export default App;
