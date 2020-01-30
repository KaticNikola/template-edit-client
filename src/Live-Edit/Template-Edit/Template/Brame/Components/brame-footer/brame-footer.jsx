import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./brame-footer.scss";

import { Consumer } from '../../../Template-Context/TemplateContext'
class BrameFooter extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { previewSize } = value;
                    return (
                        <div id={`brame-footer-${previewSize}`} >
                            <div className="container-fluid">
                                <Row>
                                    <Col>
                                        <span className="text-red">Terms & Conditions</span> - <span className="text-red">Privacy policy</span> - <span className="text-red">Brand Home</span>
                                    </Col>
                                    <Col>
                                        <span>© Copyright Brand 2019. All rights reserved.</span>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                    )
                }}
            </Consumer>

        );
    }
}

export default BrameFooter;