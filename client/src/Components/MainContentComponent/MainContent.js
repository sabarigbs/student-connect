import React, { Component } from 'react';

class MainContent extends Component {
    render() {
        return (
            <div className="main">
            
            <table className="striped">
                <caption><h5>Continous Assesment Test 1</h5></caption>
                <thead>
                    <th>
                        Course Code
                    </th>
                    <th>
                        Course Name
                    </th>
                    <th>
                        Marks
                    </th>
                    <th>
                        Verification
                    </th>
                    <th>
                        Remarks                       
                    </th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            14CSC01
                        </td>
                        <td>
                            Total Quality Management
                        </td>
                        <td>
                            100
                        </td>
                        <td>
                            <button className="btn">Verify</button>
                        </td>
                        <td>
                            <button className="btn red">
                                Remarks
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}

export default MainContent;
