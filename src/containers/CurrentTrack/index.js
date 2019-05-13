import React, {Component} from 'react';

class CurrentTrack extends Component {
  render() {
    const { name, duration, id } = this.props.currentTrack;

    return (
      <div>
        {id > 0 ? `Current track is ${name} ${duration}` : 'Track is not selected'}
      </div>
    )
  }
}

export default CurrentTrack;
