import React from "react";

export default class FirstComponent extends React.Component{
    constructor(){
        super()
    }
    handlerClick = (title) => {

        const {handlerSetTitle} = this.props

        //console.log(title)
        //console.log(handlerSetTitle)
        const newTitle = prompt("Измените заголовок", title)
        handlerSetTitle(newTitle)

    }
    render() {

        const {
            title
        } = this.props

        return (
            <div>
                <div>
                    FirstComponent {title}
                </div>
                <span onClick={ () => { this.handlerClick(title) } }>
                    Click Me
                </span>
            </div>
        )
    }
}