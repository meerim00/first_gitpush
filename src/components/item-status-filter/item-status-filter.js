import React, { Component } from 'react';

import './item-status-filter.css';

 export default class ItemStatusFilter extends Component{   // =================== классовый компонент 
        state= {
                buttons: [
            { name: "all", label: "All" },
            { name: "active", label: "Active" },
            { name: "done", label: "Done" },
        ],
     }

renderItems(items) {
        return items.map(({ name, label }) => {
                const runFilter = () => this.props.onFilterChange(name)

                const isActive = name === this.props.filter;
                
                const classNames =
                "btn " + (isActive ? "btn-info" : "btn-outline-secondary");

                return (
                        <button
                        key={name}
                        type="button"
                        onClick={runFilter}
                        className={classNames}
                        >
                      {label}
                        </button>
                );
        });
}
render() {
        const buttons = this.renderItems(this.state.buttons);
        return <div className="btn-group"> {buttons}</div>
}

render() {
        const copyButton = this.state.buttons.map((e) => {
                return(
                        <button className=' btn btn-outline-secondary' key={e.name}>{e.label}</button>
                )
        })
        return (
                <div className='btn-group'>
                        {copyButton}
                </div>
        );
}
};

