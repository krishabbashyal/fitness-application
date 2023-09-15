import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL
const supabaseAPI = import.meta.env.VITE_SUPABASE_API_KEY



export const supabase = createClient(supabaseURL, supabaseAPI)