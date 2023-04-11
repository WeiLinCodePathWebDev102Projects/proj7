import { createClient } from '@supabase/supabase-js'

const URL = 'https://hbbzevnlhislbniabqaf.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiYnpldm5saGlzbGJuaWFicWFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExNTcyNjIsImV4cCI6MTk5NjczMzI2Mn0.NbxHFwWhxy1hOoxOWGpEnbz8-x2sYYv2tSxkqIW-YzA';


export const supabase = createClient(URL, API_KEY);