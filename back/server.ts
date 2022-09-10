import express from 'express'

const app = express()

app.listen(process.env.NODE_LOCAL_PORT,()=>{
  console.log('my app is running on '+process.env.NODE_LOCAL_PORT)
})