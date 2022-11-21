import { Component } from 'react';
import PropTypes from "prop-types";
import moment from 'moment';

class Clock extends Component {
    constructor(props) {
        super(props);
        const { item, onDelete } = props;

        this.id = item.id;
        this.name = item.name;
        this.timeZone = Number(item.timeZone);
        this.onDelete = onDelete;
        this.state = {
            timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
        };
    }

    componentDidMount() {
        this.intID = setInterval(() =>
            this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intID);
    }

    tick() {
        this.setState({
            timeZone: moment().utcOffset(this.timeZone).format('HH:mm:ss'),
        });
    }

    render() {
        return (
            <div>
                <p>{this.name}</p>
                <div className='clock'>
                    <p>{this.state.timeZone}</p>
                    <button
                        className='btn-del'
                        onClick={() =>
                            this.onDelete(this.id)}
                    >&#10008;
                    </button>
                </div>
            </div>
        )
    }
}

export default Clock;
