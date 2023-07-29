const Person = (props) => {
    const message = props.age >= 18 ? "please go vote" : "You must be 18"
    const name = props.name.length > 8 ? props.name.slice(0, 6) : props.name
    return (
        <div>
            <p>Learn some more about {name}</p>
            <h3>{message}</h3>
        </div>
    )
}