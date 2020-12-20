
import './App.css';
import Header from './Header';
import SideBar from './SideBar'
import Feed from './Feed';
import Widgets from './Widgets';
import LogIn from './LogIn';
import { useStateValue } from "./StateProvider";
function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    < div className="app" >
      { 
        !user?
         <LogIn /> :
        <>
          <Header />
          <div className="app-body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      }
    </div >

  );
}

export default App;
