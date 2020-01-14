import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./brame-footer.scss";

class BrameFooter extends Component {
    render() {
        return (
            <div id="brame-footer">
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
        );
    }
}

export default BrameFooter;