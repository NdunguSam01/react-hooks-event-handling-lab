const Keypad = () => 
{
    const passwordChange=()=>
    {
        console.log("Entering password...")
    }
    return (
        <div>
            <input type="password" name="password" id="password" onChange={passwordChange}/>
        </div>
    )
}
 
export default Keypad;