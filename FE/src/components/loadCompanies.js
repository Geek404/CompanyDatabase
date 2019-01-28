import React, { Component } from 'react';
import icons from 'glyphicons'
import axios from 'axios';
import TableRow from './TableRow';

export default class Load extends Component {

    constructor(props) {
        super(props);
        this.state = { companies: [] };
    }
    componentDidMount() {
        axios.get('https://frostberry-api.azurewebsites.net/api/company/load')
            .then(response => {
                this.setState({ companies: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.companies.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div style={{ marginTop: 40 }}>
                <h3 align="center">{icons.office} Company List</h3>
                <table className="table table-dark" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Company Name</th>
                            <th>Number of Employees</th>
                            <th>Address</th>
                            <th>Contact Phone</th>
                            <th>Contact Person</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}