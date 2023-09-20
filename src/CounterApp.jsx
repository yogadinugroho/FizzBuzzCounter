import React from "react";
import { createRoot } from "react-dom/client";

class CounterApp extends React.Component{
    constructor(props){
        super(props);

        // inisialisasi state
        this.state = {
            count: 0
        }
    }

    // event handler
    onIncreaseEventHandler(){
        this.setState(() => {
            return {
                count: previousState.count + 1
            }
        })
    }

    onResetEventHandler(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }


    render(){
        return (
            <div>
                <p>TODO: Selesaikan component-nya</p>
            </div>
        )
    }
}

export default CounterApp;