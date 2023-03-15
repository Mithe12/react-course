import React from 'react';

// Simple update on state object - Theme
export class Theme extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            theme: "light",
        };
    }

    toDark = () => this.setState({ theme: 'dark'});
    toLight = () => this.setState({ theme: 'light'});

    render(){
        const { theme } = this.state;
        return(
            <div className= {theme}>
                {theme === "light" ? 
                    (<button onClick={this.toDark}> 🔦 </button>) :
                    (<button onClick={this.toLight}> 💡</button>)}
            </div>
        );
    }
}

export function Themes() {
    const [theme, setTheme] = React.useState('light');
    const toDark = () => setTheme('dark');
    const toLight = () => setTheme('light');

    return(
        <div className = {theme}>
            {theme === 'light' ? 
            (<button onClick={toDark}> Dark </button>) : (<button onClick={toLight}> Light </button>)
        } 
        </div>
    );

}

// Update based on prevState - Counter
export class Counter extends React.Component{
    state = {count: 0};
    increment = () => this.setState(({count}) => ({count: count + 1}));
    decrement = () => this.setState(({count}) => ({count: count - 1}));

    render(){
        const { count } = this.state;
        return(
            <div>
                <p>{count}</p>
                <button onClick = {this.increment}> Increment</button>
                <button onClick = {this.decrement}> Decrement</button>
            </div>
        );
    }
}

export function Counters(){
    const [count, setCount] = React.useState(0);
    const increment = () => setCount(count => count + 1);
    const decrement = () => setCount(count => count - 1);
    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
}

/* Problem 1
Instructions: Create a "todo" app with following criteria
    - User can add new todo items   --- Type in the text bar and click add, it will be avail in the list
    - User can remove todo items    --- if you click close button, we will able to delete the item in the list
    Note: Map uses id as Key because of this we cannot delete the item directly.
    When delete is clicked, we need to use filter and remove the item and create a new arrays and render that.
*/

// generateId
function generateId(){
    return '_' + Math.random().toString(36).substring(2,9);
}

export function Todo(){

    // define the state
    const [todos, setTodos] = React.useState([]);
    const [input, setInput] = React.useState('');

    // onSubmit and onDelete
    const onSubmit = () => {
        setTodos(todos.concat({
            id: generateId(),
            item: input
        }));

        setInput('');
    };


    const onDelete = (id) => setTodos(todos.filter((i) => i.id !== id));
    

    // render
    return(
        <div>
            <input
                type = 'text'
                placeholder = 'Type'
                value = {input}
                onChange = { (e) => setInput(e.target.value)} />
            
            <button onClick={onSubmit}> Add </button>

            <ul>
                {todos.map(
                    ({id, item}) => (
                        <li key = {id}> 
                            <span> {item} </span>
                            <button onClick = {() => onDelete(id)}> X </button>
                        </li>
                    )
                )}
            </ul>
        </div>

    )
}

/* Problem 2: Show/Hide post
  Instructions:
    Given the array of "posts", recreate the functionality for this app.
    By default, each post preview is cut off until the user clicks "Open".
    Only one post can be "Open" at a time.
*/

  export function PostApp(){
    const posts=[
        {
          id: 0,
          img:
            "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:Code%20Splitting%20with%20React%252C%20React.lazy%252C%20and%20React%20Router,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:4%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
          text:
            "Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post weâll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router."
        },
        {
          id: 1,
          img:
            "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:JavaScript%20Inheritance%20vs%20Composition,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:3%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
          text:
            "The problem with object-oriented languages is theyâve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong."
        },
        {
          id: 2,
          img:
            "https://res.cloudinary.com/uidotdev/image/upload/c_fit,co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_80_center_line_spacing_-18:JavaScript%20Modules:%20From%20IIFEs%20to%20CommonJS%20to%20ES6%20Modules,w_1100/fl_layer_apply,y_-30/bo_2px_solid_white,fl_text_no_trim,h_126,l_twitter_name:tylermcginnis,r_max,w_126/fl_layer_apply,g_south_west,x_385,y_72/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_38:by/fl_layer_apply,g_south_west,x_552,y_136/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-extrabold.ttf_40:Tyler%20McGinnis/fl_layer_apply,g_south_west,x_610,y_135/co_white,fl_text_no_trim,l_text:fonts:proxima-nova-semibold.ttf_31:13%20minute%20read/fl_layer_apply,g_south_west,x_554,y_93/c_fill,g_north,h_630,w_1200/og-social-bg.png",
          text:
            "Iâve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. Thereâs good reason for that. Modules in JavaScript have a strange and erratic history. In this post weâll walk through that history and youâll learn modules of the past to better understand how JavaScript modules work today."
        },
      ];
    return <Post posts={posts} />
  }


  function Post({posts}){

    const [openId, setOpenId] = React.useState();
    const show = (id) => setOpenId(id);

    // state: we need to store open postId whenver shoiw is clicked. after rendering if this id matches postId then show
    // we need to define the Card and a button. 

    return (
          posts.map(({id, text}) => (
            <div>
                <p>{id}</p>
                {id === openId ? 
                    (<p> {text} </p>) : (<button onClick = {() => show(id)}> Show</button>)
                }
            </div>
          ))  
    );
  }