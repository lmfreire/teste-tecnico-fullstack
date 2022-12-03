import "./App.css";
import { Toaster } from "react-hot-toast";
import UserProvider from "./contexts/UserContexts";
import RoutesMain from "./routes";
import ContactProvider from "./contexts/ContactContext";

function App() {
  return (
    <UserProvider>
      <ContactProvider>
        <div className="App">
          <header className="App-header">
            <RoutesMain />
            <div>
              <Toaster />
            </div>
          </header>
        </div>
      </ContactProvider>
    </UserProvider>
  );
}

export default App;
