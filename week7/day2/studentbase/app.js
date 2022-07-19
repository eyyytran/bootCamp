import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import { createClient } from '@supabase/supabase-js'

const app = express()
const PORT = process.env.PORT || 3000
const supabase = createClient(process.env.SUPABASE_URL, process.env.API_KEY)

app.use(express.json())

app.post('/create_student', async (req, res) => {
    const { data, error } = await supabase.from('web-06-22').insert([req.body])
    if (data) {
        res.send(data)
    }
    if (error) {
        res.send(error)
    }
})

app.listen(PORT, console.log(`listening on port ${PORT}`))
