import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {editTodo} from '../actions/index'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: this.props.content,
            importance: this.props.importance,
            deadline: this.props.deadline,
            isEdit: false
        };
        this.handleField = this.handleField.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.toggleRow = this.toggleRow.bind(this);
    }

    handleField = (e) => {
        if (e.target.id === 'content') {
            this.setState({content: e.target.value});
        } else if (e.target.id === 'deadline') {
            this.setState({deadline: e.target.value});
        }
    };

    handleRadio = (e) => {
        this.setState({importance: e.target.value});
    };

    handleAccept = () => {
        this.toggleRow();
        this.props.dispatch(editTodo(this.props.id, this.state.content, this.state.importance, this.state.deadline));
    };

    toggleRow = () => {
        this.setState({isEdit: !this.state.isEdit})
    };

    render() {
        let {note, content, importance, deadline, completed, isCompleted, deleteTodo, toggleTodo} = this.props;

        const status = () => {
            let currentDate = (new Date()).toISOString().split("T")[0];

            if (deadline <= currentDate && deadline !== '') {
                return 'Expired'
            }
            if (isCompleted) {
                return 'Completed on ' + completed;
            }
            if (!isCompleted || deadline === '') {
                console.log(currentDate, deadline);
                return 'Active'
            }
        };

        const deadlineInfo = () => {
            if (deadline === '') {
                return 'Indefinitely'
            } else
                return deadline
        };

        const simpleRow = () => {
            return (
                <tr>
                    <th
                        onClick={toggleTodo}
                        style={{
                            textDecoration: isCompleted ? 'line-through' : 'none'
                        }}
                    >
                        {note}
                    </th>
                    <th>{content}</th>
                    <th>{importance}</th>
                    <th>{deadlineInfo()}</th>
                    <th>{status()}</th>
                    <th>
                        <button onClick={this.toggleRow}>Edit</button>
                        <button onClick={deleteTodo}>Delete</button>
                    </th>
                </tr>
            )
        };

        const editRow = () => {
            return (
                <tr>
                    <th
                        onClick={toggleTodo}
                        style={{
                            textDecoration: isCompleted ? 'line-through' : 'none'
                        }}
                    >
                        {note}
                    </th>
                    <th><textarea id='content' className="form-control" defaultValue={content} style={{minHeight: 70}}
                                  onChange={this.handleField}/></th>
                    <th>
                        <div className="custom-radio custom-control">
                            <input type="radio" id="_usual" name="customRadio" className="custom-control-input"
                                   value="Usual" defaultChecked={importance === 'Usual'} onChange={this.handleRadio}/>
                            <label className="custom-control-label" htmlFor="_usual">Usual</label>
                        </div>
                        <div className="custom-radio custom-control">
                            <input type="radio" id="_increased" name="customRadio" className="custom-control-input"
                                   value="Increased" defaultChecked={importance === 'Increased'} onChange={this.handleRadio}/>
                            <label className="custom-control-label" htmlFor="_increased">Increased</label>
                        </div>
                        <div className="custom-radio custom-control">
                            <input type="radio" id="_high" name="customRadio" className="custom-control-input"
                                   value="High" defaultChecked={importance === 'High'} onChange={this.handleRadio}/>
                            <label className="custom-control-label" htmlFor="_high">High</label>
                        </div>
                    </th>
                    <th>
                        <input id="deadline" className="form-control" type="date" defaultValue={deadlineInfo()}
                               onChange={this.handleField}/>
                    </th>
                    <th>{status()}</th>
                    <th>
                        <button onClick={this.handleAccept}>{this.state.isEdit ? 'Accept' : 'Edit'}</button>
                        <button onClick={deleteTodo}>Delete</button>
                    </th>
                </tr>
            )
        };

        return (
            this.state.isEdit ? editRow() : simpleRow()
        )
    }
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    note: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    importance: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
};

export default connect()(Todo)
