// App.jsx
import Header from "./layouts/Header";
import Footer from "./layouts/footer";
import Routers from "./routes/Routers";


const App = () => {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default App;
