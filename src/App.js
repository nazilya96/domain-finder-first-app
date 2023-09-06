import { BrowserRouter } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Routing from './components/Layout/Routing'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Layout>
      <Routing />
      
   
    </Layout>
      </BrowserRouter>

    </div>
  );
}

export default App;
