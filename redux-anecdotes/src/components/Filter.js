import React from 'react'
import { characterToSearch } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {
    const handleChange = (event) => {
        event.preventDefault()
        const search = event.target.value
        props.characterToSearch(search)
    }
    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

const ConnectedFilter = connect(null, { characterToSearch })(Filter)

export default ConnectedFilter