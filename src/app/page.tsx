import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Headpage from "./components/Headpage";
import SelectedProjects from "./components/SelectedProjects";
import TechnoBadges from "./components/TechnoBadges";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <div className="w-[100vw] px-[15%]">
        <Headpage />
        <SelectedProjects />
        <TechnoBadges />
              {/*<Introduction /> */}
      </div>
      <Footer />
    </div>
  );
}
