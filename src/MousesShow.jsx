export function MousesShow(props) {
  return (
    <div>
      <h1>Mouse information</h1>
      <p>Brand: {props.mouse.brand}</p>
      <p>Model: {props.mouse.model}</p>
      <p>DPI: {props.mouse.dpi}</p>
    </div>
  );
}