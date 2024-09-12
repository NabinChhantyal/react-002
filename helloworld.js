
function HelloWorld(props) 
{
    return (
        <div className="HelloWorld">
        <b>Hello {props.firstname} {props.lastname} World!</b>
      </div>  
    );
}

export default HelloWorld;