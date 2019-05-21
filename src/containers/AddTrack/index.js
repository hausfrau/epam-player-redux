import React from 'react';
import {connect} from 'react-redux';
import {addTrack} from '../../actions';
import './addTrack.css';

const AddTrack = ({dispatch}) => {
    let name;
    let duration;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!name.value.trim()) {
                    return;
                }
                dispatch(addTrack({
                    id: Math.random().toString(16).slice(-4),
                    name: name.value,
                    duration: duration.value
                }));
                name.value = '';
                duration.value = '';
            }}>
                <fieldset className="fieldset">
                    <legend>Add a new track</legend>
                    <label htmlFor="name">Name:</label>
                    <input ref={node => name = node} type="text" id="name" placeholder="Track's name" required/>
                    <label htmlFor="duration">Duration:</label>
                    <input ref={node => duration = node} type="time" name="duration" pattern="\d\d:\d\d" required/>
                    <button type="submit">
                        Add track
                    </button>
                </fieldset>
            </form>
        </div>
    )
};

export default connect()(AddTrack)