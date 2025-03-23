import HomePage from "./pages/HomePage"
import './App.css';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <title>Frametale - AI-Powered Photo Products</title>
        <meta
          name="description"
          content="Frametale transforms your memories into stunning AI-designed photobooks, calendars, and cards. Create effortlessly and cherish forever. Join the waitlist for exclusive offers!"
        />
      </Helmet>
      <HomePage />
    </>
  )
}

export default App
