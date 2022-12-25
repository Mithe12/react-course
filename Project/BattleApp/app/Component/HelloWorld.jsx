class HelloWorld extends React.Component {

    constructor(props){
        super(props);
        // state is property of component instance.
        this.state = {name: "Mithe", friends: ["S"]};
        // bind the method to the this instance
        this.updateName = this.updateName.bind(this);
    }

    updateName(newName){
        this.setState({name: newName});
    }

    addFriend = (newFriend) => {
        this.setState((prevState) => {
            return {
                friends: prevState.friends.concat(newFriend)
            }
        });
    }

    render(){
        return (
            <React.fragment>
                <h1> Hello, {this.state.name} </h1>
                <button onClick={this.updateName("RE")}>Change Name</button>
                <button onClick={this.addFriend(["RE"])}>add friends</button>         
            </React.fragment>
        )
    }
}