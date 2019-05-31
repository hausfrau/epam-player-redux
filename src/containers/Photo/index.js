import React from 'react';
import {connect} from 'react-redux';

const Photo = ({photo}) => <div>{photo.src}</div>
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        photo: state.photos.find(photo => photo.id === Number(ownProps.params.id))
    };
};

export default connect(mapStateToProps)(Photo);