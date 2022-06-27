import classes from './App.module.scss';
import icon from './images/image 1.png' ;
import iconn from './images/Vector.png';
import icon3 from './images/Group.png';
import icon4 from './images/hjhjh.png'
import Input from './components/Input/Input';
import Button from './components/Input/Button/Button';


function App() {
  return (
    <div className={classes.App}>
      <div className ={classes.App__header}>
      <img src={icon} alt=""/>
      </div>
      <div className={classes.App__holder}>
        <Input/>
      <Button>Search</Button>
      </div>
      <div className={classes.App__imagess}>
        <div className={classes.App__imagess1}>
      <img src={iconn} alt=""/>
      <p>Dittosdvsdvsdvsdvsdvsdvsdv</p>
      </div>
      <div className={classes.App__imagess1}>
      <img src={icon3} alt=""/>
      <p>Dittopickachiiisdvsdvsdvsdv</p>
      </div>
      <div className={classes.App__imagess1}>
      <img src={icon4} alt=""/>
      <p>dvdsfvdsfsdfvsdfvsdvsdfvsdfvsdvsd</p>
      </div>
      </div>
    </div>
  );
}

export default App;
 