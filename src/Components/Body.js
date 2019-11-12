import React from 'react';
import './style.css';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="gradient  marginate40 col-md-12">
                    <div className="spaceBetweenCss">
                        <button className="btn btn-primary marginate10">Create</button>
                        <button className="btn btn-primary marginate10">Completed</button>
                    </div>
                </div>
                <div className="content">
                    <table class="table" >
                        <thead>
                            <tr>
                                <th scope="col" className="tableCss">Title</th>
                                <th scope="col" className="tableCss">Created At</th>
                                <th scope="col" className="tableCss">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}