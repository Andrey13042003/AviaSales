import classes from './card.module.scss';

const Card = () => {
  return (
    <li className={classes.avia__data}>
      <div className={classes['avia__data-first']}>
        <span className={classes.price}>13400</span>
        <img src="http://pics.avs.io/200/200/UN.png" alt="avia-company" className={classes.avia__logo} />
      </div>
      <div className={classes['avia__data-second']}>
        <div className={classes.position}>
          <span className={classes.color}>MOW - HKT</span>
          <span className={classes.weight}>10:45 - 8:00</span>
        </div>
        <div className={classes.position}>
          <span className={classes.color}>В пути</span>
          <span className={classes.weight}>21:15</span>
        </div>
        <div className={classes.position}>
          <span className={classes.color}>2 пересадки</span>
          <span className={classes.weight}>HKG, JNB</span>
        </div>
      </div>
      <div className={classes['avia__data-third']}>
        <div className={classes.position}>
          <span className={classes.color}>MOW - HKT</span>
          <span className={classes.weight}>11:20 - 00:50</span>
        </div>
        <div className={classes.position}>
          <span className={classes.color}>В пути</span>
          <span className={classes.weight}>13:30</span>
        </div>
        <div className={classes.position}>
          <span className={classes.color}>2 пересадки</span>
          <span className={classes.weight}>HKG</span>
        </div>
      </div>
    </li>
  );
};

export default Card;
