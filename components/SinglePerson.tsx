import { NextPage } from 'next';
import { Tables } from '@/supabase';

interface SinglePersonProps {
  person: Tables<'People'>;
}

const SinglePerson: NextPage<SinglePersonProps> = async ({ person }) => {
  return (
    <section className="bg-slate-600 w-80  h-40 rounded-md">
      <img
        className="float-left w-28 h-full mr-2 rounded-l-md"
        src={person?.imageUrl}
      />
      <div className="mt-1 ml-4">
        <h1>Name: {person?.fullName}</h1>
        <h2>DOB: {person?.DOB}</h2>
        <div>Jobs: {person?.occupations?.join(' - ')}</div>
      </div>
    </section>
  );
};

export default SinglePerson;
