import { NextPage } from 'next';
import { Tables } from '@/supabase';

interface SinglePersonProps {
  person: Tables<'People'>;
}

const SinglePerson: NextPage<SinglePersonProps> = async ({ person }) => {
  return (
    <section>
      <h1>{person?.fullName}</h1>
    </section>
  );
};

export default SinglePerson;
