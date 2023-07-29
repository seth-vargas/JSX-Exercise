const App = () => {
    return (
        <div>
            <Person name="Seth" age={22}/>
            <Person name="Bowie" age={18}/>
            <Person name="Christopher" age={0}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))