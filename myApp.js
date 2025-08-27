app.get('/api/:date?',(req,res)=>{
    let datestring= req.params.date;
    let time;
    if(!isNaN (Number(datestring) )){
        time= new Date(parseInt(datestring));
        }
    else if(!datestring){
        time=new Date();
       
    }
    else{
        time= new Date(datestring);
        
    }
    if(isNaN(time.getTime())){
         return res.json({"error" : "\"invalid Date\""});
    }
    return res.json({"unix": time.getTime(), "utc": time.toUTCString() });
    
});