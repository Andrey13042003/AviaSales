import Transfer from '../transfer';

import classes from './avia-transfers.module.scss';

const AviaTransfers = () => {
  return (
    <div className={classes.avia__transfers}>
      <h3 className={classes.title}>Количество пересадок</h3>
      <ul className={classes['avia__transfers-list']}>{<Transfer />}</ul>
    </div>
  );
};

export default AviaTransfers;
