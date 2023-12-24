const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors');


require('./config/mongoose.config'); 

app.use(cors())
app.use(express.json({limit: '30mb'}));                          
app.use(express.urlencoded({limit: '30mb', extended: true }));   

require('./routes/image.routes')(app);


app.listen(port, () => console.log(`Listening on port: ${port}`) );
