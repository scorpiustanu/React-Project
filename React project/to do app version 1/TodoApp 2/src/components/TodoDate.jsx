function TodoDate(){
    let time = new Date();
return <center>
    <h1>current time - {time.toLocaleDateString()}-{time.toLocaleTimeString()}</h1>
    </center>
}
export default TodoDate