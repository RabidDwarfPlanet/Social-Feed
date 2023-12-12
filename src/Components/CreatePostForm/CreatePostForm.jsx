import React, { useState } from "react";

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
            <div>
                <label>Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Post</label>
                <input type="text" onChange={(e) => setPostBody(e.target.value)}/>
            </div>
            <button className="submit">Submit Post</button>
        </form>
    );
}
 
export default CreatePostForm;