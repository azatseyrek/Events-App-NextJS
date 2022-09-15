/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import AddressIcon from '../icons/AddressIcon';
import ArrowRightIcon from '../icons/ArrowRight-icon';
import DateIcon from '../icons/DateIcon';
import Button from '../ui/button';

import classes from './EventItem.module.css';

const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const formatedAdress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAdress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
