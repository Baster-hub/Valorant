import './App.css';
import Header from './compontets/Header';
import Main from './compontets/Main';
import Footer from './compontets/Footer';

const heros = [
    {
        name: "phoenix",
        country: "United Kingdom",
        abilities: ["curveball", "hot_hands", "run_it_back", "blaze"],
    },
    {
        name: "jett",
        country: "South Korea",
        abilities: ["cloudburst", "updraft", "tailwind", "blade_storm"],
    },
    {
        name: "sova",
        country: "Russia",
        abilities: ["shock_bolt", "owl_dron", "recon_bolt", "hunter’s_fury"],
    },
    {
        name: "sage",
        country: "China",
        abilities: ["slow_orb", "barrier_orb", "resurrection", "healing_orb"],
    },
];
function App() {
  return (
    <div>
      <Header />
      <Main heros={heros}/>
      <Footer />
    </div>
  );
}

export default App;
