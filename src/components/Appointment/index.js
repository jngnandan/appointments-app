import { v4 as uuidv4 } from 'uuid';

import React, { Component } from 'react'
import AppItem from '../AppItem';

const appoinmentList = [
    {
        id: uuidv4(),
        title: "cool",
        date: "20/10/2021",
        isActive: false,
    },
]

class Appoinment extends Component {
    state = {
        currentList: appoinmentList,
        title: '',
        date: ''
    }
    addAppointment = (event) => {
        event.preventDefault()

        const { currentList, title, date } = this.state

        const newAppointment = {
            id: uuidv4(),
            title,
            date,
            isActive: false,
        }

        this.setState(prevState => ({
            currentList: [...prevState.currentList, newAppointment],
            title: '',
            date: ''
        }))
    }

    titleInput = (event) => {
        this.setState({ title: event.target.value })
    }

    dateInput = (event) => {
        this.setState({ date: event.target.value })
    }

    star = (id) => {
        this.setState({ isActive: true })
    }

    render() {
        const { currentList } = this.state
        return (
            <div className="flex flex-row justify-center items-center h-screen text-center">
                <div className="p-5">
                    <form className="">
                        <h1 className="text-3xl font-bold text-left pb-4">Add Appoinment</h1>
                        <p className="text-gray-500 text-left">Say something about 4.0 Technologies</p>

                        <div className="flex flex-row justify-center items-center">
                            <div className="flex flex-col justify-start">
                                <label className="text-left text-gray-500 text-sm mb-1 mt-2">
                                    TITLE <br />
                                    <input type="text" onChange={this.titleInput} className="border-2 border-gray-500 py-1.5 px-6 rounded " placeholder="Your Comment" />
                                </label>

                                <label className="text-left text-gray-500 text-sm">
                                    DATE <br />
                                    <input type="date" onChange={this.dateInput} className="border-2 border-gray-500 py-1.5 px-6 rounded " placeholder="Your Comment" />

                                </label>

                                <button type="submit" onClick={this.addAppointment} className="bg-violet-500 rounded py-2 px-3 mt-3 text-white">Add</button>
                            </div>
                            <div>
                                <img alt="illustration" className="w-56 pl-3" src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" />
                            </div>
                        </div>
                    </form>
                    <ul className="flex flex-wrap justify-sart items-center">
                        {currentList.map(eachItem => (
                            <AppItem star={this.star} currentList={eachItem} key={eachItem.id} />
                        ))}
                    </ul>

                </div >
            </div >
        )
    }
}

export default Appoinment
