// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your own Supabase URL and API Key
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
