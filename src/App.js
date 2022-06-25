import classes from './App.module.scss';
import icon from './images/image 1.png' ;
import iconn from './images/Vector.png';
import Input from './components/Input/Input';
import Button from './components/Input/Button/Button';


function App() {
  return (
    <div className={classes.App}>
      <div className ={classes.App__header}>
      <img src={icon} alt=""/>
      </div>
      <div className={classes.App__holder}>
        <input type="text" id="text" name="text" value="Find pockemon" />
      <button/>
      </div>
      <img src={iconn} alt=""/>
    </div>
  );
}

export default App;
 