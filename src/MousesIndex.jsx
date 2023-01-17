export function MousesIndex(props) {
  return (
    <div>
      <h1>All mice</h1>
      {props.mouses.map((mouse) => (
        <div key={mouse.id}>
          <h2><strong>Brand: </strong>{mouse.brand}</h2>
          <h2><strong>Model: </strong>{mouse.model}</h2>
          <p><strong>DPI: </strong>{mouse.dpi}</p>
          <button onClick={() => props.onShowMouse(mouse)}>More details</button>
        </div>
      ))}
    </div>
  );
}