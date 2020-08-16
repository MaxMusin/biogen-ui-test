import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

// => Pages
import HomePage from './pages/Home'
import EventsPage from './pages/Events'
import ClinicalDataPage from './pages/ClinicalData'
import TherapiesPage from './pages/Therapies'
import PatientSupportPage from './pages/PatientSupport'

// => Components
import Layout from './components/layout/Layout'

const App = () => (
  <Router>
    <Layout>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={HomePage} />
              <Route path="/events" component={EventsPage} />
              <Route path="/clinical-data" component={ClinicalDataPage} />
              <Route path="/therapies" component={TherapiesPage} />
              <Route path="/patient-support" component={PatientSupportPage} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Layout>
  </Router>
)

export default App
