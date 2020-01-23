import React from "react";
import ValuesTop from './ValuesTop'
import ValuesBottom from './ValuesBottom'


class About extends React.Component {
    render() {
        return (
            <div className="mainComponent">
                <ValuesTop />
                <ValuesBottom />
            </div>
        )
    }
}

export default About