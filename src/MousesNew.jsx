export function MousesNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMouse(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Mouse</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Brand: <input name="name" type="text" />
        </div>
        <div>
          Model: <input name="model" type="text" />
        </div>
        <div>
          DPI: <input name="dpi" type="text" />
        </div>
        <button type="submit">Create mouse</button>
      </form>
    </div>
  );
}