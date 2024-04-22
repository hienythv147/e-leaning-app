import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@routes";
import { Footer, Header, SideBarLeft } from "@components";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-row">
        <div className="flex w-1/12">
          <SideBarLeft />
        </div>
        <div className="flex flex-col w-full px-8">
          <Routes />
        </div>
      </div>
      <Footer />
    </Router>
  );
}
