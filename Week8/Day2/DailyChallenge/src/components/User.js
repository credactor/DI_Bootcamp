const User = (props) => {
    return (
        <ul>
         {props.map ((item, index) => {
          return <li key={index}>{item}</li>
        })}
        </ul>
    )
}
export default User;