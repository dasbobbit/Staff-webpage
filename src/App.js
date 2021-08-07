import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import StaffList from './components/StaffList';


const App = () => {

  return (
    <div className="mainContainer">
      <Navbar />

      <div className="mainContainer__content">  
        <Header />
        
        <StaffList />
      </div>
    </div>
  );
}

export default App;
