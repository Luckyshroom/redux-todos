import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions/index'

const Link = ({active, children, onClick}) => (
    <button className="btn btn-primary"
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px',
        }}
    >
        {children}
    </button>
);

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default connect(
    (state, ownProps) => ({
        active: ownProps.filter === state.visibilityFilter
    }),
    (dispatch, ownProps) => ({
        onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
    })
)(Link)
