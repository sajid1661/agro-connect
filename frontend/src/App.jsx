import './App.css'
import Home from './pages/Home'
import CropsDetails from './pages/CropDetails'
import AddCrop from './pages/AddCrop'
import Login from './pages/Login'

import {Routes,Route} from 'react-router'
import EditCrop from './pages/EditCrop'

function App() {

  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />}  />
        <Route path='/add-crop' element={<AddCrop />} />
        <Route path='/crop-details/:cropID' element={<CropsDetails/>} />
        <Route path='/edit-crop/:cropID' element={<EditCrop />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
