import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Main/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className={`App`}>
        <Layout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
