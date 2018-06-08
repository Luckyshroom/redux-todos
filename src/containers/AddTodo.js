import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: '',
            content: '',
            importance: '',
            deadline: ''
        };
        this.handleField = this.handleField.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleField = (e) => {
        if (e.target.id === 'note') {
            this.setState({note: e.target.value});
        } else if (e.target.id === 'content') {
            this.setState({content: e.target.value});
        } else if (e.target.id === 'deadline') {
            this.setState({deadline: e.target.value});
        }
    };

    handleRadio = (e) => {
        this.setState({importance: e.target.value});
    };

    handleSubmit = () => {
        this.props.dispatch({type: 'INCREMENT'});
        this.props.dispatch(addTodo(this.props.counter, this.state.note, this.state.content, this.state.importance, this.state.deadline));
    };

    render() {
        let isEnabled = this.state.note !== '' && this.state.content !== '' && this.state.importance !== '';

        return (
            <form className="mb-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Note</label>
                    <input id='note' className="form-control" type="text" placeholder="Note"
                           onChange={this.handleField}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea id='content' className="form-control" placeholder="Description"
                              onChange={this.handleField} style={{minHeight: 70}}/>
                </div>
                <div className="form-group">
                    <label>Importance</label>
                    <div className="custom-radio custom-control">
                        <input type="radio" id="usual" name="customRadio" className="custom-control-input"
                               value="Usual" onChange={this.handleRadio}/>
                        <label className="custom-control-label" htmlFor="usual">Usual</label>
                    </div>
                    <div className="custom-radio custom-control">
                        <input type="radio" id="increased" name="customRadio" className="custom-control-input"
                               value="Increased" onChange={this.handleRadio}/>
                        <label className="custom-control-label" htmlFor="increased">Increased</label>
                    </div>
                    <div className="custom-radio custom-control">
                        <input type="radio" id="high" name="customRadio" className="custom-control-input"
                               value="High" onChange={this.handleRadio}/>
                        <label className="custom-control-label" htmlFor="high">High</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Deadline</label>
                    <input id="deadline" className="form-control" type="date" onChange={this.handleField}/>
                </div>
                <button className="btn btn-primary" disabled={!isEnabled}>Submit</button>
            </form>
        )
    }
}

export default connect(
    state => ({
        counter: state.counter
    })
)(AddTodo)
