import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Discount from "./pages/discount/Discount";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./styles.css";
import Carousel from "./components/carousel/Carousel";
import Form from "./components/form/Form";
import Navig from "./components/navigation/Nav";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Navig />
      <Form />
      {/* <Discount /> */}
      <Footer />
    </div>
  );
}
