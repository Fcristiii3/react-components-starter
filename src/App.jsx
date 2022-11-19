import "./App.css";
import Header from "./components/header";
import Search from "./components/search";
import RepoList from "./components/repoList";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const [querry, setQuerry] = useState("stars:>10000");

  const [err, setErr] = useState([]);

  useEffect(() => {
    async function fetchRepo() {
      return fetch("https://api.github.com/search/repositories?q=" + querry, {
        header: {
          Authorization: "Bearer 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",
        },
      })
        .then((res) => res.json())
        .then((res) => setList(res.items))
        .catch((err) => setErr(err));
      console.log(err);
    }
    fetchRepo();
  }, [querry]);

  function setNewQuerry(newQuerry) {
    setQuerry(newQuerry ? newQuerry : "stars:>10000");
  }

  return (
    <>
      <Header />
      <main>
        <Search setQuerry={setNewQuerry} />
        {list.length === 0 ? <span>Loading</span> : <RepoList data={list} />}
      </main>
    </>
  );
}

export default App;
