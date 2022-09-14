import Header from "./Header";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import Content from "./content"

function DefaultLayout() {
    return ( 
        <div className="wrapper">
           <Header />
           <div className="content">
            <Sidebar />
            <Content />
           </div>
           <Footer />

        </div>
     );
}

export default DefaultLayout;
