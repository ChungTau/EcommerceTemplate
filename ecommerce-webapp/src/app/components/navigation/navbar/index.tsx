import Toolbar from "./toolBar";
import RedirectBar from "./redirectBar";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <div className="block w-full h-24 bg-zinc-800 fixed top-0">
      <Toolbar toggle={toggle}/>
      <div className="bg-zinc-600 w-vw h-px mx-4"></div>
      <RedirectBar/>
    </div>
  );
};

export default Navbar;
