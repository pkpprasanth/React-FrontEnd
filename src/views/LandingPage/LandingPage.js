import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Datafull = props => (
    <tr>
      <td>{props.question.name}</td>
      <td>{props.question.position}</td>
      <td>{props.question.salary}</td>
      <td>
        <Link to={"/edit/"+props.question._id}>Edit</Link> | <a href="#" onClick={() => { props.deleteEmployee(props.question._id) }}>Delete</a>
      </td>
    </tr>
  )
export default class LandingPage extends Component {
constructor(props){
    super(props)
    this.state = {data: []};

}

  componentDidMount(){
    axios.get('http://localhost:4000/employees')
            .then(response => {
                    this.setState({data:response.data})
                    console.log(this.state.data)
            })
  }

  deleteQuestion(id) {
    axios.delete('http://localhost:4000/employees/'+id)
      .then(response => { console.log(response.data)
        this.setState({data: this.state.data.filter(el => el._id !== id)})
});
  }
  employeeList() {
    return this.state.data.map(currentdata => {
      return <Datafull question={currentdata} deleteEmployee={this.deleteQuestion} key={currentdata._id}/>;
    })
  }
  render() {
        return (
            <div>
            <h3>question list</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Question</th>
                  <th>Position</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                { this.employeeList() }
              </tbody>
            </table>
          </div>
        )
    }
}
