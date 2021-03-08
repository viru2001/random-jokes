const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');



// USING PROMISES

// const generateJokes = () =>{

//     const setHeader = {
//         headers : {
//             Accept : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com/',setHeader)
//     .then( (res) =>  res.json()  )
//     .then( (data) =>{
//         jokes.innerHTML = data.joke;
//     })
//     .catch( (error) => {
//         console.log(error);
//     })
// }


// USING ASYNC AWAIT

const generateJokes = async () => {

    try {
        const setHeader = {
            headers: {
                Accept : 'application/json'
            }
        }

        const response = await fetch('https://icanhazdadjoke.com/', setHeader)
        const data = await response.json();
        jokes.innerHTML = data.joke;
    }
    catch (err) {
        console.log(`error is : ${err}`);
    }


}


jokeBtn.addEventListener('click', generateJokes);
generateJokes();

