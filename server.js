var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({'extended':'true'})); 			// parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 									// parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as jsonSSS
app.use('/api', router);
app.use(express.static(__dirname, '/js'));

var connection  = require('express-myconnection'); 
var mysql = require('mysql');

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/
router.use(    
    connection(mysql,{        
        host: 'localhost',
        user: 'root',
        password : 'password',
        port : 3306, //port mysql
        database:'ngbird'
    },'pool') //or single
);

app.get('/', function(req, res){
    res.sendFile(__dirname +'/app/index.html');
});

router.post('/autharize', function (req, res) {
	console.log(req.body);
    
    req.getConnection(function(err,connection){       
        var query = connection.query('SELECT user_key.password FROM ngbird.user_key where user_key.id = ?',[req.body.name],function(err,rows)
        {            
            if(err)
            {console.log("Error Selecting : %s ",err );}   
            else{
                var data = JSON.parse(JSON.stringify(rows));
                if(data[0].password == req.body.password)
                {
                    connection.query('UPDATE user_key.password SET ngbird.isloggedin=1 where user_key.id = ?',[req.body.name],function(err,rows){
                        res.json({isAuthorized: true});
                    });

                } 
                else{res.json({isAuthorized: false});}
            }    
         });         
         console.log(query.sql);
    });     
    
});

app.listen(80);
