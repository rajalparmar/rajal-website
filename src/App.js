import { PageLinks } from "./components/page-links/PageLinks";
import './App.css';
import { AppRoutes } from "./components/app-routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <PageLinks />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
