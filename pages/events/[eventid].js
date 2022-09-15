import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';

const EventDetailPage = () => {
  const router = useRouter();
  const { eventid } = router.query;

  const [event, setEvent] = useState({});

  useEffect(() => {
    const data = getEventById(eventid);
    setEvent(data);
  }, [eventid]);

  if (!event) {
    return <p>No event found!</p>;
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
