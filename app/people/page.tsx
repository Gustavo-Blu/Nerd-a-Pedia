import { NextPage } from 'next';
import { createClient } from '@/utils/supabase/server';
import SinglePerson from '@/components/SinglePerson';

const PeoplePage: NextPage = async () => {
  const supabase = await createClient();
  const { data: people } = await supabase.from('People').select();

  return (
    <section>
      <h1>people</h1>
      {/* <pre>{JSON.stringify(people, null, 2)}</pre> */}
      <div className="flex flex-wrap gap-5 align-middle w-full">
        {people?.map((person) => {
          return <SinglePerson person={person} key={person.id} />;
        })}
      </div>
    </section>
  );
};

export default PeoplePage;
