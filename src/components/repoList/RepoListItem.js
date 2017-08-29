import React from 'react'
import PropTypes from 'prop-types'

import styles from './RepoListItem.css'

const RepoListItem = (props) => {
    return (
        <li
            onClick={() => props.setRepoIdToView(props.id)}
            className={`${styles.listItem} ${props.isActive ? styles.active : null}`}>
            {props.name}
        </li>
    )
}

RepoListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    setRepoIdToView: PropTypes.func.isRequired
}

export default RepoListItem
