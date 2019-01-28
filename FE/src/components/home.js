import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center">Asp.NET Web.API and React</h2>
                <h4 className="text-left">Database : MS SQL Server 2016</h4>
                <h4 className="text-left">ORM : Entity Framework</h4>
                <h4 className="text-left">Cloud Hosting : Azure App Service</h4>
                <h4 className="text-left">Code Versioning : GitHub</h4>
            </div>
        );
    }
}
export default Home;
