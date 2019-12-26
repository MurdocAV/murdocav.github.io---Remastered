import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Paper from '@material-ui/core'
 

const Item = function (props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]
 
    return (
        <Carousel>
            {
                items.map( item => {
                    <Item item={item}/>
                })
            }
        </Carousel>
    )
}