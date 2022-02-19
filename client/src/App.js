import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
//import SidebarCategories from './components/SidebarCategories'
// import QHome from './pages/QHome'
import Auth from './utils/auth'
import Login from './components/Login'
import EditProfile from './components/EditProfile'
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import QMakeGroup from "./components/QMakeGroup";
import GroupPage from "./pages/GroupPage";
import NavBar from './components/NavBar'
import Footer from "./components/Footer";
import ProfilePage from './pages/ProfilePage'


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const userData = Auth.getProfile()
  return (
    <ApolloProvider client={client}>
    <Router>
        <NavBar userData={userData}/>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/edit' element={<EditProfile />}></Route>
        <Route path="/signUp" element={<SignUpPage/>}></Route>
        <Route path='/makeGroup' element={<QMakeGroup />}></Route>
        <Route path="group" element={<GroupPage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </Router>  
    </ApolloProvider>
  );
}

export default App;
