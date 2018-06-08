import React from 'react'
import FilterLink from '../containers/FilterLink'
import {VisibilityFilters} from '../actions'
import Purge from './Purge'

const Footer = () => (
    <div className="py-4">
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>
            All
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_USUAL}>
            Usual
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_INCREASED}>
            Increased
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_HIGH}>
            High
        </FilterLink>
        <Purge/>
    </div>
);

export default Footer
