const TotalPrice = (props) =>{
    return <h2>El precio total es: {
        props.price + props.price * 0.21 }</h2>
}
export default TotalPrice