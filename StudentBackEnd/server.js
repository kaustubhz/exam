var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
const student=require('./student');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9080;        

var router = express.Router();              
router.get('/', function(req, res) {
    // res.json({ message: 'hooray! welcome to our api!' });   
    res.send("Welcome");
});

router.get('/students', function(req, res) {
    console.log("Inside func ",student.allStudents());
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(student.allStudents()));
});

router.get('/student/:id',function(req,res){
    console.log("ID is ",req.params.id);
    var result=student.specificStudent(req.params.id);
    console.log("Result is ",result);    
    if(result==-1)
    {
        res.send({"message":"No such record found"});
    }
    else
    {
        res.end(JSON.stringify(result));
    }
    
})

router.put('/student/:id',function(req,res){
    console.log("ID is ",req.params.id);
    var result=student.alterStudent(req.params.id,req.body.name,req.body.age);
    console.log("Result is ",result);    
    if(result==-1)
    {
        res.send({"message":"No such record found"});
    }
    else
    {
        res.end(JSON.stringify(result));
    }
    
});

app.use('/', router);


app.listen(port);

console.log('Server running at http://localhost:' + port);
console.log('Server running at http://localhost:' + port+"/students");
console.log('Server running at http://localhost:' + port+"/student/1");

