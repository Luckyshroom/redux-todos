import React from 'react'
import {persistor} from '../store/configureStore'

const Purge = () => (
    <button className="btn btn-primary" onClick={() => persistor.purge()}
            style={{
                marginLeft: '4px',
            }}
    >
        PURGE
    </button>
);

export default Purge