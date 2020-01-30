import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import appStore from "./redux/store";
import SearchBar from "./components/Searchbar/Searchbar";
import FactList from "./components/FactList/FactList";
import FactDetails from "./components/FactDetails/FactDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <Provider store={appStore}>
      <Container className="App">
        <ToastContainer position="top-center" />
        <Container className="Main-container">
          <Row className="top-container mt-3 pb-3">
            <SearchBar />
          </Row>

          <Row className="mt-5">
            <Col 
              sm={12} 
              xs={12} 
              md={6} 
              lg={5} 
              xl={5}
              >
              <FactList />
            </Col>

            <Col
              sm={12}
              xs={12}
              md={6}
              lg={6}
              xl={6}
              className="details-container"
            >
              <FactDetails />
            </Col>
          </Row>
        </Container>
      </Container>
    </Provider>
  );
}

export default App;
