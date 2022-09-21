import { getFilteredEvents } from '../../helper/api-util';
import EventList from '../../components/events/EventList';

const FilteredEvents = (props) => {
  const { hasError, events } = props;

  if (hasError) {
    return (
      <div className="center">
        <p>Invalid filter. Please adjust your values!</p>
      </div>
    );
  }

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  if (!events || events.length === 0) {
    return <p className="center">No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default FilteredEvents;

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;

  const filteredYear = filterData[0]; // + converts string to number
  const filteredMonth = filterData[1]; // + converts string to number

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true }

      // notFound: true,
      // redirect: {
      //   destination: '/error'
      // }
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth
  });

  return {
    props: {
      hasError: false,
      events: filteredEvents
    }
  };
}
