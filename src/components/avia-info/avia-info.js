import AviaTransfers from '../avia-transfers';
import Tabs from '../tabs';
import ListCard from '../list-card';
import ShowMore from '../show-more';

import classes from './avia-info.module.scss';

const AviaInfo = () => {
  return (
    <div className={classes.avia__info}>
      <AviaTransfers />
      <div>
        <Tabs />
        <ListCard />
        <ShowMore />
      </div>
    </div>
  );
};

export default AviaInfo;
