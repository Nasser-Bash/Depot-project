import MainHeader from "./mainHeader";
import Footer from "./footer";
import BackToTopButton from "../widgets/BackToTopButton";
import Loader from "../widgets/loader";

function Layout(props) {
  return (
    <>
        <Loader/>
        <MainHeader/>
        <main>
            {props.children}
        </main>
        <BackToTopButton/>
        <Footer/>
    </>
  )
}

export default Layout