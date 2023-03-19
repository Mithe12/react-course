import React from 'react';
import { useWait } from './CustomHooks';
import { subscribe, unsubscribe, fetchPost } from './api.js'


/*
 Input: userName
 Working: 
    - State: Profile
    - SideEffect: we need to get the profile based on the username and we need to subscribe for it 
 Output: Rendering the Profile information in UI
*/
function Profile({username}){
    const [profile, setProfile] = React.useState(null);

    React.useEffect(() => {
            subscribe(username, setProfile);
            // this will be called in 2 scenarios, userName is changed or component is removed.
            return () => {
                unsubscribe(username);
                setProfile(null);
            }
        }
    , [username]);

    console.log(JSON.stringify(profile,2,null));

    if (profile === null) {
        return <p>Loading...</p>
      }

    return(
        <div>
            <h1> {profile.login} </h1>
            <img src = {profile.avatar_url} alt = {`Avatar for ${profile.login}`}></img>
            <p>{profile.bio}</p>
        </div>
    );

}


/*
Input: ---
Working: we need to have 
    State: will contains active chosen user
Output: It will show the button to choose the user and call the Profile component with that username
 */
export function ProfileApp(){

    const [username, setUsername] = React.useState('mithe12');

    return(
        <React.Fragment>
            <nav>
                <button onClick={() => setUsername('tylermcginnis')}> Tyler</button>
                <button onClick={() => setUsername('sdras')}>Sdras</button>
            </nav>
            <Profile username={username} />
        </React.Fragment>
    )
}

/*
  Instructions:
    Assume you're creating an app that allows the user to
    post status updates (ala Twitter). Your UI should have a
    textarea and a button. The button should be disabled if the
    length of the textarea is 0 or greater than 240 characters.
    The document's title should inform the user on how many
    characters they have left to type before they hit the 240
    character limit - "115 characters left."
            Length of text
    Textarea -----------> button (Disable ( <= 0 and >= 240) | enable)
    Document title should be updated to show the limit.

    State: input and we need to use onchange to update it 

*/



export function TwitterCharacterLimitApp(){

    const [input, setInput]  = React.useState('');

    React.useEffect(() => {
        document.title = `${ 240 - input.length } Characters left.`;
    }, [input]);

    return(
        <div>
            <textarea
                type = 'text'
                value = {input}
                placeholder = "Type something"
                onChange = {(e) => setInput(e.target.value)} />
            <button 
                disabled = { input.length === 0 || input.length > 240}
                onClick = {() => console.log(input) }>Submit</button>
        </div>
    );

}


/*
  Instructions:
    You'll notice below that we have a Wait component.
    The purpose of Wait is to render the `ui` prop after
    `delay` seconds. Before `delay` seconds, it should
    render `placeholder`.
*/

function Wait({delay = 1000, placeholder, ui}){
    /*
    const [isUI, setIsUI] = React.useState(false);
    React.useEffect(() => {
       const id = window.setTimeout(() => setIsUI(true), delay);
       return () => window.clearTimeout(id);
    },[delay]); */

    const show = useWait(delay)
    return show === true ? ui : placeholder;
}


export function WaitApp(){
    return(
        <Wait
        delay = {3000}
        placeholder = {<p>Waiting</p>}
        ui = {<p>After 3 seconds</p>} />
    );
}


/*
  Instructions:
    You're given an array of `postIds` and a `fetchPost` function.
    When you invoke `fetchPost`, you'll need to pass it an `id` from
    the `postIds` array. `fetchPost` returns a promise that will resolve
    with a post shaped like this

    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    The UI should show `Loading` if the request is still being made,
    an error message if there was an error, or the post title, body,
    and a button to fetch the next post on a successful request.
*/


const postIds = [1,2,3,4,5,6,7,8,9]
    
export function APIRequestApp(){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [currentIdIndex, setCurrentIdIndex] = React.useState(0);
    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        setLoading(true)
        setError(null)
        fetchPost(postIds[currentIdIndex])
            .then(post => {
                setPost(post)
                setLoading(false)
                setError(null)
            })
            .catch(error => {
                console.warn(error.message)
                setLoading(false)
                setError("Error Fetching data")
            })
    }, [currentIdIndex])

    const incrementIndex = () => {
        setCurrentIdIndex(i => i === postIds.length - 1 ? i : i+1);
    }

    if(loading === true) return <p>Loading</p>
    if(error) return <p>{error}</p>
    if(post) return <div>
        <p>{post.id}</p>
        <p>{post.title}</p>
        <button onClick={incrementIndex}>Next</button>
        </div>;

}