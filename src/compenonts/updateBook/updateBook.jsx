import { Link, useNavigate, useParams } from "react-router-dom"
import React, { useState, useEffect } from "react"


const UpdateBook = () => {

    const navigate = useNavigate();
    const params = useParams()

    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [ISBN, setISBN] = useState('');
    const [releasedAt, setReleasedAt] = useState('');

    const [BookData, setBookData] = useState();


    async function updateMarks(e) {
        e.preventDefault();
        console.log(title, excerpt, ISBN, releasedAt);

        let result = await fetch(`http://localhost:3001/books/${params.id}`, {
            method: "put",
            headers: { 'Content-Type': 'application/json', 'x-api-key': JSON.parse(localStorage.getItem("token")) },
            body: JSON.stringify({ title, excerpt, ISBN, releasedAt })
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

            <h3>Update Book</h3>
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

                    <label>ISBN: </label>
                    <input
                        type='number'
                        placeholder="ISBN"
                        value={ISBN}
                        onChange={(e) => setISBN(e.target.value)}
                    /><br />

                    <label>ReleasedAt: </label>
                    <input
                        type='date'
                        placeholder="releasedAt"
                        value={releasedAt}
                        onChange={(e) => setReleasedAt(e.target.value)}
                    /><br /><br />


                    {/* <Link to="/getBook" > */}
                    <button className="btn" type="submit" onClick={updateMarks}>Update</button><br />
                    {/* </Link> */}

                    <span>
                        Do you want to go to <Link to="/getBook">Books page?</Link>
                    </span>
                </form>
            </div>


        </div>
    )
}

export default UpdateBook