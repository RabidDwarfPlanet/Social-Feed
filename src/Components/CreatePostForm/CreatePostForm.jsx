const CreatePostForm = ({}) => {
    
    return ( 
        <form className="form-class">
            <div>
                <label>Name</label>
                <input type="text" />
            </div>
            <div>
                <label>Post</label>
                <input type="text" />
            </div>
        </form>
    );
}
 
export default CreatePostForm;