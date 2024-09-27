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
import StyleSheet from './Components/StyleSheet';
import InLine from './InLine';
import './appStyles.css';
import styles from './appStyles.module.css' 

function App() {
  return (
    <div className="App">
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      {/* <InLine/> */}
      {/* <StyleSheet primary={true}/> */}
      {/* <NameList/> */}
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
