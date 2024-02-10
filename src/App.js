
import { createContext, useState } from 'react';
import './App.css';
import AdminLayout from './Components/Pages/Admin/Layout/AdminLayout';
import { BrowserRouter , Routes, Route, useParams} from 'react-router-dom';
import ParticipantLayout from './Components/Pages/Participant/ParticipantLayout';
import JudgeLayout from './Components/Pages/Judge/JudgeLayout';
import AuthenticatedLayout from './Components/Pages/Authenticated/AuthenticatedLayout';
import Home from './Components/Pages/Home/Home';

import EventCards from "./Components/Pages/Admin/Pages/EventsCards"
import EventDetails from './Components/Pages/Admin/Pages/EventDetails';
import Events from './Components/Pages/Participant/Events';
import EventInfo from './Components/Pages/Participant/EventInfo';
import EventDetailsPlus from './Components/Pages/Participant/EventDetailsPlus';


export const Context = createContext()



function App() {

  let {cardId} = useParams()
  
  
  const [auth ,setAuth] = useState({
    isAdmin:1,
    isJudge:1,
    isParticipant:1,
    isCompany:1
  })

  const { isAdmin,isJudge,isParticipant , isCompany } = auth

  const isAuthenticated = auth && (isAdmin || isJudge || isParticipant || isCompany);

  
  
  return (
    <BrowserRouter>
      <Context.Provider value={[auth,setAuth]}>
        <Routes>
          {/* Default Route */}
          <Route>
            <Route path="/" element={<Home />}/>
          </Route>


            {/* Admin routes */}
          {isAdmin && (
            <Route element={<AdminLayout />} path="/admin">
                <Route element={<EventCards />} path='events' />
                <Route element={<EventDetails />} path='event/:cardId' />

            </Route>
          )}

          {isParticipant && (
            <Route element={<ParticipantLayout />} path="/participant">
                <Route element={<Events />} path="events" />
                <Route element={<EventInfo />} path="event/:cardId" />
                <Route element={<EventDetailsPlus />} path="event/details/:cardId" />
            </Route>
          )}

          {isJudge && (
            <Route element={<JudgeLayout/>} path="/judge">

            </Route>
          )}

          {isAuthenticated && (
            <Route element={<AuthenticatedLayout />} path='/authenticated'>
              <Route>

              </Route>
            </Route>
          )}
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
