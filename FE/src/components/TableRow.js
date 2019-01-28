import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import icons from 'glyphicons'

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.delete('https://frostberry-api.azurewebsites.net/api/company/delete/' + this.props.obj.id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.company_name}</td>
                <td>{this.props.obj.employee_number}</td>
                <td>{this.props.obj.address}</td>
                <td>{this.props.obj.contact_phone}</td>
                <td>{this.props.obj.contact_person}</td>
                <td> <Link to={"/update/" + this.props.obj.id} className="btn btn-primary">{icons.pencil} Edit</Link></td>
                <td><button onClick={(e) => { if (window.confirm('Are you sure you want to delete this company?')) { this.delete() } }} className="btn btn-danger">{icons.cross} Delete</button></td>
            </tr>
        );
    }
}

export default TableRow;