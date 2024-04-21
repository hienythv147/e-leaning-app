import { BrowserRouter as Router } from "react-router-dom";
import Routes from "@routes";
import { Footer, Header, SideBarLeft } from "@components";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex flex-row">
        <div className="flex w-1/6 bg-slate-400">
          <SideBarLeft />
        </div>
        <div className="flex flex-col w-full">
          <Routes />
        </div>
      </div>
      <Footer />
    </Router>
  );
}
