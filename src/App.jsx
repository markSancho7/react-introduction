import SayHello from "./components/SayHello";
import CalculateCircleArea from "./components/CalculateCircleArea";
import CalculateSquareArea from "./components/CalculateSquareArea";
import CalculateTriangleArea from "./components/CalculateTriangleArea";


const App = () => {
	
	return <>
	<SayHello name="pedro"/>
	<CalculateSquareArea side= {4}/>
	<CalculateTriangleArea base= {5} heigth={4}/>
	<CalculateCircleArea radio = {10}/>
	</> 
};

export default App;
