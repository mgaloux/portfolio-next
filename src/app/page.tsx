import Headpage from "./components/Headpage";
import SelectedProjects from "./components/SelectedProjects";
import TechnoBadges from "./components/TechnoBadges";
import Introduction from "./components/Introduction";

export default function Home() {
  return (
    <div id="home">
      <div className="w-[100vw] px-[15%]">
        <Headpage />
        <SelectedProjects />
        <TechnoBadges />
        <Introduction />
      </div>
    </div>
  );
}
