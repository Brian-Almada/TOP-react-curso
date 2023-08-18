function Greeting() {
    return (
    <>
      <h1>Test Title</h1>

      <ol className= "test-list">
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
      </ol>
      <div className="container">
        <svg>
          <circle cx="75" cy="75" r="50" stroke="green" strokeWidth="2"/>
        </svg>
      </div>

      <form><input type="text" /></form>
    </>
    );
}

export default Greeting;