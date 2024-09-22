const Exercise = () => {
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return (
        <>
        {/* <h1 style={{color:"red", backgroundColor: "lightblue"}}>Header h1</h1> */}
        <h1 style={style_header}>Header h1</h1>
        <p  className="para">Paragraph</p>
        <a href="#">Link</a>
        <form>
            <legend>This is a form</legend>
            <label>Enter your name:</label>
            <input type="text"/>
            <input type="submit"></input>
        </form>
        <img src="https://www.schoolsw3.com/images/schoolsw3_logo.png"></img>
        <ul>
            <p>This is a list:</p>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ul>
        </>
    )
}
export default Exercise;