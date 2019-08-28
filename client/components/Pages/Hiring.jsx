import React from "react";
import HireCard from '../Cards/HireCard'

class Email extends React.Component {
    render() {
      const text = `Please contact me via email to arrange a time to chat about your project needs from design to implementation. If your request is urgent please specifiy so.`

        return (
            <div className="mainComponent">
              <div className="hireCard">
                <HireCard cardText={text}/>
              </div>
            </div>
        )
    }
}

export default Email