import "./App.css";
import Header from "./components/header";
import RepoList from "./components/repoList";
import { useEffect, useState } from "react";
import RepoCard from "./components/repoCard";
import { useParams } from "react-router-dom";

function App() {
  const [repo, setRepo] = useState(null);

  const [err, setErr] = useState([]);

  let { organisation, name } = useParams();
  console.log(organisation, name);
  console.log(`https://api.github.com/repos/${organisation}/${name}`);
  useEffect(() => {
    async function fetchRepo() {
      return fetch(`https://api.github.com/repos/${organisation}/${name}`, {
        header: {
          Authorization: "Bearer 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",
        },
      })
        .then((res) => res.json())
        .then((res) => setRepo(res))
        .catch((err) => setErr(err));
    }
    fetchRepo();
  }, [organisation, name]);

  if (!repo) return <div>Loading</div>;
  return (
    <>
      <Header />
      <main>
        <RepoCard card={repo} />
      </main>
    </>
  );
}

export default App;
