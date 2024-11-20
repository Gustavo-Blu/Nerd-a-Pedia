import { NextPage } from 'next';
import { createClient } from '@/utils/supabase/server';
import SinglePerson from '@/components/SinglePerson';

const PeoplePage: NextPage = async () => {
  const supabase = await createClient();
  const { data: people } = await supabase.from('People').select();

  const peopleTemp: typeof people = [
    {
      created_at: '',
      DOB: '10/07/1999',
      fullName: 'John Doe',
      id: 1,
      occupations: ['Barista', 'Nurse', 'Something else'],
      TOD: null,
    },
    {
      created_at: '',
      DOB: '08/12/1970',
      fullName: 'Jane Dore',
      id: 2,
      occupations: ['Game Developer', 'Director'],
      TOD: null,
    },
    {
      created_at: '',
      DOB: '12/03/1973',
      fullName: 'Jannet Cole',
      id: 3,
      occupations: ['Event Planner'],
      TOD: null,
    },
  ];

  // console.log(person);

  return (
    <section>
      <h1>people</h1>
      <pre>{JSON.stringify(people, null, 2)}</pre>
      <div className="flex flex-wrap gap-5 align-middle w-full">
        {peopleTemp?.map((person) => {
          return <SinglePerson person={person} key={person.id} />;
        })}
      </div>
    </section>
  );
};

export default PeoplePage;
