import { NextPage } from 'next';
import { createClient } from '@/utils/supabase/server';
import { Tables } from '@/supabase';

type PeoplePageProps = {
  params: Promise<{ id: string }>;
};

const PeoplePage: NextPage<PeoplePageProps> = async ({ params }) => {
  const { id } = await params;

  let person: Tables<'People'> | null = null;
  const supabase = await createClient();
  const { data } = await supabase.from('People').select().eq('id', id);

  if (data == null || data?.length == 0) {
  } else {
    person = data[0];
  }

  // console.log(person);

  return (
    <section>
      <h1>{person?.fullName}</h1>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </section>
  );
};

export default PeoplePage;
