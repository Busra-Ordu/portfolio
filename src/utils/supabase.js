import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://iujkesrscxvzmudduzas.supabase.co', 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1amtlc3JzY3h2em11ZGR1emFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU1MTUyMTksImV4cCI6MjAzMTA5MTIxOX0.CKhlN_CKc-AEjVK0AlHUARLL3YjI1dKwQ1wLiVgPMdY')


export default supabase







