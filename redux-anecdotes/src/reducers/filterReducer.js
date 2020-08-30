const initialSearchCharacter = ""

const filterReducer = (state = initialSearchCharacter, action) => {
    console.log('ACTION', action)
    switch (action.type) {
        case 'SET_SEARCH_CHARACTERS':
            return action.characters
        default:
            return state
    }
}

export const characterToSearch = characters => {
    return {
        type: 'SET_SEARCH_CHARACTERS',
        characters,
    }
}

export default filterReducer