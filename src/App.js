import './App.css';
import Home from './pages/home'

function App() {
  return (
    <div className="super-parent-app-con" style={style}>
      <Home />
    </div>
  );
}

const style = {
  maxWidth: "1200px", 
  margin: 'auto',
  border: 'solid 1px grey',
  borderRadius: '5px',
  padding: '20px',
  marginTop: '20px',
}

export default App;
