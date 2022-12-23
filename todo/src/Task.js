const Task= (props) => {
    return ( 
        <div className="task">
            <h1>{props.desc}</h1>
            <p>{props.due}</p>
        </div>
     );
}
