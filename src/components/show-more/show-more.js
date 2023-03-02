import classes from './show-more.module.scss';

const ShowMore = () => {
  return (
    <div className={classes['avia__show-more']}>
      <button className={classes['avia__show-more__btn']}>Показать еще 5 билетов!</button>
    </div>
  );
};

export default ShowMore;
