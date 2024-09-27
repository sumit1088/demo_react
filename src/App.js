import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';

function App() {
  return (
    <div className="App">
      <NameList/>
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/> */}      
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* <Greet name = 'Bruce' heroName = 'Batman'>
        <p>This is children props</p>
      </Greet>
      <Greet name = 'Mark' heroName = 'Superman'>
        <button>Action</button>
      </Greet>
      <Greet name = 'Diana' heroName = 'Wonder Women'/>
      <Welcome name = 'Bruce' heroName = 'Batman'/>
      <Welcome name = 'Mark' heroName = 'Superman'/>
      <Welcome name = 'Diana' heroName = 'Wonder Women'/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
