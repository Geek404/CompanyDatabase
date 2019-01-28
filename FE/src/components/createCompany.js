import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeEmployeeNumber = this.onChangeEmployeeNumber.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeContactPhone = this.onChangeContactPhone.bind(this);
        this.onChangeContactPerson = this.onChangeContactPerson.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            company_name: '',
            employee_number: '',
            address: '',
            contact_phone: '',
            contact_person: '',
            redirect: false
        }
    }
    onChangeCompanyName(e) {
        this.setState({
            company_name: e.target.value
        });
    }
    onChangeEmployeeNumber(e) {
        this.setState({
            employee_number: e.target.value
        })
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    onChangeContactPhone(e) {
        this.setState({
            contact_phone: e.target.value
        })
    }
    onChangeContactPerson(e) {
        this.setState({
            contact_person: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const client = {
            company_name: this.state.company_name,
            employee_number: this.state.employee_number,
            address: this.state.address,
            contact_phone: this.state.contact_phone,
            contact_person: this.state.contact_person
        };
        axios.post('https://frostberry-api.azurewebsites.net/api/company/create', client).then(() => this.setState({ redirect: true }));
        console.log(`The values are ${this.state.company_name}, ${this.state.employee_number}, ${this.state.address},${this.state.contact_phone}`)
        this.setState({
            company_name: '',
            employee_number: '',
            address: '',
            contact_phone: '',
            contact_person: '' 
        })
    }

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/load' />;
        }
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Company Name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.company_name}
                            onChange={this.onChangeCompanyName}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Employee Number: </label>
                        <input type="number"
                            className="form-control"
                            value={this.state.employee_number}
                            onChange={this.onChangeEmployeeNumber}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Contact Phone: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.contact_phone}
                            onChange={this.onChangeContactPhone}
                            required />
                    </div>
                    <div className="form-group">
                        <label>Contact Person: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.contact_person}
                            onChange={this.onChangeContactPerson}
                            required />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add New Company" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )

    }
}