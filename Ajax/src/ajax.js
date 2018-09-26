const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', 'views')
app.set('view engine', 'ejs')

// app.get('/search', (req, res) => {
// res.render('../results')
// })

app.get('/search', (req, res) => {
  res.render('search')
})

app.post('/search', (req, res)=>{
  console.log(req.body)
   fs.readFile('users.json', (err, data)=> {
     if(err){
       throw (err)
      }
        const users = JSON.parse(data)

        const search_input= req.body.name;
        const user = []


          for(let i = 0; i < users.length; i++) {
          if(users[i].firstname.includes(search_input) || users[i].lastname.includes(search_input)) {
                user.push(users[i])
                console.log(users[i])

            }
            else {

                console.log("notFound")
            }
          }

          res.send({users: user})
          console.log(user);
        })
      })

//       var i=0;
//       function test(){
//
//       for(i=0;i<=5;i++){
//           return "the number is" + i;
//       }
//       }
//       function replacer(key, value) {
//          // Filtering out properties
//          if (!value || typeof value === "string" && value.includes("$")) {
//               return undefined;
//          }
//          return value;
//        }
//       function myFunction() {
//           var str = "Hello world, welcome to the universe.";
//           var n = str.includes("world");
//           document.getElementById("demo").innerHTML = n;
//       }
// //create object
// //put users in object
//
//
//
//   // Array.from(users).forEach(function(user){
//   //   const user = users.firstElementChild.textContent
//   //   if(user.toLowerCase().indexOf(term) !=-1){
//   //     users.style.display = 'block'
//   //   }else {
//   //     user.style.display='none'
//   //   }
//   // })
//
// //   res.('users', {users: data})
// // // })
// // // })
// // //
// // app.get('/', (req, res) => {
// // function getRandomInt(min, max) {
// // return Math.floor(Math.random() * (max - min)) + min
// // }
// // //
// // fs.readFile('/users.json', (err, data) => {
// // if (err) {
// // res.send(err)
// // return
// // }
// // //
// // const parsedData = JSON.parse(data)
// // const users = parsedData.users
// // const index1 = getRandomInt(0, users.length)
// // const index2 = getRandomInt(0, users.length)
// // const index3 = getRandomInt(0, users.length)
// //
// // res.send({
// // users: [
// // users[index1],
// // users[index2],
// // users[index3]
// // ]
// // } } )
// // // })
// })

const server = app.listen(3000,function () {
console.log('example: ' + server.address().port)
})
