import React from "react";
import HireCard from '../Cards/HireCard'

class Email extends React.Component {
    render() {
      const text = `Please contact me via email to arrange a time to chat about the project needs from design to implementation. If your request is urgent please specifiy so.`

        return (
            <div className="mainComponent">
              <HireCard cardText={text}/>
            </div>
        )
    }
}

export default Email