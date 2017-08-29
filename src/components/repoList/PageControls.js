import React from 'react'
import PropTypes from 'prop-types'

import styles from './PageControls.css'

const PageControls = (props) => {
    const showNextPage = function () {
        props.setResultsPage(props.page + 1)
        props.searchRepos(props.repoToSearch, props.page + 1)
    }

    const showPrevPage = function () {
        props.setResultsPage(props.page - 1)
        props.searchRepos(props.repoToSearch, props.page - 1)
    }

    return (
        <div className={styles.pageControls}>
            { props.page > 1 ? <span onClick={showPrevPage} className={styles.prev}>{'<< prev'}</span> : <span className={styles.pad}></span> }
            <span className={styles.pageNum}>{props.page}</span>
            { props.numberOfRepos < 30 ? <span className={styles.pad}></span> : <span onClick={showNextPage} className={styles.next}>{'next >>'}</span> }
        </div>
    )
}

PageControls.PropTypes = {
    page: PropTypes.number.isRequired,
    setResultsPage: PropTypes.func.isRequired,
    repoToSearch: PropTypes.string.isRequired,
    numberOfRepos: PropTypes.number.isRequired
}

export default PageControls
