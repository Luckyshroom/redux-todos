import React from 'react'
import Link from '../components/Link'
import Purge from '../components/Purge'
import {VisibilityFilters} from '../actions/index'

const Footer = () => (
    <div className="py-4">
        <span>Show: </span>
        <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
        <Link filter={VisibilityFilters.SHOW_USUAL}>Usual</Link>
        <Link filter={VisibilityFilters.SHOW_INCREASED}>Increased</Link>
        <Link filter={VisibilityFilters.SHOW_HIGH}>High</Link>
        <Purge/>
    </div>
);

export default Footer
