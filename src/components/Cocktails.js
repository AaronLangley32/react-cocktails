import React from 'react'

const Cocktails = (props) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-5">
            <img className="w-full" src={props.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{props.name}</div>
            </div>
        </div>
    )
}

export default Cocktails
