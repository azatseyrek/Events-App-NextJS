import EventItem from './EventItem';
import classes from './EventList.module.css';
const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
        />
      ))}
    </ul>
  );
};

export default EventList;
