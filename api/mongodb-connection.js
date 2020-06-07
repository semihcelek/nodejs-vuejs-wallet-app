const mongoose =require('mongoose')

 async function main(){ 
   await mongoose.connection('mongodb://localhost:/wallet',  { useUnifiedTopology: true, useNewUrlParser: true })
}

main()