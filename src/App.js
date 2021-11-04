import React, {useState, useEffect} from 'react'
import Welcome from './Components/Welcome/Welcome'
import Onboarding from './Components/Onboarding/Onboarding'
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Login from './Components/Authentication/Login'
import CreateAccount from './Components/Authentication/CreateAccount'
import Homepage from './Components/Pages/HomePage'
import Airtime from './Components/Pages/Airtime'
import Data from './Components/Pages/Data'
import Cable from './Components/Pages/Cable'
import Electricity from './Components/Pages/Electricity'
import AddCard from './Components/Pages/AddCard'
import Contact from './Components/Pages/Contact'
import Navbar from './Components/Sidebar/Navbar'
import SuccessfulTransaction from './Components/Pages/SuccessfulTransaction'
import { AuthProvider } from './context/AuthContext'
// import { AuthProvider } from './context/AuthContext'

function App() {

  const [user, setUser] = useState();

  const [hasAccount, setHasAccount] = useState("");
  return (
    // <AuthProvider>
    <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Onboarding} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={CreateAccount} />
            {/* <Navbar > */}
              <Route path="/home" component={Homepage} />
              <Route path="/airtime" component={Airtime} />
              <Route path="/data" component={Data} />
              <Route path="/cable" component={Cable} />
              <Route path="/electricity" component={Electricity} />
              <Route path="/addcard" component={AddCard} />
              <Route path="/contact" component={Contact} />
              <Route path="/successfultransaction" component={SuccessfulTransaction} />
            {/* </Navbar> */}
          </Switch>
      </BrowserRouter>
    // </AuthProvider>
  
  )
}

export default App
