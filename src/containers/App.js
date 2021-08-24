import './App.css';
import BodyComponent from '../components/body/BodyComponent'
import HeaderFullPage from '../components/headerFullPage/HeaderFullPage';


function App() {
  return (
    
    <div className="App">
      <HeaderFullPage></HeaderFullPage>
      <p>This example creates a full page background image. Try to resize the browser window to see how it always will cover the full screen (when scrolled to top), and that it scales nicely on all screen sizes.</p>
      <BodyComponent></BodyComponent>
    </div>
  );
}

export default App;
