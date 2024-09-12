import {useState} from 'react';

function CounterButton(props) {
    const [counter, setCounter] = useState(props.start);
    return (
        <div>
            <h2> My Counter is {counter}  </h2>
            <button type="button" onClick={() => setCounter(counter+props.steps)}>
                Add {props.steps}
            </button>    
        </div>
    );
}

export default CounterButton;