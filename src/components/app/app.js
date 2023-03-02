import logo from '../../images/Logo.svg';
import AviaInfo from '../avia-info';

import classes from './app.module.scss';

const App = () => {
  return (
    <>
      <img src={logo} alt="logo" className={classes.logo} />
      <AviaInfo />
    </>
  );
};

export default App;
