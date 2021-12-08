

import React from 'react'

function AppItem(props) {
    const { currentList, star } = props
    const { title, date, id, isActive } = currentList

    const bookMark = () => {
        star(id)
    }

    return (
        <li className="mr-3 mt-3 flex flex-row justify-between items-start card shadow p-2 border-2 border-gray-500 rounded-xl">
            <div className="flex flex-col justify-start">
                <h1 className="p-2 font-gray-400 font-medium text-left">{title}</h1>
                <p className="text-left pt-1 text-gray-600 pl-2">{`Date: ${date}`}</p>
            </div>
            <div className="flex flex-col justify-start">
                <button onClick={bookMark}>
                    {!isActive ? <img className="w-6 mr-2 mt-2" src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png" />
                        : <img className="w-6 mr-2 mt-2" src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png" />}
                </button>
            </div>


        </li>
    )
}

export default AppItem
