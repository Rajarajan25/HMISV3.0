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
          <div className="infos">
            <div className="group-name">
              <span>{text},</span><span className="d-none">Age: {age}</span>
            </div>
            <span>{discipline}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ResourceCell;
