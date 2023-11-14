const csvFilePath="./private/XLS231114093526.csv"
const csv=require('csvtojson/v2')
   csv()
   .fromFile(csvFilePath)
   .then((jsonObj)=>{
      console.log(jsonObj);
      /**
       * [
       * 	{a:"1", b:"2", c:"3"},
       * 	{a:"4", b:"5". c:"6"}
       * ]
       */ 
   })
   
   
const main  = async () => {
   // Async / await usage
   const jsonArray=await csv().fromFile(csvFilePath);
}

main()