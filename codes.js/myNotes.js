//FIND ALL FAVORITE DESTINATIONS  (models folder)
//  db.userdestination.findAll()
//     .then(destinations=>{
//         console.log(destinations);
//     });

//FIND ALL USERS    
// db.user.findAll()
//     .then(users=>{
//         console.log(users);
//     });

//ADDING A DESTINATION TO A USER
// db.user.findOrCreate({
//     where:{
//         name:''
//     }
// })
// .then(([user,created])=>{
//     db.destinations.findOrCreate({
//         where: {'}
//     })
//     .then(([destinations,created])=>{
//         //finally associates the destinations with the user
//         user.addDestinations(destination)
//         .then(createdRelation=>{
//             console.log("createdRelation:", createdRelation)
//             console.log(`${destinations.destinationsName} added to ${user.name}`)
//         })
//     })
// })

//REMOVING A DESTINATION FROM FAVORITES:
// db.destinations.destroy({
//     where: {:''}
// })
// .then(numRowsDeleted=>{
//     console.log(numRowsDeleted)
// })

//FIND OUT HOW MANY FAVORITE DESTINATIONS A USER HAS
// db.user.findByPk(2)
// .then(foundUser=>{
//     foundUser.getDestinations()
//     .then(foundDestinations=>{
//         console.log(`${foundDestinations.length} ${foundUser.name}`)
//     })
// })
// .catch(err=>{
//     console.log(err)
// })

// Installed Amadeus
// npm i install amadeus --save
