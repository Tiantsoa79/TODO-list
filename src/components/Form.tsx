
import "./Form.css"

const  Form = () => {
    return (
        <>
            <div className='form'>
                <div>
                    <form action="">
                        <input type="text" className="titlep" placeholder="Title..." /><br/>
                        <input type="text" className="description" placeholder="Description..."  /><br/>
                       <div className="check">
                        <input type="radio" name="list" id="todo" value="todo" />
                        <label htmlFor="todo">to do</label><br/>
                        <input type="radio" name="list" id="doing" value="doing" />
                        <label htmlFor="doing">doing</label><br/>
                        <input type="radio" name="list" id="done" value="done" />
                        <label htmlFor="done">done</label><br/>
                        </div>
                    </form>
                </div>
                <button type='submit' onClick={()=>{
                 
                }}>Add</button>
        </div>
        </>
    );
};

export default Form;