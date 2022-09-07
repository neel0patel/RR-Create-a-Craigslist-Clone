// Import data
import { postings } from "./postings";
// Import components
import "./App.css";
import Directory from "./Directory";
import Gallery from "./Gallery.js";
import Searchbar from "./searchBar";
import Sidebar from "./sideBar";

const App = () => {
  return (
    <div>
      <h1>Rickslist</h1>
      <div className="App"></div>
      <Searchbar />
      <Directory />
      <Sidebar />
      <Gallery postings={postings} />
    </div>
  );
};

export default App;
