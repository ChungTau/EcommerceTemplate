import { Outlet } from "react-router-dom";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Wrapper } from "../../component/Wrapper";
import Header from "./header";
import Loader from "../../component/Loader";
import { useLoading } from "../../provider/LoadingProvider";

function MainPage() {
  const { loading } = useLoading();

  const pageVariants = {
    initial: {
      opacity: 0,
      x: -100
    },
    enter: {
      opacity: 1,
      x: 0
    },
    exit: {
      opacity: 0,
      x: 100
    }
  };

  return (
    <LayoutGroup>
      <AnimatePresence>
        {!loading ? (
          <motion.div key={"loader"}>
            <Loader/>
          </motion.div>
        ) : (
          <main>
            <Header />
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{
                type: "linear",
                duration: 0.3
              }}
              style={{paddingTop:'70px'}}
            >
              <Wrapper>
                <Outlet />
              </Wrapper>
            </motion.div>
          </main>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default MainPage;
