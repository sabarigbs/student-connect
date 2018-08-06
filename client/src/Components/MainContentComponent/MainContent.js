import React, { Component } from 'react';

class MainContent extends Component {


    render() {

        // let response = [
        //     {
        //         "student_name": "Srisibi C",
        //         "course_id": "14GET71",
        //         "course_name": "Total Quality Management ",
        //         "marks": 36
        //     },
        //     {
        //         "student_name": "Srisibi C",
        //         "course_id": "14CST71",
        //         "course_name": "Machine Learning ",
        //         "marks": 36
        //     },
        //     {
        //         "student_name": "Srisibi C",
        //         "course_id": "14CST72",
        //         "course_name": "Mobile Communication ",
        //         "marks": 26
        //     },
        //     {
        //         "student_name": "Srisibi C",
        //         "course_id": "14CSE11",
        //         "course_name": "Business Intelligence and its Application ",
        //         "marks": 41
        //     },
        //     {
        //         "student_name": "Srisibi C",
        //         "course_id": "14CSO07",
        //         "course_name": "E-Commerce ",
        //         "marks": 39
        //     },
        //     {
        //         "student_name": "Srisibi C",
        //         "course_id": "14ITO04",
        //         "course_name": "Mobile Application Development",
        //         "marks": 36
        //     }
        // ];

        let row = this.props.marks.map((res)=>{
            return <tr>
                <td>
                    {res.course_id}
                </td>
                <td>
                    {res.course_name}
                </td>
                <td>
                    {res.marks}
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
        });


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
                    {/* <tr>
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
                    </tr> */}
                    {row}
                </tbody>
            </table>
        </div>
        );
    }
}

export default MainContent;
