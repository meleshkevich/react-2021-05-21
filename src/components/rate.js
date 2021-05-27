import style from './rate.module.css';

import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate(props) {
  let rateStarItems = [];

  for (let i = 0; i < props.value; i++) {
    rateStarItems.push(<Star key={i} className={style.star} />)
  }

  return (
    <span className={style.rateBar}>
      {rateStarItems}
    </span>
  );
} 