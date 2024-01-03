import SayHello from "./components/SayHello";
import CalculateCircleArea from "./components/CalculateCircleArea";
import CalculateSquareArea from "./components/CalculateSquareArea";
import CalculateTriangleArea from "./components/CalculateTriangleArea";
import CalculateFahrenheit from "./components/CalculateFahrenheit";
import CalculateCelsius from "./components/CalculateCelsius";
import TotalPrice from "./components/TotalPrice";
import WriteMessage from "./components/WriteMessage";


const App = () => {
	
	return <>
	<SayHello name="pedro"/>
	<CalculateSquareArea side= {4}/>
	<CalculateTriangleArea base= {5} heigth={4}/>
	<CalculateCircleArea radio = {10}/>
	<CalculateFahrenheit celsius = {10}/>
	<CalculateCelsius fahrenheit = {20}/>
	<TotalPrice price = {10}/>
	<WriteMessage name = "Pedro" material = "Cemento" size= "40cm" note="saludos"/>
	</> 
};

export default App;
