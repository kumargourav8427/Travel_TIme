import './App.css';
import NavBar from './TravelApp/Navbar/NavBar';
import Pagignation from './TravelApp/Footer/Pagignation';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Flight from './TravelApp/pages/Flight';
import Hotel from './TravelApp/pages/Hotel';
import Fotter from './TravelApp/Footer/Fotter';
import Craousal from './TravelApp/Crauseal/Craousal';
import Section from './TravelApp/Section/Section';
import Homestay from './TravelApp/pages/Homestay';
import Trains from './TravelApp/pages/Trains';
import Buses from './TravelApp/pages/Buses';
import Cabs from './TravelApp/pages/Cabs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Flight/>}/>
          <Route path='/hotels' element={<Hotel />}></Route>
          <Route path='/trains' element={<Trains/>}></Route>
          <Route path='/buses' element={<Buses/>}></Route>
          <Route path='/cabs' element={<Cabs/>}></Route>
          <Route path='/homestays' element={<Homestay/>}></Route>
        </Routes>
      </BrowserRouter>
      <Section/>
      <Craousal/>
      <Fotter/>
      <Pagignation />
    </div>

  );
}

export default App;
