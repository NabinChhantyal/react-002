

function Cars(props) {
    return (
        <div classname="Cars">
            <h1> My List Of Cars </h1>
            <ul>
                {props.mycars.map((car) => <li>{car}</li>)}
            </ul>
            <table>
                {props.mycars.map((car) => <td>{car}</td>)}
            </table>
        </div>
    );
}

export default Cars;