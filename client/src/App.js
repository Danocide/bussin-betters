import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Home from './pages/Home';
// import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
// import Signup from './pages/Signup';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <>
      <Navbar />
      <Routes>
      <Route
          exact
          path="/"
          element={<Home />}
        />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" component={Signup} /> */}
      </Routes>
      <Footer />
    </>
    </ApolloProvider>
  );
}

export default App;