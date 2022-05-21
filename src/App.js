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
            Project coded by Marium Bajwa,{" "}
            <a
              href="https://github.com/Mjb222/dictionary"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              open-source project on GitHub,{" "}
            </a>
            and
            <a
              href="https://legendary-kitten-36e6cf.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
