const findage = require('findage')

const express = require('express')

const bodyparser = require('body-parser')

const app = express()

app.set('view engine','ejs')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/',(req,res) => {
    res.render('index',{fullage:'',monthage:'',daysage:'',hourage:'',minutesage:'',secondsage:''})
})

app.post('/getage',(req,res) => {
    let birthdate = req.body.birthday


    console.log(birthdate)

    // send this

    res.render('index',{fullage:findage.fullAge(birthdate),monthage:findage.inMonths(birthdate)
    ,daysage:findage.inDays(birthdate),hourage:findage.inHours(birthdate),minutesage:findage.inMinutes(birthdate),
     secondsage:findage.inSeconds(birthdate)})
})



app.listen(5000,() => {
    console.log("App is listening on port 5000")
})