export function MousesShow(props) {
  return (
    <div>
      <h1>Mouse information</h1>
      <p>Name: {props.mouse.brand}</p>
      <p>Url: {props.mouse.model}</p>
      <p>Width: {props.mouse.dpi}</p>
    </div>
  );
}