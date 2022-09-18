import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"

function Users() {

    const [users, setUsers] = useState([]);
    const[isLoading,setLoading] = useState(false)

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get("https://6304ec13697408f7edbe42f1.mockapi.io/users")
        setUsers(users.data)
        setLoading(false)
    }

    let userDelete = async (id) => {
        try {
            let ask = window.confirm("Do you really want to delete?")
            if (ask) {
                await axios.delete(`https://6304ec13697408f7edbe42f1.mockapi.io/users/${id}`)
                alert("User Deleted")
                loadData();
            }
        } catch (error) {
            
        }
    }

    return (
        <div class="container-fluid">

            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create-User</Link>
            </div>

            {/* <!-- DataTales Example --> */}

            {
                isLoading ? <div class="text-center">
                    <button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>
                </div> : <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Sl.No</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    users.map((user, index) => {
                                        return <tr>
                                            <td>{index + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startdate}</td>
                                            <td>${user.salary}</td>
                                            <td>
                                                <Link to={`/portal/users/${user.id}`} className='btn btn-primary'>View</Link>&nbsp;
                                                <Link to={`/portal/users/edit/${user.id}`} className='btn btn-success'>Edit</Link>&nbsp;
                                                <button onClick={() => userDelete(user.id)}className='btn btn-danger'>Delete</button>&nbsp;
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            }
            

        </div>
    )
}

export default Users