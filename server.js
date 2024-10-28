const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');

//const { Gbooks } = require('./database/books') 
app.use(cors());

const Gbooks= [
  {
      catalogId: 82,
      title: "Harry Potter and the Philosopher's Stone",
      price: 55.9,
      image: "https://tmuna.co/wp-content/uploads/2022/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%91%D7%A6%D7%91%D7%A2-%D7%A9%D7%97%D7%95%D7%A8-%D7%9C%D7%9E%D7%A9%D7%A8%D7%93-%D7%A4%D7%99%D7%9C-%D7%94%D7%96%D7%94%D7%91-%D7%A6%D7%99%D7%95%D7%A8-%D7%91%D7%A1%D7%92%D7%A0%D7%95%D7%9F-%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D-%D7%93%D7%92%D7%9D-alvtm46p2285-768x768.jpg",
      action: ["read", "update", "delete"],
      rating: 0
  },
  {
      catalogId: 1,
      title: "Harry Potter and the Chamber of Secrets",
      price: 89,
      image: "https://tmuna.co/wp-content/uploads/2022/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%91%D7%A6%D7%91%D7%A2-%D7%A9%D7%97%D7%95%D7%A8-%D7%9C%D7%9E%D7%A9%D7%A8%D7%93-%D7%A4%D7%99%D7%9C-%D7%94%D7%96%D7%94%D7%91-%D7%A6%D7%99%D7%95%D7%A8-%D7%91%D7%A1%D7%92%D7%A0%D7%95%D7%9F-%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D-%D7%93%D7%92%D7%9D-alvtm46p2285-768x768.jpg",
      action: ["read", "update", "delete"],
      rating: 0
  },
  {
      catalogId: 2,
      title: "Hary Potter and the Prisoner of Azkaban",
      price: 99,
      image: "https://tmuna.co/wp-content/uploads/2022/12/%D7%AA%D7%9E%D7%95%D7%A0%D7%94-%D7%91%D7%A6%D7%91%D7%A2-%D7%A9%D7%97%D7%95%D7%A8-%D7%9C%D7%9E%D7%A9%D7%A8%D7%93-%D7%A4%D7%99%D7%9C-%D7%94%D7%96%D7%94%D7%91-%D7%A6%D7%99%D7%95%D7%A8-%D7%91%D7%A1%D7%92%D7%A0%D7%95%D7%9F-%D7%91%D7%A2%D7%9C%D7%99-%D7%97%D7%99%D7%99%D7%9D-%D7%93%D7%92%D7%9D-alvtm46p2285-768x768.jpg",
      action: ["read", "update", "delete"],
      rating: 0
  },
 
]


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/books', (req, res) => {
  
    res.send(Gbooks)
  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})