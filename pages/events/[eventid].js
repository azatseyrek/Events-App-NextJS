import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import { getEventById, getFeaturedEvents } from '../../helper/api-util';

const EventDetailPage = (props) => {
  const { event } = props;
  // traditional way to get data from server
  // const router = useRouter();
  // const { eventid } = router.query;

  // const [event, setEvent] = useState({});

  // useEffect(() => {
  //   const data = getEventById(eventid);
  //   setEvent(data);
  // }, [eventid]);

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        title={event.title}
        image={event.image}
        address={event.location}
        date={event.date}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;

// ssg with dynamic params
export async function getStaticProps(context) {
  const eventId = context.params.eventid;
  const event = await getEventById(eventId);

  console.log(context);

  return {
    props: {
      event
    },
    revalidate: 1800
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((e) => ({ params: { eventid: e.id } }));

  return {
    paths,
    fallback: 'blocking' // false: 404 page, true: loading page, blocking: loading page
    // fallback: true 404 page will be shown / fallback: false 404 page will not be shown / fallback: 'blocking' 404 page will be shown and then the page will be generated in the background
  };
}
