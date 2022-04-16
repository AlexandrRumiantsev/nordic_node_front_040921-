
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

import './App.css';

import {Main, Chats, Catalog, Login, ItemGood, Basket} from "./Pages"
import MenuHeader from "./Components/Menu"

const App = () => {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <MenuHeader />
          </header>
          <main>
          <Routes>
            <Route path="/" element={Main()}></Route>
            <Route path="/catalog" element={Catalog()}></Route>
            <Route path="/login" element={Login()}></Route>
            <Route path="/chats" element={Chats}></Route>
            <Route path="/basket" element={ <Basket /> }></Route>
            <Route path="/catalog/:id" element={ <ItemGood /> } />
          </Routes>
          </main>
        </div>
      </Router>
  )
}

export default App;
