import EventList from '../components/events/EventList';
import {getFeaturedEvents} from '../dummy-data';

const HomePage = () => {
  const featuredEvent = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvent} />
    </div>
  );
};

export default HomePage;
