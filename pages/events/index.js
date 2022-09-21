import { useRouter } from 'next/router';
import React from 'react';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { getAllEvents } from '../../helper/api-util';

const AllEventsPage = (props) => {
  // const events = getAllEvents();
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (month, year) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </div>
  );
};

export default AllEventsPage;

//  SSG with dynamic params
export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events
    },
    revalidate: 60 // revalidate is for re-generating the page in the background
  };
}

// //  Static path generation
// export async function getStaticPaths() {
//   const events = await getAllEvents();
//   const paths = events.map((event) => ({ params: { eventid: event.id } }));
//   return {
//     paths,
//     fallback: false
//   };
// }
