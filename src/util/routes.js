import { React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import MainContainer from '../components/MainContainer';
import KnowMore from '../components/KnowMore';
function routes() {
  return (
    <Router>
      <Routes>
        <Route element={<MainContainer />} path="/" exact />
        <Route element={<KnowMore/>} path="/about" />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default routes