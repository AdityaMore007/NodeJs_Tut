const readline = require('readline')
let fs = require('fs');

/* LECTURE 4: CODE EXAMPLE.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Please enter the name: ',(name)=>{
    console.log('YOu entered:'+name)
    rl.close()

})

rl.on('close',()=>{
    console.log('interface closed');
    process.exit(0)    
})
*/


/* 
    LECTURE 5: READING AND WRITING FILE
*/

// let textIn = fs.readFileSync('./Files/output.txt', 'utf8')
// console.log(textIn);

// let content = `Data read from input.txt: ${textIn} \nDate created: ${new Date()}`
// fs.writeFileSync('./Files/input.txt' , content)


/*
    LECTURE 6: WHAT IS ASYNCHRONOUS FUNCTION.
*/


// Background: This is where time consuming task should be executed Asynchronously.

// NodeJs: 1. Non-Blocking IO Model.
    //     2. This is why we use so manyn callBack function in NodeJs.
    //     3. CallBack doesn't mean Asynchronous.

// fs.readFile('./Files/output.txt' , 'utf-8' , (err,data)=>{
//     console.log(data);
// })

// console.log("Reading File...");


/*
   LECTURE 7: READING AND WRITIING FILE ASYNCHRONOUSLY.
*/

// fs.readFile('./Files/start.txt' , 'utf-8' , (error1,data1) => {
//     console.log(data1);
//     fs.readFile(`./Files/${data1}.txt` , 'utf-8' , (error2,data2) => {
//         console.log(data2);
//         fs.readFile('./Files/append.txt' , 'utf-8' , (error3,data3) => {
//             console.log(data3);
//             fs.writeFile('./Files/input.txt' , `${data2}\n\n${data3}\n\nDate created ${new Date()}` , () => {
//                 console.log('File run Successfully!!...')
//             })
//         })
        
//     })
// })

// console.log('Reading File....');


/*
 LECTURE 8: CREATING SIMPLE WEB SERVER.
*/

const html = fs.readFileSync('./Template/index.html' , 'utf-8' , )

const http = require('http')

// creating server:
const server = http.createServer((request,response) => {
    let path = request.url
    // response.end(path)

    if(path === '/' || path.toLocaleLowerCase() ==='/home'){
        response.end("You are in Home Page!!")
    } else if (path.toLocaleLowerCase() === '/about'){
        response.end("You are in About Page..")
    }else if (path.toLocaleLowerCase() === '/contact'){
        response.end("You are in Contact Page...")
    }else {
        response.end("Error 404 - Page Not Found!!")
    }
});

// starting new server:
server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has Listened!!...')
});

/*
LECTURE 9: HOW THE WEB WORKS...

Server: 192.168.20.134
where, NodeApp Port : 8000
       JavaApp port : 4000
       .NETApp port : 3000
*/



/*
LECTURE 11: ROUTING
*/

// 1. Routing defines the way in which the Client requests are handled by
//    the Application Endpoints.
// 2. Routing basically means implementing differnt actions for differnt URLs.