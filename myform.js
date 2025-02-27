import {useState} from 'react'


function MyForm() {
    const [name, setName]  = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was :  ${name}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label> Enter Your Name: 
                <input type="text" 
                       value={name} 
                       onChange={(e) => setName(e.target.value)}>
                </input>
            </label>
            <input type="submit" />
        </form>);
}

export default MyForm;