import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Edituser() {

    const params = useParams();
    const navigate = useNavigate();
        const formik = useFormik({
            initialValues : {
                 name : "",
                 position : "",
                 office : "",
                 age : "",
                 startDate : "",
                 salary : "",
            },
            validate : (values) => {

                let errors = {}
                if(values.name === ""){
                    errors.name = "Please enter name"
                }

                if(values.name.length<=5){
                    errors.name = "name must be greater than 5 letters"
                }

                if(values.position === ""){
                    errors.position = "Please enter position"
                }

                return errors;
            },
            onSubmit : async (values) => {
                await axios.put(`https://6304ec13697408f7edbe42f1.mockapi.io/users/${params.id}`,values)
                alert("User edited")
                navigate("/portal/users");
            }
        })

        useEffect(() => {
                   loadUser()
        },[])

        let loadUser = async () => {
            try {
                let user = await axios.get(`https://6304ec13697408f7edbe42f1.mockapi.io/users/${params.id}`)
                formik.setValues({
                name : user.data.name,
                position : user.data.position,
                office : user.data.office,
                age : user.data.age,
                startDate : user.data.startdate,
                salary : user.data.salary,
                })
                
            } catch (error) {
                
            }
        }

    return (
        <div className='container'>
            <h1>Edit User</h1><br/>
                    <form onSubmit={formik.handleSubmit}>
                    <label>Name</label>
                    <input className='form-control' type={"text"} value = {formik.values.name} onChange = {formik.handleChange} name = "name"></input><span style={{color : "red"}}>{formik.errors.name}</span><br/>
                    <label>Position</label>
                    <input className='form-control' type={"text"} value = {formik.values.position} onChange = {formik.handleChange} name = "position"></input><span style={{color : "red"}}>{formik.errors.position}</span><br/>
                    <label>Office</label>
                    <input className='form-control' type={"text"} value = {formik.values.office} onChange = {formik.handleChange} name = "office"></input><br/>
                    <label>Age</label>
                    <input className='form-control' type={"text"} value = {formik.values.age} onChange = {formik.handleChange} name = "age"></input><br/>
                    <label>Start date</label>
                    <input className='form-control' type={"text"} value = {formik.values.startDate} onChange = {formik.handleChange} name = "startDate"></input><br/>
                    <label>Salary</label>
                    <input className='form-control' type={"text"} value = {formik.values.salary} onChange = {formik.handleChange} name = "salary"></input><br/>
                    <input className='btn btn-info' type={"submit"} value="Submit" disabled={!formik.isValid}></input>
                    </form>
        </div>
    )
}

export default Edituser;