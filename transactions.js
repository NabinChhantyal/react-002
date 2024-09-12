

function Transactions(props) {
    return (
        <div classname='Transactions'>
            <h3> My Transactions </h3> 
            <ul>
                {props.mytxns.map((t) => <li>{t}</li>)}
            </ul>
        </div>
    );
}

export default Transactions;