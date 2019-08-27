import React from "react";
import EmailCard from '../Cards/EmailCard'

class Email extends React.Component {
    render() {
      const text = `azaan.virk@gmail.com`

        return (
            <div className="mainComponent">
              <div className="emailCard">
                <EmailCard cardText={text}/>
              </div>
            </div>
        )
    }
}

export default Email