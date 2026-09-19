import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";

import Home from "./pages/Home";

function App() {
  return (
    <>
      <LoadingScreen />

      <ScrollProgress />

      <Navbar />

      <main>
        <Home />
      </main>
    </>
  );
}

export default App;