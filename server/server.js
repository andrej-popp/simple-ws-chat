const express = require('express')
export const app = express()
const wss = require('express-ws')(app)
const aWss = WSServer.getWss()

const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
    console.log('Подключение успещно ', req)
    ws.send('Подключение успещно')
    ws.on('message', (msg) => {
        console.log(`Получено ${msg}`)
    })
})


app.listen(PORT, () => console.log(`server start on PORT ${PORT}`))
