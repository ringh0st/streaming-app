import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'
class GoogleAuth extends React.Component {
    // state = {
    //     // isSignedIn: null,
    //     userName: null,
    //     userProfileImgUrl: null,
    // }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            //load is followed by a callback function. 
            //init doesnt need CB function cause its a promise followed by function then()
            window.gapi.client.init({
                clientId:
                    '1087217222329-u2qejiic5mk9c7up9q2844ievgsmvvb8.apps.googleusercontent.com',
                scope:
                    'email',
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({
                //     isSignedIn: this.auth.isSignedIn.get(),
                // })
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
                // console.log(this.auth.currentUser.get().getBasicProfile());
            })
        })
    }
    onAuthChange = (isSignedIn) => {
        // this.setState({isSignedIn:this.auth.isSignedIn.get()})
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
            console.log(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut()
        }
    }
    onSignInClick = () => {
        this.auth.signIn()
        // this.setState({
        //     userName: this.auth.currentUser.get().getBasicProfile().getName(),
        //     userProfileImgUrl: this.auth.currentUser.get().getBasicProfile().getImageUrl()
        // })
    }
    onSignOutClick = () => {
        this.auth.signOut()
    }
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <>
                {/* <div className="ui card">
                    <div className="image">
                        <img style={{ width: '40px' }} src={this.state.userProfileImgUrl} alt={this.state.userProfileImgUrl} />
                    </div>
                    <div className="content">
                        Hello {this.state.userName}

                    </div>
                </div> */}
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon" />Sign Out
            </button></>
        } else {
            return <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />Sign In With Google
            </button>
        }

    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const myStateToProps = (state)=>{
    return{
        isSignedIn:state.auth.isSignedIn
    }
}
export default connect(
    myStateToProps,
    { signIn, signOut })
    (GoogleAuth);

//1087217222329-u2qejiic5mk9c7up9q2844ievgsmvvb8.apps.googleusercontent.com