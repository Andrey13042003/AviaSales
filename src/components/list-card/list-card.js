import Card from '../card';

import classes from './list-card.module.scss';

const ListCard = () => {
  const count = ['first', 'second', 'third', 'fourth', 'fifth'];
  const cards = count.map((item) => <Card key={item} />);

  return <ul className={classes['list-card']}>{cards}</ul>;
};

export default ListCard;
