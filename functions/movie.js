const { ObjectId } = require("mongodb");
newObjectId1 = new ObjectId()
newObjectId2 = new ObjectId()
newObjectId3 = new ObjectId()

const movie= [{
    "id":newObjectId1,
    "Rank":1,
    "Movie":"February: Toy Story 5",
    "Release": "2023-02",
    "Distributor": "Walt Disney Pictures",
    "Genre": "Entertainment",
    "MPAA": "PG-13",
    "Gross_Sales":  120908065,
    "Tickets_Sold":14863440
},
{
    "id":newObjectId2,
    "Rank":2,
    "Movie":"The Lego Movie",
    "Release": "2014-02-06T18:30:00.000+00:00",
    "Distributor": "Warner Bros",
    "Genre": "Adventure",
    "MPAA": "PG",
    "Gross_Sales":  248303720,
    "Tickets_Sold":30429377

},
{
    "id": newObjectId3,
    "Rank":3,
    "Movie": "Mr. Peabody & Sherman",
    "Release_Date":"2014-03-06T18:30:00.000+00:00",
    "Distributor":"20th Century Fox",
    "Genre":"Adventure",
    "MPAA":"PG",
    "Gross_Sales": 94479448,
    "Tickets_Sold":11578363
}
];
module.exports = movie;

