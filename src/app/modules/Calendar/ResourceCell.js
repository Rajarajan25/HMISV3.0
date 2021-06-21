import React from 'react';

class ResourceCell extends React.PureComponent {
  render() {
    const { data: { color, text, data: { avatar, age, discipline } } } = this.props;
    return (
      <div className="dx-template-wrapper">
        <div className="group-staff">
          <div className="avatar">
            <img src={avatar} />
          </div>
          <div className="infos" style={{ color: color }}>
            <span>{text}</span>
            <span>Age: {age}</span>
            <span>{discipline}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceCell;
