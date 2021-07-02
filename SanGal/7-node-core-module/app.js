const fs = require('fs')
//synchronous

// try{
//     fs.writeFileSync('data/test.txt','Poof!')
// } catch(e){
//     console.log(e);
// }

//asynchronous file

// fs.writeFile('data/test.txt','Asynch', (e)=>{
//     console.log(e);
// })

// const data = fs.readFileSync('data/test.txt','utf-8')
// const dataa = fs.readFile('data/test.txt','utf-8',(err,dataa)=>{
//         if(err) throw err;
//         console.log(dataa);
// })
// console.log(data)



//Readline

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Nama: ', (nama)=>{
    rl.question('Number',(noHP)=>{
        const contact = {nama, noHP}
        const file = fs.readFileSync('data/contact.json','utf-8');
        const contacts = JSON.parse(file)

        contacts.push(contact)
        
        fs.writeFileSync('data/contact.json',JSON.stringify(contacts,null, 2))
        rl.close();
    })

  
})

