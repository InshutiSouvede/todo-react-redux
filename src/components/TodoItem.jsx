import { useState } from "react"
import { useDispatch } from "react-redux"
import { cancelItem, removeItem } from "../features/todoList"

export default function TodoItem(props){
    const dispatch = useDispatch()
    return (
        <div  className={`flex justify-between text-gray-500 text-2xl ${props.done?"line-through":""}`}>
            <div className="flex gap-5 items-center">
            <input onChange={()=>dispatch(cancelItem({id:props.id}))} checked={props.done} type="checkbox" className="" id={props.id} name={props.name?props.name:"todoItem"} />
            <label htmlFor={props.id}>{props.description}</label>
            </div>
            <div onClick={()=>dispatch(removeItem({id:props.id}))} className="cursor-pointer bg-gray-200  w-10 h-10 rounded-3xl">
            <img className="m-auto mt-2"  src="./trash.svg" alt="trash" />
            </div>
            
        </div>
    )
}