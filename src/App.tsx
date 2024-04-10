import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@routes";
import { Footer, Header } from "@components";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes />
      <Footer />
    </Router>
  );
}
