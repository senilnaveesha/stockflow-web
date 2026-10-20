import React from 'react'

function Button() {
    return (
        <button type='button' onClick={() => alert('hi')} class="border-2 border-solid border-blue-500 outline-offset-2 bg-gray-400">
            Submit</button>
    )
}

export default Button