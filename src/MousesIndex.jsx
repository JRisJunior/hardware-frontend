export function MousesIndex(props) {
  return (
    <div>
      <h1>All mice</h1>
      {props.mouses.map((mouse) => (
        <div key={mouse.id}>
          <h2>{mouse.brand}</h2>
          <h2>{mouse.model}</h2>
          <p>{mouse.dpi}</p>
        </div>
      ))}
    </div>
  );
}