import React from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'

const ProgressBars = (props) => {
const total = props.angular + props.vuejs +props.react;
const ngPerct = props.angular/total;
const vuejsPerct = props.vuejs/total;
const reactPerct = props.react/total;
const ap =((ngPerct*100).toFixed(2)).toString();
const vp =((vuejsPerct*100).toFixed(2)).toString();
const rp =((reactPerct*100).toFixed(2)).toString();
 
if(total !== 0){
  return (
  
    <div className="progress-group">
      <div className="progress">
      <span className="badge badge-pill badge-danger">Angular: { (ngPerct*100).toFixed(2)? (ngPerct*100).toFixed(2): null }%</span>

        <div
          className="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          style={{width: ap + '%'}}
        />
      </div>
      <div className="progress">
      <span className="badge badge-pill badge-success">Vuejs: { (vuejsPerct*100).toFixed(2)}%</span>

        <div
          className="progress-bar progress-bar-striped bg-sucess"
          role="progressbar"
          style={{width:vp +'%'}}
        />
      </div>
      <div className="progress">
      <span className="badge badge-pill badge-info">React: { (reactPerct*100).toFixed(2)}% </span>

        <div
          className="progress-bar progress-bar-striped bg-info"
          role="progressbar"
          style={{ width: rp + '%'}}
  
        />
      </div>
    </div>
  );
} 
  return  <p>Click icons to vote and see redux magic</p>;

  
};



function mapStateToProps(state) {
  // console.log('mapStateToProps', state);
  
return {
  angular: state.voteRec.angular,
  react: state.voteRec.react,
  vuejs: state.voteRec.vuejs
};
}

ProgressBars.propTypes = {
  angular: PropTypes.number.isRequired,
  vuejs: PropTypes.number.isRequired,
  react: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(ProgressBars);
