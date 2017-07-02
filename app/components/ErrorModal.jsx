import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

export default class ErrorModal extends React.Component {

  static defaultProps() {
    return {
      title: 'Error'
    }
  }

  componentDidMount() {
    const {title, message} = this.props;

    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
      <h4>{title}</h4>
      <p>{message}</p>
      <p>
        <button className="button hollow" data-close="">
          Okay
        </button>
      </p>
    </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render(){

    return (
      <div>

      </div>
    )
  }
}

ErrorModal.propTypes = {
  title: React.PropTypes.string,
  message: React.PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
  title: 'Error'
};
