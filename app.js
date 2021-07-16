
const cont = document.getElementById("container");
// console.log(cont)

const movies=[
    {
     "name":"Iron Man" , "img":"images/action/irom.jpg","overview":"initial iron man movie"
    },
    {
        "name":"Deadpool" , "img":"images/action/deadpool.jpg","overview":" one of the Marvel movie"
    },
    {
        "name":"John Wick" , "img":"images/action/john.jpg","overview":"Hollywood Action Movie"
    },
    {
        "name":"Sherlock Holmes" , "img":"images/action/sherlock.jpg","overview":"Detective Based movie"
    },
    {
        "name":"Fury" , "img":"images/action/fury.jpg","overview":"Hollywood War movie"
    },

   {
        "name":"Thor" , "img":"images/action/thor.jpg","overview":"Thor the Thunder God's movie"
    },
    {
        "name":"Wonder Woman" , "img":"images/action/ww84.jpg","overview":"DC Woman Superhero Movie"
    },
    {
        "name":"Titanic" , "img":"images/action/titanic.jpg","overview":"Hollywood Ship Travelling movie"
    },
    {
        "name":"The Imitation Game" , "img":"images/drama/the_inimation.jpg","overview":"a Man who help's to Win WW2"
    },
    {
        "name":"A Beautiful Mind" , "img":"images/drama/mind.jpg","overview":"Mind Controlling Movie"
    },
    {
        "name":"Melancholia" , "img":"images/drama/mela.jpg","overview":"Drama Movie"
    },
    {
        "name":"My BF's Wending" , "img":"images/drama/bf.jpg","overview":"movie about Best Friend's Wedding"
    },
    {
        "name":"Hachiko" , "img":"images/drama/hachiko.jpg","overview":"Movie about Dog and Human Friendship"
    },
    {
        "name":"District 9" , "img":"images/sci-fi/district_9.jpg","overview":"Robot's World movie"
    },
    {
        "name":"Intersteller" , "img":"images/sci-fi/intersteller.jpg","overview":"Hollywood Space Movie"
    },
    {
        "name":"Life" , "img":"images/sci-fi/life.jpg","overview":"Movie about living life in Space"
    },
    {
        "name":"Lost In Space" , "img":"images/sci-fi/lost_in_space.jpg","overview":"Movie about lost in Space"
    },
    {
        "name":"The Martian" , "img":"images/sci-fi/martian.jpg","overview":"Mars Living Movie"
    },
    {
        "name":"Platform" , "img":"images/sci-fi/platform.jpg","overview":"Hollywood Scifi movie"
    },
    {
        "name":"Wandering Earth" , "img":"images/sci-fi/wandering_earth.jpg","overview":"Movie about wandering around the earth"
    },
]

const action=[
    {
        "name":"Iron Man" , "img":"images/action/irom.jpg","overview":"initial iron man movie"
       },
       {
           "name":"Deadpool" , "img":"images/action/deadpool.jpg","overview":" one of the Marvel movie"
       },
       {
           "name":"John Wick" , "img":"images/action/john.jpg","overview":"Hollywood Action Movie"
       },
       {
           "name":"Sherlock Holmes" , "img":"images/action/sherlock.jpg","overview":"Detective Based movie"
       },
       {
           "name":"Fury" , "img":"images/action/fury.jpg","overview":"Hollywood War movie"
       },
   
      {
           "name":"Thor" , "img":"images/action/thor.jpg","overview":"Thor the Thunder God's movie"
       },
       {
           "name":"Wonder Woman" , "img":"images/action/ww84.jpg","overview":"DC Woman Superhero Movie"
       },
    
]

const drama =[
    {
        "name":"Titanic" , "img":"images/action/titanic.jpg","overview":"Hollywood Ship Travelling movie"
    },
    {
        "name":"The Imitation Game" , "img":"images/drama/the_inimation.jpg","overview":"a Man who help's to Win WW2"
    },
    {
        "name":"A Beautiful Mind" , "img":"images/drama/mind.jpg","overview":"Mind Controlling Movie"
    },
    {
        "name":"Melancholia" , "img":"images/drama/mela.jpg","overview":"Drama Movie"
    },
    {
        "name":"My BF's Wending" , "img":"images/drama/bf.jpg","overview":"movie about Best Friend's Wedding"
    },
    {
        "name":"Hachiko" , "img":"images/drama/hachiko.jpg","overview":"Movie about Dog and Human Friendship"
    },
]

