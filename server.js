
const express = require('express')
const app = express()
const PORT = 3000

const footballers ={
     'collins' :  { 
         'birthName' : 'omeire',
        'age': 30,
         'birthLocation': 'oyigbo'
   },
   'divid' : {
    'birthName' : 'davido',
    'age': 32,
     'birthLocation': 'location'
   },
    'unknown':{
    'birthName' : 'unknown',
    'age': 0,
     'birthLocation': 'unknown'
   }
} 
app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:footballers', (request,response)=>{
    const footballersName = request.params.footballers.toLowerCase()

    if (footballers[footballersName]) {
        response.json(footballers[footballersName])
    }
    else{
        response.json(footballers['unknown'])
    }
})
app.listen(PORT, () => {
    console.log(`listening on $(port) go get this bitch`)
})

   



        

 



