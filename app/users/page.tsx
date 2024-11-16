import { NextPage } from 'next';
import { createClient } from '@/utils/supabase/server';
import SingleUser from '@/components/SingleUser';

const UserPage: NextPage = async () => {
  const supabase = await createClient();
  const { data: users } = await supabase.from('Users').select();

  // console.log(person);

  return (
    <section>
      <h1>Users</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      {users?.map((user) => {
        return <SingleUser user={user} key={user.id} />;
      })}
    </section>
  );
};

export default UserPage;
