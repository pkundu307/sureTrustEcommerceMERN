import Footer from "../features/footer/Footer";
import NavBar from "../features/navbar/Navbar";
import ProductList from "../features/product/components/ProductList";

function Home() {
    return ( 
        <div>
            <NavBar>
                <ProductList></ProductList>
            </NavBar>
            <Footer/>
        </div>
     );
}

export default Home;