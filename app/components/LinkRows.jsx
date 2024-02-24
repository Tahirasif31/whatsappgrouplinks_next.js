function LinkRows({ group }) {
  console.log(group);
  return (
    <div className="rows conent-header">
      <span className="cols">{group.name}</span>
      <a href={group.link} className="cols-link">
        Join Now
      </a>
    </div>
  );
}

export default LinkRows;
