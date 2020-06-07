const mongoose =require('mongoose')

 async function main(){ 
   await mongoose.connect('mongodb://localhost/wallet',  { useUnifiedTopology: true, useNewUrlParser: true })
   console.log('mongodb connected')
}

main()