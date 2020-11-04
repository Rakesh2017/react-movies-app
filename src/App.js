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
  minWidth: '800px', 
  margin: 'auto',
  padding: '20px',
  marginTop: '0',
}

export default App;
