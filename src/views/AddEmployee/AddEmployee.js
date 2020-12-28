import React, { useState} from 'react'
import axios from 'axios';




function AddEmployee(props) {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [salary, setSalary] = useState("");
  


    const handleChangeName = (event) => {
        setName(event.currentTarget.value)
    }
    const handleChangeSalary = (event) => {
        setSalary(event.currentTarget.value)
    }

    const handleChangePosition = (event) => {
        setPosition(event.currentTarget.value)
    }



    const onSubmit = (event) => {

        event.preventDefault();

        if (name === "" || position === "" || salary==="") {
            return alert('Please first fill all the fields')
        }

        const variables = {
            name: name,
            position: position,
            salary:salary
            
        }

        axios.post('http://localhost:4000/employees/', variables)
            .then(response => {
                console.log(response)
                if (response.status==200) {
                    alert('Employee Uploaded Successfully')
                    props.history.push('/')
                } else {
                    alert('Failed to upload Employee')
                }
            })

    }


    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>

            <form onSubmit={onSubmit}>
                <div style={{ padding: '2%'  }}>
                <label>name</label>
                <input type="text"
                    onChange={handleChangeName}
                    value={name}
                />
                <br /><br />
                <label>Position</label>
                <input type="text"
                    onChange={handleChangePosition}
                    value={position}
                />
                <br /><br />
                 <label>Salary</label>
                <input type="text"
                    onChange={handleChangeSalary}
                    value={salary}
                />
                <br /><br />
                <button style={{ textAlign: 'center', marginLeft: '20rem' }}
                      type="button" size="large" onClick={onSubmit}>
                    Submit
                </button>
            </div>
            </form>
        </div>
    )
    }

export default AddEmployee
