import React from 'react';

class GoogleAuth extends React.Component{
    state={
        isSignedIn:null
    }
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{

            //load is followed by a callback function. 
            //init doesnt need CB function cause its a promise followed by function then()
            window.gapi.client.init({
                clientId:
                    '1087217222329-u2qejiic5mk9c7up9q2844ievgsmvvb8.apps.googleusercontent.com',
                scope:
                    'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
            })
        })
    }
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div>I dont know if we are signed in</div>
        } else if (this.state.isSignedIn){
            return <div>Im signed in</div>
        } else{
            return <div>Im not signed in</div>
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