import React from "react";
import AboutCard from '../Cards/AboutCard'

class About extends React.Component {
    render() {
      const text = "Personally while I absolutely hate looking at a block of work, sometimes thinking I'd never be able to finish it. \
                    I have found that tasks are often no where near as bad as I thought to complete. If the task is too hard \
                    to tackle, taking breaks is a good way to clear your head and stay present. If I found myself in a \
                    problem that occurred too often, i.e. Not putting in a ';', creating useful habits that solve the problem \
                    from occuring would be my solution. \
                    Continuing to improve beyond the level I'm currently at will be my next tough challenge I'm \
                    heading into. Core skills are more important than technical, if you can't actually get the job \
                    there's no point being able to do the task."
        const title = "About Me"
        const footer = "More of a reflection than an about me."

        return (
            <div className="mainComponent">
              <AboutCard 
              cardText={text}
              title={title}
              footerText={footer}
              />
            </div>
        )
    }
}

export default About