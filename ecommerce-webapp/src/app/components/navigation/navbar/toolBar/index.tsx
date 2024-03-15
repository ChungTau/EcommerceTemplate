import Button from "./Button";
import Logo from "./Logo";
import SearchInput from "./SearchInput";

const Toolbar = ({ toggle }: { toggle: () => void }) => {
  return (
    <>
      <div className="w-full h-16">
        <div className=" w-full h-full">
          <div className="flex w-full px-4 justify-between items-center h-full">
            <Logo />
            
                <SearchInput/>
                <button
                  type="button"
                  className="inline-flex justify-items-end items-center md:hidden"
                  
                  onClick={toggle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                    />
                  </svg>
                 
                </button>
                <div 
                  className="hidden md:flex"
                >
                  <Button />
                </div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
