// accept input
// fetch the data
// append the data

// url='http://www.omdbapi.com/?t=avenger'

// const=`http://www.omdbapi.com/?t=${title}&apikey=ef650941`

let movie_div=document.getElementById('movies');

let display=document.getElementById('movie_detail')

let id;

async function searchMovies(q){
    // url prepare;
    try{
        let url=`http://www.omdbapi.com/?s=${q}&apikey=ef650941`;
   
    let res= await fetch(url)
    let data= await res.json() //res.json()---just to collect the data
    // console.log(data)
    
    return data.Search;

    }catch(err){
        console.log(err)
    }
    
}

//--------------append------------------

function append(movies){
    movie_div.innerHTML=null;
    if(movies===undefined){
        return false;
    }
    movies.forEach(function(el){
        // let p=document.createElement('p')
        // p.innerText=el.Title;
        let btn=document.createElement('button')
        btn.innerText=el.Title;
        btn.style="width:100%; padding:10px 10px; cursor:pointer;"

        movie_div.append(btn);
        btn.addEventListener('click',function(){
            showData(el)
        })
    })
}

function showData(el){
     

     let box=document.createElement("div");
          let p=document.createElement("p");
            p.innerText=el.Title;
          let poster=document.createElement("img");
          poster.src=el.Poster;
          let yor=document.createElement("p");
          yor.innerText=el.Year;
          let Type=document.createElement("p");
          Type.innerText=el.Type;
          let imdbID =document.createElement("p");
          imdbID.innerText=el.imdbID;
        box.append(p,yor,poster,Type,imdbID)
          display.append(box);
       
 
}
//--------------------------------------------
async function main(){
    let query=document.getElementById('query').value;
    // console.log(query)
    let response=searchMovies(query)
    let data=await response;
    // console.log(x) 
    //searchMovies() return the promises
    //async function return the promise

    append(data)
    console.log(data)

}

//-------------debouncing-----------

// main('a') ---> setTimeout(main,1000,'a') -->data
// main('av') --> get prev time id

function debounce(fun,delay){
    if(id){
        clearTimeout(id)
    }

    id=setTimeout(function(){
        fun();
    
    },delay)

}