import RepoCard from "../repoCard";

function RepoList(props) {
  return (
    <ul className="repo-cards">
      {props.data.map((card) => {
        return <RepoCard card={card} />;
      })}
    </ul>
  );
}
export default RepoList;
