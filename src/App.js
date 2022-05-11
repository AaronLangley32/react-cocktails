import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import DrinksPage from "./pages/DrinksPage"
import NavBar from "./components/NavBar"
import Form from "./components/Form"
import CocktailPage from "./pages/CocktailPage"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
      <div className="flex justify-center my-12">
        <Form />
      </div>
      <Switch>

        <Route exact path='/drinks/:spirit' component={DrinksPage} />
        <Route exact path='/drink/:drinkId' component={CocktailPage} />
      </Switch>
    </Router>
  )
}

export default App