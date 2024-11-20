import { NextPage } from 'next';
import { Tables } from '@/supabase';

interface SinglePersonProps {
  person: Tables<'People'>;
}

const SinglePerson: NextPage<SinglePersonProps> = async ({ person }) => {
  return (
    <section className="bg-slate-600 w-72 h-40 rounded-md">
      <img
        className="float-left w-24 h-24 mr-2 mb-2 rounded-tl-md"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmVq-OmHL5H_5P8b1k306pFddOe3049-il2A&s"
      />
      <div className="mt-1">
        <h1>Name {person?.fullName}</h1>
        <h2>DOB: {person?.DOB}</h2>
        <div>Jobs: {person?.occupations?.join(' - ')}</div>
      </div>
    </section>
  );
};

export default SinglePerson;
