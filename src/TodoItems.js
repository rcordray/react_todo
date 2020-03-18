import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import './TodoItems.css';

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    delete(key){
        this.props.delete(key);
    }

    createTasks(item) {
        return <li onClick={() => this.delete(item.key)}
        key={item.key}>{item.text}</li>
    }

    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        return (
            <ul className="theList" data-tip='custom theme' data-for='delete'>
                {listItems}
            <ReactTooltip id='delete' place="left" type="light" effect="float" opacity="0.1" delayShow={500} clickable={true}>
                <span>Good Job! Click to clear! (❂‿❂)</span>
                </ReactTooltip>
            </ul>
        );
    }
}

export default TodoItems;