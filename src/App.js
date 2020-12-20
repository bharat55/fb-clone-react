
import './App.css';
import Header from './Header';
import SideBar from './SideBar'
import Feed from './Feed';
import Widgets from './Widgets';
import LogIn from './LogIn';
function App() {
  let user = null;
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
