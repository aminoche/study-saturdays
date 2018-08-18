import React, { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    console.log('Mounting ');
    axios
      .get('/student')
      .then(students => this.setState({ students: students.data }))
      .then(() => console.log(this.state));
  }
  render() {
    const students = this.state.students;
    return (
      <tr>
        {students.map(student => (
          <div key={student.id}>
            <td>{student.fullName}</td> <br />
          </div>
        ))}
      </tr>
    );
  }
}
