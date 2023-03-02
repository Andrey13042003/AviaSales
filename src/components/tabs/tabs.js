import { useSelector, useDispatch } from 'react-redux/es/exports';

import { cheap, fast } from '../store/actions';

import classes from './tabs.module.scss';

const Tabs = () => {
  const dispatch = useDispatch();
  const nameValue = useSelector((state) => state.sort.name);
  console.log(nameValue);
  return (
    <div className={classes.tabs}>
      <button
        className={classes.tabs__btn}
        onClick={() => {
          cheap(dispatch);
        }}
        autoFocus
      >
        Самый дешевый
      </button>
      <button
        className={classes.tabs__btn}
        onClick={() => {
          fast(dispatch);
        }}
      >
        Самый быстрый
      </button>
    </div>
  );
};

export default Tabs;
