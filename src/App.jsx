import React from "react";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AppRoutes from "./routes/routes";

const App = () => {
  return (
    <>
      <Header />

      <AppRoutes />

      <Footer />
    </>
  );
};

export default App;
