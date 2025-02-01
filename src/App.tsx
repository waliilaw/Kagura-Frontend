
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {

  return (
<>
      {/* <Navbar /> */}
<BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage />} />
      </Routes>
</BrowserRouter>
      {/* <Toaster /> */}
  </>);
};
export default App;
