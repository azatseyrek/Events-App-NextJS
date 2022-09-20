import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../dummy-data';

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
  const response = await fetch(
    'https://nextjs-data-b7dec-default-rtdb.firebaseio.com/events.json'
  )
    .then((res) => res.json())
    .then((data) => {
      const events = [];
      for (const key in data) {
        events.push({
          id: key,
          ...data[key]
        });
      }
      return {
        props: {
          events
        }
      };
    });
  return response;
}
