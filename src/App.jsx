import { MainPage } from "./Pages/Home/style";
import Header from "./Pages/Home/Header";
import Saldacoes from "./components/Main/Description";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Head } from "./Pages/Home/Header/style";

function App() {
  return (
    <MainPage>
      <Header>
        <Head />
      </Header>
      <Saldacoes />
      <Project id="project" />
      <About id="about" />
      <Contact id="contact" />
    </MainPage>
  );
}

export default App;
