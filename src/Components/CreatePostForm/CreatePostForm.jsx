import React, { useState } from "react";
import './CreatePostForm.css'

const CreatePostForm = ({onCreatePost}) => {
    const [name, setName] = useState("");
    const [postBody, setPostBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name, 
            postBody
        }

        onCreatePost(formData)
    }

    return ( 
        <form className="form-class" onSubmit={handleSubmit}>
            <div className="input-contatiner">
                <div className="text-container">
                    <label >Name</label>
                    <input className="input" type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="text-container">
                    <label>Post</label>
                    <textarea className="input" type="text" rows="10" onChange={(e) => setPostBody(e.target.value)}>
                    </textarea>
                </div>
            </div>
            <button className="submit">Submit Post</button>
        </form>
    );
}
 
export default CreatePostForm;