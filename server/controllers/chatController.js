const { app } = require('../server')



app.ws('/chat', (ws, req) => {
    ws.send('connetion success');
    ws.on('message', () => {

    })
})
