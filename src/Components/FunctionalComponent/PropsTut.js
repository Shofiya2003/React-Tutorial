function PropsTut(prop){
    prop.greeting();
    return(
        <div style={{ backgroundColor:"skyblue", margin:10}}>
            <h1>Hello {prop.info}</h1>
            <h2>Email: {prop.email}</h2>
            <p>Info: {prop.other.mobile} {prop.other.address}</p>
        </div>
    )
}

export default PropsTut