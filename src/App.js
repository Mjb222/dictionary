import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Project coded by Marium Bajwa, open-source on Github, and hosted on
            Netlify.{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
