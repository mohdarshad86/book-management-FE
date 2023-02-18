import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const Books = () => {

    let [BookData, setBookData] = useState([])
    let [ID, setID] = useState("")

    console.log(BookData);

    useEffect(() => { getBooks() }, [])

    const getBooks = async () => {
        let id = JSON.parse(localStorage.getItem("userId"))
        console.log(id);
        let result = await fetch(`http://localhost:3001/books`,
            {
                headers: {
                    'x-api-key': JSON.parse(localStorage.getItem("token"))

                }
            })

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            console.log(result.data, "**");
            setBookData(result.data)
        }
    }



    const deleteBooks = async (ID) => {
        let id = JSON.parse(localStorage.getItem('userId'))
        let result = await fetch(`http://localhost:3001/books/${ID}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': JSON.parse(localStorage.getItem("token"))
            }
        })

        result = await result.json()

        if (result.status === false) {
            alert(result.message)
        } else {
            alert(result.message)
            getBooks()
        }
    }



    async function searchBook() {


        let result = await fetch(`http://localhost:3001/books/${ID}`, {
            method: "get",
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': JSON.parse(localStorage.getItem("token"))
            }
        })
        result = await result.json()

        if (result.status == false) {
            alert(result.message)
            setBookData([])
        } else {
            alert(result.message)
            setBookData(result.data)
        }
    }





    return (

        <div>

            <div className='search'>
                <input
                    type="text"
                    placeholder='Book ID'
                    value={ID}
                    onChange={(e) => setID(e.target.value)} />

                <button onClick={searchBook}>Search</button>
                <button onClick={getBooks}>All Books</button>
            </div>



            <ul>
                <li><h3>Get All Books</h3></li>
                <li><Link to="/" >LogOut</Link></li>
                <li><Link to="/addBook" >Create Book</Link></li>
            </ul>

            <div>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Excerpt</th>
                        <th>Category</th>
                        <th>Reviews</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {BookData.length > 0 ?

                        BookData.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.title}</td>
                                    <td>{val.excerpt}</td>
                                    <td>{val.category}</td>
                                    <td>{val.reviews}</td>
                                    <td><Link to={'/updateBook/' + val._id}  ><div>Update</div></Link></td>
                                    <td><button onClick={() => deleteBooks(val._id)}>Delete</button></td>
                                </tr>
                            )
                        }) : <h1>No Books Available!</h1>
                    }
                </table>


            </div>

        </div>
    )

}

export default Books