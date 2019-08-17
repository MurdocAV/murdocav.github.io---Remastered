import React from "react";
import AboutCard from '../Cards/AboutCard'

class Documentation extends React.Component {
    render() {
      const text = `DOCUMENTATION! --> Ha Ok basic API, something like Hire() returns json data of how much to pay me., WorkingCondition() json data of what I'll environments I'm comfortable in.`

        return (
            <div className="mainComponent">
              <AboutCard cardText={text}/>
            </div>
        )
    }
}

export default Documentation