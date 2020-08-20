import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component{
    renderInput({input}){
        return(
            <input {...input}
            // onChange={formProps.input.onChange} 
            // value={formProps.input.value}
            // instead we should destruct input 
            />
        )
    }
    render(){
        console.log(this.props);
        return <form>
            <Field name="title" component={this.renderInput}/>
            <Field name="description" component={this.renderInput}/>
        </form>

    }
};

export default reduxForm({
    form:'streamCreate'
})(StreamCreate);