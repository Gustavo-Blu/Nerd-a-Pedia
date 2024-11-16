import { NextPage } from 'next';
import { Tables } from '@/supabase';

interface SingleUserProps {
  user: Tables<'Users'>;
}

const SingleUser: NextPage<SingleUserProps> = async ({ user }) => {
  return (
    <section>
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
    </section>
  );
};

export default SingleUser;
