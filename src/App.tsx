import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import router from './router';
import './globals.css';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider >
  )
}

export default App;
