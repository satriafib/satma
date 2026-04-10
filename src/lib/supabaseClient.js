// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your own Supabase URL and API Key
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsa29rZ3Via2puZml2ZnhqemFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3MTk3NzksImV4cCI6MjA5MTI5NTc3OX0.uMeqsu2Mco1DP9bFO3rPiRy4ryD8rqRPfCvBsz2bD-s';
const supabaseUrl = 'https://rlkokgubkjnfivfxjzaf.supabase.co';

export const supabase = createClient(supabaseUrl, supabaseKey);