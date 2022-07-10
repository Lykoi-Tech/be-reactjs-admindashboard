import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// import Dashboard from "./components/Dashboard";
// import Login from "./components/Login";
// import Navbar from "./components/Navbar";
// import Register from "./components/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Nopage from "./pages/Nopage";
import Page from "./components/Layout/Page";
import Logout from "./pages/Logout";
import Products from "./pages/Products";
import Sewa from "./pages/Sewa";
import Cabang from "./pages/Cabang";
import Status from "./pages/Status";
import User from "./pages/User";
import Report from "./pages/Report";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route index element={<Login />} />
      <Route path="/" element={<Page />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<Products />} />
            <Route path="cabang" element={<Cabang />} />
            <Route path="sewa" element={<Sewa />} />
            <Route path="status" element={<Status />} />
            <Route path="report" element={<Report />} />
            <Route path="user" element={<User />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
    </>

);
}
export default App;
//   

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Switch>
//           {/* <Route path="/" element={<Page />}> */}
//             {/* <Route index element={<Home />} /> */}
//             {/* <Route path="product" element={<Products />} /> */}
//             {/* <Route path="user" element={<User />} />
//             <Route path="biaya" element={<Biaya />} />
//             <Route path="cabang" element={<Cabang />} />
//             <Route path="status" element={<Status />} />
//             <Route path="laporan" element={<Laporan />} /> */}
//             {/* <Route path="logout" element={<Logout />} /> */}
//           </Route>
//           {/* <Route path="/login" element={<Login />} /> */}
//           {/* <Route path="/*" element={<Nopage />} /> */}
//         </Switch>
//       </BrowserRouter>
//     </>



// eslint-disable-next-line no-lone-blocks
{/* <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Home">
        <Sidebar/>
        <Home/>
        </Route> */}