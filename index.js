const data = require('./private/data.json');
const to_compare = require('./private/csv.json');


const test = data.filter(item => {
   if (!to_compare.find(x => x.Omschrijving === item.description)) {
      console.log(item)
      return item
   }
})

console.log(test.length)