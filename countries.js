

function Countries(props) {
    return (   
        <div classname="Countries">
            <h2> My Countries </h2>
            <ul>
                {props.mycountries.map((c) => <li>{c}</li>)}
            </ul>
        </div>
    );
}

export default Countries;