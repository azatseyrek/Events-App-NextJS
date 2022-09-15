import {useRouter} from 'next/router';

const FilteredEvents = () => {
  const router = useRouter();
  console.log(router);

  console.log(router);

  return <div>filteredEvents</div>;
};

export default FilteredEvents;
