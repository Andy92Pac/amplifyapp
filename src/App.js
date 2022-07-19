import logo from "./logo.svg";
import "./App.css";
import { withLDProvider } from "launchdarkly-react-client-sdk";
import HelloWorld from "./helloWorld"; //We will add this code in the next step

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <HelloWorld />
      </header>
    </div>
  );
}

export default withLDProvider({
  clientSideID: "62d6d8eb8684e41122f4dc40",
  user: {
    key: "example_user",
    name: "Example user",
    email: "User@example.com",
  },
})(App);
