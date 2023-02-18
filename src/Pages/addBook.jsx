import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react"


const AddBook = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [userId, setUserId] = useState('');
    const [ISBN, setISBN] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [releasedAt, setReleasedAt] = useState('');

    const [BookData, setBookData] = useState();




    const createBook = async (e) => {
        e.preventDefault();
        console.log(title, excerpt, userId, ISBN, category, subcategory, releasedAt);

        let result = await fetch('http://localhost:3001/books', {
            method: "post",
            headers: { 'Content-Type': 'application/json', 'x-api-key': JSON.parse(localStorage.getItem("token")) },
            body: JSON.stringify({ title, excerpt, userId, ISBN, category, subcategory, releasedAt })
        });

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            console.log(result.data, "**");
            setBookData(result.data)
            navigate('/getBook')
        }
    }



    return (
        <div className="link">

            <h3>Create Book</h3>
            <Link to="/" >LogOut</Link>

            <div className="login-input">
                <form>
                    <label>Title: </label>
                    <input
                        type='text'
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /><br />

                    <label>Excerpt: </label>
                    <input
                        type='text'
                        placeholder="excerpt"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                    /><br />

                    <label>UserId: </label>
                    <input
                        type='text'
                        placeholder="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    /><br />

                    <label>ISBN: </label>
                    <input
                        type='number'
                        placeholder="ISBN"
                        value={ISBN}
                        onChange={(e) => setISBN(e.target.value)}
                    /><br />

                    <label>Category: </label>
                    <input
                        type='category'
                        placeholder="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    /><br />

                    <label>Subcategory: </label>
                    <input
                        type='text'
                        placeholder="subcategory"
                        value={subcategory}
                        onChange={(e) => setSubcategory(e.target.value)}
                    /><br />

                    <label>ReleasedAt: </label>
                    <input
                        type='date'
                        placeholder="releasedAt"
                        value={releasedAt}
                        onChange={(e) => setReleasedAt(e.target.value)}
                    /><br /><br />


                    {/* <Link to="/getBook" > */}
                    <button className="btn" type="submit" onClick={createBook}>Submit</button><br />
                    {/* </Link> */}

                    <span>
                        Do you want to go to <Link to="/getBook">Books page?</Link>
                    </span>
                </form>
            </div>


        </div>
    )
}

export default AddBook