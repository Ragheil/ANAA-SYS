import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './screens/login'; // Import the Login component
import SignUp from './screens/SignUp'; // Import the SignUp component

//import Home from './screens/home';   // Import Home component (as an example)
//import Dashboard from './screens/dashboard'; // Import Dashboard component (as an example)

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            {/* Define the routes to different screens */}
            <Route path="/login" element={<Login />} /> {/* Default to Login */}
            <Route path="/signup" element={<SignUp />} /> {/* Route to Sign Up */}

          {/*  <Route path="/home" element={<Home />} />  Navigate to Home */}
          {/*  <Route path="/dashboard" element={<Dashboard />} />  Navigate to Dashboard */}
            {/* Add more routes here for other screens */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
