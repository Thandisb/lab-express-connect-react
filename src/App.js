import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Logs from './components/Logs/Logs'
import Log from './components/Log/Log'
import EditForm from './components/Editform/EditForm'
import Nav from './components/Nav/Nav'
import LogForm from './components/LogForm/LogForm'


function App() {
  return <div>

   <Router>
    <Nav />
  <Routes>
      <Route path="/logs" element={ <Logs />} />
      <Route path="/logs/new" element={ <LogForm />} />
      <Route path="/logs/:index" element={ <Log />} />
      <Route path="/logs/:index/edit" element={ <EditForm />} />
    </Routes>
   </Router>

  </div>;
}

export default App;
