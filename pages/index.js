import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helper/api-util';

const HomePage = (props) => {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default HomePage;

//  Getting data with static generation
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents
    },
    revalidate: 30
  };
}
