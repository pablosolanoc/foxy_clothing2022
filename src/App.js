import Home from "./routes/home/home.page.jsx"

import {Routes, Route, Outlet} from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Authentication from "./routes/authentication/authentication.component.jsx";

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
        <Route path="/auth" element={<Authentication/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
