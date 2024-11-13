import { createClient } from '@/utils/supabase/server';

export default async function Users() {
  const supabase = await createClient();
  const { data: people } = await supabase.from('People').select();

  return <pre>{JSON.stringify(people, null, 2)}</pre>;
}
