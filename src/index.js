import app from './app'

const { PORT = 8080} = process.env

// Listen server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
