const Person = require('./models/person')
const mongoose = require('mongoose')

if (process.argv.length === 4) {
  console.log('password is missing')
  process.exit(1)
}

const newName = process.argv[3]
const newNumber = process.argv[4]

if (!newName || !newNumber) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person)
    })
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: newName,
    number: newNumber,
  })
  person.save().then(() => {
    console.log('new entry added!')
    mongoose.connection.close()
  })
}
