const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    pic: { type: String, default: 'https://cdn-icons-png.flaticon.com/512/8/8140.png?w=1060&t=st=1678612077~exp=1678612677~hmac=bc1549f4899d700b6ec2b2155e56560a180ee197f41859e9ebac5de3ab1529e4' },
    cuisines: { type: String, required: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: {
      type: Number,
      min: [1673, 'Surely not that old?!'],
      max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref:'Comment' }]
  })
  

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
  }
  

module.exports = mongoose.model('Place', placeSchema)
