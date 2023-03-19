// helper function
function getGithubProfile(username){
    return fetch(`https://api.github.com/users/${username}`)
                .then((res) => res.json())
}

// Map contains Username and thier Id  
const intervalIdUserMap = {}


// subscibe creates a logic/connection to get upto date information
export function subscribe(username, cb){
    // This creates setInterval function in the memory and for every 3s it call the service and get the value and set the update functuion (Passing down)
    const id = window.setInterval(() => {
        getGithubProfile(username)
            .then(cb)
    }, 3000)

    // we need to save Id to associated Username 
    intervalIdUserMap[username] = id
}

// unsubscribe clears the connection/logic
export function unsubscribe(username){
    window.clearInterval(intervalIdUserMap[username]);
}

console.log(intervalIdUserMap)

export function fetchPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    );
  }

  function getRandomNumber (min, max) {
    return Math.floor(Math.random() * max) + min
}

export function newUser ({ username, password, email }) {
    return new Promise((res, rej) => {
        return getRandomNumber(1, 5) === 3
            ? rej('There was an error. Try again.')
            : setTimeout(res, 2000)
        
    })
}