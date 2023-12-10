import "./file.css";
import Footer from "./components/Layout/footer";
import Latestupdate from "./components/Sections/LatestUpdate";
import Peopletrust from "./components/Sections/peopletrust";
import PleasantSurroundings from "./components/Sections/PleasantSurroundings";
import PropertyGallery from "./components/Sections/PropertyGallery";
import PropertyAmenities from "./components/Sections/PropertyAmenities";
import PropertyInformation from "./components/Sections/PropertyInformation";
import HomePage from "./components/Sections/homepage";
import Header from "./components/Layout/header";

function App() {
  return (
    <body className="font-serif">
      <Header />
      <HomePage />
      <PropertyInformation />
      <PropertyAmenities />
      <PropertyGallery />
      <PleasantSurroundings />
      <Peopletrust />
      <Latestupdate />
      <Footer />
    </body>
  );
}

export default App;
