import React, { Component } from 'react';

export default class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    const res = await fetch('/api/students');
    const data = await res.json();
    this.setState({
      students: data,
    });
  }

  render() {
    const { students } = this.state;
    if (students.length) {
      console.log("this is our students on state: ", students);
      return <div>We got the students</div>;
    } else {
      return <div>Loading the students...</div>;
    }
  }
}
