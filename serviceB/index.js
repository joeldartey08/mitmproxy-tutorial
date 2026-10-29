import express from "express"

const app = express()


app.get("/",  (req, res) => {

  res.send("hi goat");
});

app.listen(3002, ()=>{
    console.log("service B rnning on port 3002")
})


// quide chat https://www.google.com/search?sourceid=chrome&ie=UTF-8&amc=1&gs_lcrp=EgZjaHJvbWUqEggAECMYJxjqAhjwBRieBhiiBzISCAAQIxgnGOoCGPAFGJ4GGKIHMhUIARAjGCcY6gIY8AUYngYYogcYugcyEggCECMYJxjqAhjwBRieBhiiBzISCAMQIxgnGOoCGPAFGJ4GGKIHMhIIBBAjGCcY6gIY8AUYngYYogcyFQgFEAAYQhi0AhjqAhjwBRieBhj2BtIBDjE2MTU2NzM4NGowajMzqAIGsAIB&oq=&cud=1&atvm=2&sxsrf=AKL5yDhLFbge9hGz8yGZLlZW2hnH0tGO_w%3A1793268870468&mstk=AUtExfAejoBzKf7AgUjzW87rh_NIGoc2q2VnHENmUvibyhqrb-Dzhx2JYEAueIa5olnHdO9FO-pA4X5ITiHnPP41q_5z7WwiiXsIebkvMMefpX89Z_pddSiE6pyfOT1nb1J11k6uEmg8macdmnjJnNsXA1P7rq_fBWFuPMXzpu72pnuZDJ9cq8_7_4yuAWknBRz58uK2BKTyZ3c035kl3DgB3mstAWpzN9iJ7dYQ3l4RpNwnBnac63LJgCzKBrtBlLQ-NxfBGw2NcsP5UngH9M0kvCe0YIxXcAs4-to-r6NaOKnLtrBUKStgQQaHMj7ILzhPCnkWCeHy7OOjAQ&mtid=1hrjavnfNZ65hbIP5JbuwAI&csuir=1&aep=26&q=for+backend+engineering...+reverse+proxy+what+does+this+command+do%3F&ved=0CAEQ2_wOahcKEwjg1YmS_96XAxUAAAAAHQAAAAAQXw&lns_mode=cvst&udm=50

/**
 * winget install mitmproxy - for window
 * mitmweb --version -check version
 * mitmweb --mode reverse:http://localhost:3002 -p 9000 
 **/ 