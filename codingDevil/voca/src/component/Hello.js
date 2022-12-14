export default function Hello() {
    // function showText(e) {
    //     console.log(e.target.value)
    // }
    return (
        <>
        <h1>Hello</h1>
        <input type="text" onChange={ e => {
            console.log(e.target.value);
        }}/>
        </>
    )
}