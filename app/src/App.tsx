import React from 'react';
import './App.css';
import { Router } from './features/router/Router';
import { Layout } from './features/layout/Layout';

function App() {
  return (
    <Layout>
        Inside Layout
        <br />
        <Router></Router>
    </Layout>
  );
}

export default App;
