import { NextPage } from 'next';
import { createClient } from '@/utils/supabase/server';
import SinglePerson from '@/components/SinglePerson';

const PeoplePage: NextPage = async () => {
  const supabase = await createClient();
  const { data: people } = await supabase.from('People').select();

  // console.log(person);

  return (
    <section>
      <h1>people</h1>
      <pre>{JSON.stringify(people, null, 2)}</pre>
      {people?.map((person) => {
        return <SinglePerson person={person} key={person.id} />;
      })}
    </section>
  );
};

export default PeoplePage;
