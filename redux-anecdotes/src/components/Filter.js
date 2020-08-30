import React from 'react'
import { characterToSearch } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = (props) => {
    const dispatch = useDispatch()
    const handleChange = (event) => {
        event.preventDefault()
        const search = event.target.value
        dispatch(characterToSearch(search))
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

export default Filter