import React, { Component } from "react";
import { IoIosStar, IoIosStarOutline} from 'react-icons/io';

class Rating extends Component {

    constructor(props){
        super(props);
        this.state = {rating: this.props.rating};
    }

    render() {
        return (
            <div>
                <h1>Rating: {this.state.rating}</h1>
                {
                    this.state.rating >= 1 ? (<IoIosStar/>) : (<IoIosStarOutline/>)
                }
                {
                    this.state.rating >= 2 ? (<IoIosStar/>) : (<IoIosStarOutline/>)
                }
                {
                    this.state.rating >= 3 ? (<IoIosStar/>) : (<IoIosStarOutline/>)
                }
                {
                    this.state.rating >= 4 ? (<IoIosStar/>) : (<IoIosStarOutline/>)
                }
                {
                    this.state.rating >= 5 ? (<IoIosStar/>) : (<IoIosStarOutline/>)
                }                
            </div>
        );
    }
}

export default Rating;