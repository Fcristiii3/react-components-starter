function RepoCard(props) {
  return (
    <li className="repo-card">
      <span className="title">{props.card.full_name}</span>
      <span className="description">{props.card.description}</span>
      <span className="footer">
        <div>Stars:{props.card.watchers_count}</div>
        <div>Forks:{props.card.forks}</div>
      </span>
    </li>
  );
}

export default RepoCard;
