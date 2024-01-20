import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL ?? 'default-supabase-url',
  process.env.SUPABASE_ANON_KEY ?? 'default-supabase-anon-key'
);

export async function connectDB() {
  try {
    // Test the connection by fetching user data (replace 'users' with your actual table name)
    const { data, error } = await supabase.from('users').select('*').limit(1);

    if (error) {
      console.error('Error connecting to Supabase:', error.message);
    } else {
      console.log('Connected to Supabase');
    }
  } catch (error) {
    console.error('Error connecting to Supabase:', (error as Error).message);
  }
}

export default supabase;
