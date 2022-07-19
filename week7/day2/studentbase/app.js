import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { createClient } from '@supabase/supabase-js'

const app = express()
const PORT = process.env.PORT || 3000
const supabase = createClient(process.env.SUPABASE_URL, process.env.API_KEY)
console.log(supabase)

app.listen(PORT, console.log(`listening on port ${PORT}`))
