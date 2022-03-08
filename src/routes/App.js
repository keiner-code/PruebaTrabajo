import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/home';
import Layout from '../containers/layout';
import ListRegister from '../pages/ListRegister';
import CrudRegister from '../pages/CrudRegister';
import UseInitialState from '../hooks/UseInitialState';
import AppContext from '../context/AppContext';
function App() {
  const initialstate = UseInitialState();
  return (
    <AppContext.Provider value={initialstate}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/list' element={<ListRegister/>}/>
            <Route path='/crud' element={<CrudRegister/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
}
export default App;
