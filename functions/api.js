const express = require("express");
const movie = require("./movie");
const port = 2023;
const { ObjectId } = require("mongodb");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();
app.use(express.json());




//fetch movie data
router.get("/", (req, res) => {
  res.sendFile(__dirname + "../index.html");

});

router.get("/getMovie", async(req,res)=>{
    res.json(movie);
});


router.post("/addMovie", async(req,res)=>{
    newObjectId = new ObjectId()
    if ( !req.body.Movie ){
        res.status(404)
        res.json({error: "Movie name  is required.."})
    }
    
    const user= {
        
        id : newObjectId,
        Rank:movie.length+1,
        Movie : req.body.Movie,
        Release : req.body.Release,
        Distributor:req.body.Distributor,
        Genre:req.body.Genre,
        MPAA:req.body.MPAA,
        Gross_Sales:req.body.Gross_Sales,
        Tickets_Sold:req.body.Tickets_Sold,
        age: req.body.age

    }   
    res.send("Movie Data Added...");
    movie.push(user);
   
});

router.put("/updateMovie/:rank", async=(req,res)=>{
    newObjectId = new ObjectId()
    let id  = newObjectId
    let Rank = req.params.rank
    let Movie = req.body.Movie
    let Release = req.body.Release
    let Distributor = req.body.Distributor
    let Genre = req.body.Genre
    let MPAA = req.body.MPAA
    let Gross_Sales = req.body.Gross_Sales
    let Tickets_Sold = req.body.Tickets_Sold

    console.log(movie)
    let rankid = movie.findIndex((movie)=>{
        return (movie.Rank == Rank)       
    })

    res.send(`Successfully Updated the Rank number ${Rank}`)
    console.log(req.body)
    if (rankid >=0){
        let mov = movie[rankid]

        mov.id = id
        mov.Rank = Rank
        mov.Movie = Movie
        mov.Release = Release
        mov.Distributor=Distributor
        mov.Genre = Genre  
        mov.MPAA = MPAA
        mov.Gross_Sales=Gross_Sales
        mov.Tickets_Sold = Tickets_Sold

        res.json(mov)  
    
    }else{
        res.status(404);
        res.send();
    }
});

router.delete("/delMovie/:rank", async(req,res)=>{
        let Rank = req.params.rank;
        let rankid = movie.findIndex((movie)=>{
            return (movie.Rank == Rank)
        })
        if(rankid>=0){
            let mov = movie[rankid]
            movie.splice(rankid,1)
            res.json(mov)
        }else{
            res.status(404)
            res.send()
        }

})

app.use("/",router);
module.exports.handler = serverless(app);

