import React from 'react';
import { Field, reduxForm, formValues } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({error,touched}){
        if (touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }
    renderInput = ({ input, lable , meta}) =>{
        console.log(meta)
        return (
            <div className="field">
                <label>{lable}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
                
            </div>

        )
    }
    onSubmit(formValues) {
        console.log(formValues)
        // e.preventDefault()
    }
    // onChange={formProps.input.onChange} 
    // value={formProps.input.value}
    // instead we should destruct input 
    render() {
        // console.log(this.props);
        return <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field
                name="title"
                component={this.renderInput}
                lable="Enter Title"
            />
            <Field
                name="description"
                component={this.renderInput}
                lable="Enter Description"
            />
            <button className="ui button primary">submit</button>
        </form>

    }
};
const validate = (formValues) =>{
    const error={}
    if(!formValues.title){
        //only ran if the user did not enter a title
        error.title = 'You must enter a title'
    }
    if(!formValues.description){
        //only ran if the user did not enter a description
        error.description = 'You must enter a description'
    }
    return error;
}
export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);