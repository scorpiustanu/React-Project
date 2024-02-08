import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import { useSelector } from "react-redux";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <Container>
        <center>
          <Header></Header>
          {privacy ? <PrivacyMessage /> : <DisplayCounter></DisplayCounter>}

          <Controls></Controls>
        </center>
      </Container>
    </>
  );
}

export default App;
