import Head from 'next/head';
import { getFeaturedEvents } from '../helper/api-util';
import EventList from '../components/events/EventList';

const HomePage = (props) => {
  const { events } = props;

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of greate events" />
      </Head>
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
