import './App.css';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';
import ProfilePhoto from './Components/Profile/ProfilePhoto';

function App() {
  return (
    <container className='main'>

    <div className="App">
    <ProfilePhoto />
    <div className='nadress'>

      <FullName className="name"/>
      <Address className="address"/>
    </div>
    </div>
    </container>
  );
}

export default App;
