import { NextPage } from 'next';
import { createClient } from '@/utils/supabase/server';
import { Tables } from '@/supabase';

interface UserPageProps {
  params: {
    id: number;
  };
}

const UserPage: NextPage<UserPageProps> = async ({ params }) => {
  const { id } = await params;

  let user: Tables<'Users'> | null = null;
  const supabase = await createClient();
  const { data } = await supabase.from('Users').select().eq('id', id);

  if (data == null || data?.length == 0) {
  } else {
    user = data[0];
  }

  // console.log(person);

  return (
    <section>
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </section>
  );
};

export default UserPage;
