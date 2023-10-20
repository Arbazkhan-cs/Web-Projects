let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
let tweetMe = document.getElementById('tweetMe');
let GenerateQuotes = "";
let GenerateAuthor = "";

const getQuotes = async ()=>{
    const api = "https://type.fit/api/quotes";
    try{
        let data = await fetch(api);
        let jsonData = await data.json();
        let random = Math.round(Math.random()*1000);

        GenerateQuotes = jsonData[random].text;
        GenerateAuthor = jsonData[random].author;

        quote.innerHTML = `${jsonData[random].text}`;

        if(GenerateAuthor == null)
            author.innerHTML = "Unknown";
        else
            author.innerHTML = `${GenerateAuthor}`;

    }catch(err){
        console.log(err);
    }
}

btn.addEventListener('click', ()=>{
    getQuotes();
})

tweetMe.addEventListener('click', ()=>{
    let url = `https://twitter.com/intent/tweet?text=${GenerateQuotes} By ${GenerateAuthor}`;
    window.open(url);
    console.log(GenerateQuotes, GenerateAuthor);
})
 