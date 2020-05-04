import React,{useState} from 'react'

export default function Input(props) {

    const [title,setTitle] = useState('');

    const handleTitle = (e)=>{
        setTitle(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        props.addtodo(title);
        setTitle('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter title" value={title} onChange={handleTitle} />
            <input type="submit" value="Add todo" />
        </form>
    )
}