const scifi=[
    {
        "name":"District 9" , "img":"images/sci-fi/district_9.jpg","overview":"Robot's World movie"
    },
    {
        "name":"Intersteller" , "img":"images/sci-fi/intersteller.jpg","overview":"Hollywood Space Movie"
    },
    {
        "name":"Life" , "img":"images/sci-fi/life.jpg","overview":"Movie about living life in Space"
    },
    {
        "name":"Lost In Space" , "img":"images/sci-fi/lost_in_space.jpg","overview":"Movie about lost in Space"
    },
    {
        "name":"The Martian" , "img":"images/sci-fi/martian.jpg","overview":"Mars Living Movie"
    },
    {
        "name":"Platform" , "img":"images/sci-fi/platform.jpg","overview":"Hollywood Scifi movie"
    },
    {
        "name":"Wandering Earth" , "img":"images/sci-fi/wandering_earth.jpg","overview":"Movie about wandering around the earth"
    },
]
var i=0;
const main = document.getElementById('row');




function search(){
    const search_input=document.getElementById('search').value;
    console.log(search_input);
    var x = document.getElementById("mySelect").value;
    console.log(x);
    if(x=="Action"){
        const filteredMovies = action.filter((movie) => {
            return (
                movie.name.toLowerCase().includes(search_input) 
                
            );
        });
        
        console.log(filteredMovies)
        displayMovies(filteredMovies);

    }else if(x=="Drama"){
        const filteredMovies = drama.filter((movie) => {            
    

            return (
                movie.name.toLowerCase().includes(search_input) 
                
            );
        });
        
        console.log(filteredMovies)
        displayMovies(filteredMovies);
      
   
       
    }else if(x=="Scifi"){
        const filteredMovies = scifi.filter((movie) => {
            return (
                movie.name.toLowerCase().includes(search_input) 
                
            );
        });
        
        console.log(filteredMovies)
        displayMovies(filteredMovies);
       
    }else {
        const filteredMovies = movies.filter((movie) => {
            return (
                movie.name.toLowerCase().includes(search_input) 
                
            );
        });
        
        console.log(filteredMovies)
        displayMovies(filteredMovies)

}
}


displayMovies=(movies)=>{
        const htmlString = movies
        .map((movie) => {
            return `
                   <div class="col-xs-12 col-sm-6 col-md-3">
                    <a href="#" class="thumbnail">
                    <img src=${movie.img} alt=${movie.name}>
                    <div class="overview">
                    <h6 class="movie_name">${movie.name}</h6>
                    ${movie.overview}
                   </div>
                  </a>
                  </div>
        `;
        })
        .join('');
    main.innerHTML = htmlString;

}


function myFunction(){
        var x = document.getElementById("mySelect").value;
        console.log(x);
            if(x=="Action"){
               displayMovies(action);

    }
    else if(x=="Drama"){
        displayMovies(drama);

       
    }else if(x=="Scifi"){
        displayMovies(scifi);

       
    }else {
        displayMovies(movies);
    }
}
















































// function myFunction() {
//     // alert("button is pressed")
//     var x = document.getElementById("mySelect").value;
//     console.log(x);
//     if(x=="Action"){
//       var drama=document.getElementById("drama");
//       var scifi=document.getElementById("scifi");
//       var action=document.getElementById("action");
//       drama.classList.add('display');
//       scifi.classList.add('display');
//       action.classList.remove('display');

//     }
//     else if(x=="Drama"){
//         var action=document.getElementById("action");
//         var scifi=document.getElementById("scifi");
//         var drama=document.getElementById("drama");
//         action.classList.add('display');
//         scifi.classList.add('display');
//         drama.classList.remove('display');
       
//     }else if(x=="Scifi"){
//         var action=document.getElementById("action");
//         var scifi=document.getElementById("scifi");
//         var drama=document.getElementById("drama");
//         action.classList.add('display');
//         drama.classList.add('display');
//         scifi.classList.remove('display');
       
//     }else {
//         var action=document.getElementById("action");
//         var scifi=document.getElementById("scifi");
//         var drama=document.getElementById("drama");
//         action.classList.remove('display');
//         drama.classList.remove('display');
//         scifi.classList.remove('display');
//     }
//   }


//  calling loading characters
// loadMovie();

// const showNothing=()=>
// {
//     const search_input=document.getElementById('search').value;
//     if(search_input===" ")
//     console.log(search_input);
    
//     main.classList.add('display');
//     console.log("its executed")

// }
displayMovies(movies);