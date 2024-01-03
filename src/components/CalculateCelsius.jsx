const CalculateCelsius = (props) =>{
    return <h2>El cambio de grados Celsius a Fahrenheit es {
        (props.fahrenheit - 32) / 1.8}</h2>
}
export default CalculateCelsius