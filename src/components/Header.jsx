import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';
import ActionBar from './ActionBar';

const DEFAULT_TITLE = 'Chapter';

export default React.createClass({
  displayName: 'Header',
  mixins: [PureRenderMixin],
  propTypes: {
    title: React.PropTypes.string,
    backButton: React.PropTypes.bool
  },
  goBack: function() {
    hashHistory.goBack();
  },
  render: function() {
    const title = this.props.title || DEFAULT_TITLE;
    const addPreTitle = title !== DEFAULT_TITLE;

    return <header>
      { this.props.backButton ?
        <button className="back" onClick={this.goBack}>&lt;</button> : ''
      }
      { addPreTitle ?
        <p>{DEFAULT_TITLE}</p> : ''
      }
      <h1>{title}</h1>
      <ActionBar>
        {this.props.children}
      </ActionBar>
    </header>
  }
});
