import Home from "./routes/home/home.page.jsx"

import {Routes, Route, Outlet} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import SignIn from "./routes/sign-in/sign-in.component.jsx";

const Hola = () => {
  return (
    <h1>
      Holaaa
    </h1>
  )
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/shop" element={<Hola/>}></Route>
        <Route path="/signIn" element={<SignIn/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
