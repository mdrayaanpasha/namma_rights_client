import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RightsList from './pages/categories'
import RightsQuestions from './pages/rightQuestions'
import Homepage from './pages/home'
import FeaturesPage from './pages/features'
import TermsPage from './pages/terms'
import AboutPage from './pages/about'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route  path='/' element={<Homepage/>}/>
        <Route  path='/categories' element={<RightsList/>}/>
        <Route path='/questions/:right' element={<RightsQuestions/>} />
        <Route path='/features' element={<FeaturesPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/terms' element={<TermsPage/>} />

      </Routes>
    </Router>
  )
}

export default App
