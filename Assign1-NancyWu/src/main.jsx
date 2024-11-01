import { StrictMode } from 'react'; // import StrictMode from React to enable additional checks and warnings during development
import { createRoot } from 'react-dom/client'; // import createRoot from React DOM to create the root component
import App from './App.jsx' ; // import the main App component that serves as the entry point 
import './index.css'; // import global CSS styles 

// select the id ('root') from index.html and render it 
// StrictMode to enable React's development checks and highlight potential issues
// add App component with all the child compoenent and data storage.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
