import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home.jsx';
import SignIn from './pages/signin.jsx';
import SignUp from './pages/signup.jsx';
import About from './pages/about.jsx';
import Profile from './pages/profile.jsx';
import Header from './components/header.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import CreateListing from './pages/CreateListing.jsx';
import Listing from './pages/Listing.jsx';
import Search from './pages/Search.jsx';



export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />
        

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
                   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}