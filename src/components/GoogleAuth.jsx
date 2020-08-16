import React from 'react';

class GoogleAuth extends React.Component{
    state={
        isSignedIn:null,
        userName:null,
        userProfileImgUrl:null,
    }
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{

            //load is followed by a callback function. 
            //init doesnt need CB function cause its a promise followed by function then()
            window.gapi.client.init({
                clientId:
                    '1087217222329-u2qejiic5mk9c7up9q2844ievgsmvvb8.apps.googleusercontent.com',
                scope:
                    'profile',
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({
                    isSignedIn:this.auth.isSignedIn.get(),
                    userName:this.auth.currentUser.get().getBasicProfile().getName(),
                    userProfileImgUrl:this.auth.currentUser.get().getBasicProfile().getImageUrl()
                })
                this.auth.isSignedIn.listen(this.onAuthChange);
                console.log(this.auth.currentUser.get().getBasicProfile().getImageUrl());
            })
        })
    }
    onAuthChange =()=>{
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    onSignInClick = () =>{
        this.auth.signIn()
    }
    onSignOutClick = () =>{
        this.auth.signOut() 
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I dont know if we are signed in</div>
        } else if (this.state.isSignedIn){
            return <>
            <h2>            
                <img style={{width:'40px'}} src={this.state.userProfileImgUrl} alt={this.state.userProfileImgUrl}/>
                Hello {this.state.userName} 
            </h2>
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon"/>Sign Out
            </button></>
        } else{
            return <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon"/>Sign In With Google
            </button>
        }
        
    }
    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
export default GoogleAuth;

//1087217222329-u2qejiic5mk9c7up9q2844ievgsmvvb8.apps.googleusercontent.com