'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Tabs from './Tabs';
import ProxyLoggingForm from './misc/ProxyLoggingForm';
import ConnectionForm from './misc/ConnectionForm';
import OtherForm from './misc/OtherForm';


export default class ProxyMisc extends React.PureComponent {
  render() {
    const { type } = this.props;

    return (
      <div>
        <Navbar type={type} path="/misc" />
        <div className="container">
          <Tabs type={type} path="/misc" />

          <h2>Console output & logging</h2>
          <ProxyLoggingForm
            os={this.props.os}
            logFile={this.props.logFile || ''}
            accessLog={this.props.accessLog || ''}
            syslog={this.props.syslog}
            colors={this.props.colors}
            verbose={this.props.verbose}
            update={this.props.update}
          />

          <h2>Connection recovery</h2>
          <ConnectionForm retries={this.props.retries} retryPause={this.props.retryPause} update={this.props.update} />

          <h2>Other options</h2>
          <OtherForm donate={this.props.donate} background={this.props.background} update={this.props.update} />

          <hr />

          <nav>
            <ul className="pager">
              <li><Link to={`/${type}/network`}>Previous</Link></li> <li><Link to={`/${type}/result`}>Next</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
