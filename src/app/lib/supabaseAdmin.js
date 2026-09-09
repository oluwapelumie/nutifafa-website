import { createClient } from "@supabase/supabase-js";

// This client uses the service role key and bypasses RLS.
// NEVER import this file into client components.
export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    }
);