import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home';
import ViborgHaveservice1 from './pages/viborghaveservice1/ViborgHaveservice1';
import AboutusEdit from './pages/viborghaveservice1/AboutusEdit';

import Services from './pages/viborghaveservice2/Services';
import ServicesCreate from './pages/viborghaveservice2/ServicesCreate';
import ServicesAdmin from './pages/viborghaveservice2/ServicesAdmin';
import ServicesEdit from './pages/viborghaveservice2/ServicesEdit';



//Vejret
import Vejret from './pages/vejret/Vejret';

//News
import News from './pages/news/News';

//Elpriser
import Energidata from './pages/energidata/Energidata';

//Boardgames
import Boardgames from './pages/boardgames/Boardgames';
import BoardgamesAdmin from './pages/boardgames/BoardgameAdmin';
import BoardgamesCreate from './pages/boardgames/BoardgameCreate';
import BoardgamesEdit from './pages/boardgames/BoardgameEdit';

import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';


function App() {
    return (
      <div className="App">
  
        <BrowserRouter>
  
          <Navbar />
          {/* <Header /> */}
  
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Opgave 1 */}
            <Route path="/viborghaveservice1" element={<ViborgHaveservice1 />} />
            <Route path="/aboutusEdit" element={<AboutusEdit />} />

            <Route path="/services" element={<Services />} />
            <Route path="/servicesCreate" element={<ServicesCreate />} />
            <Route path="/servicesAdmin" element={<ServicesAdmin />} />
            <Route path="/servicesEdit/:iddd" element={<ServicesEdit />} />


            
            {/* Opgave 2 */}
            <Route path="/vejret" element={<Vejret />} />

            {/* Opgave 3 */}
            <Route path="/news" element={<News />} />

            {/* Opgave 4 */}
            <Route path="/energidata" element={<Energidata />} />

            {/* Opgave 5 */}
            <Route path="/boardgames" element={<Boardgames />} />
            <Route path="/boardgamesAdmin" element={<BoardgamesAdmin />} />
            <Route path="/boardgamesCreate" element={<BoardgamesCreate />} />
            <Route path="/boardgamesEdit/:idd" element={<BoardgamesEdit />} />

  
            <Route path="*" element={<NoMatch />} />
  
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
        
      </div>
    );
  }
  
  export default App;
  