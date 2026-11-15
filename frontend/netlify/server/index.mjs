import { Hono } from 'hono'
import { getDatabase } from '@netlify/database'

const app = new Hono()

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LIMITS = { name: 200, email: 320, subject: 300, message: 5000 }

app.get('/api', (c) => c.json({ message: 'Hello World' }))

app.post('/api/contact', async (c) => {
  let body
  try {
    body = await c.req.json()
  } catch {
    return c.json({ success: false, message: 'Invalid JSON body' }, 400)
  }

  const data = {}
  for (const field of Object.keys(LIMITS)) {
    const value = typeof body?.[field] === 'string' ? body[field].trim() : ''
    if (!value) return c.json({ success: false, message: `${field} is required` }, 400)
    if (value.length > LIMITS[field]) {
      return c.json({ success: false, message: `${field} is too long` }, 400)
    }
    data[field] = value
  }
  if (!EMAIL_RE.test(data.email)) {
    return c.json({ success: false, message: 'A valid email is required' }, 400)
  }

  try {
    const db = getDatabase()
    const [row] = await db.sql`
      INSERT INTO contacts (name, email, subject, message)
      VALUES (${data.name}, ${data.email}, ${data.subject}, ${data.message})
      RETURNING id
    `
    return c.json({ success: true, message: "Thank you! I'll get back to you soon.", id: row.id }, 201)
  } catch (err) {
    console.error('Error saving contact message:', err)
    return c.json({ success: false, message: 'Failed to save message' }, 500)
  }
})

app.notFound((c) => c.json({ success: false, message: 'Not found' }, 404))

export const config = { path: '/api/*' }

export default app
