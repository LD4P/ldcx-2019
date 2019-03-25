import React from 'react';
import './App.css';

const App = () => (<div>
  <div class="App-header">
    <h3>LDCX Lightning Talk 2019</h3>
    <h1>Sinopia.io</h1>
    <h4>Jeremy Nelson, Stanford University Libraries</h4>
  </div>
  <div>
    <p className="App-paragraph">Sinopia is a linked data creation environment sponsored by the
      Linked Data for Production
      (LD4P2), funded by the Andrew W. Mellon Foundation, to enable library professionals
      to do original and copy cataloging on a wide range of
      collections and contexts. Sinopia's codebase orginated from two Library of Congress projects;
      the <a href="http://bibframe.org/profile-edit/#/profile/list">Profile Editor</a>&nbsp;
      and <a href="http://bibframe.org/bfe/index.html">BIBFRAME Editor (BFE)</a>.
    </p>
    <ul>
      <li>Join LD4P Slack channel: ld4.slack.com</li>
      <li>Main Github repositories for the project:
        <ul>
          <li>Technical Documentation and Resource Template Schemas <a href="https://github.com/LD4P/sinopia">https://github.com/LD4P/sinopia</a></li>
          <li>Sinopia Linked Data Editor <a href="https://github.com/LD4P/sinopia_editor">https://github.com/LD4P/sinopia_editor</a></li>
          <li>Sinopia Profile Editor <a href="https://github.com/LD4P/sinopia_profile_editor">https://github.com/LD4P/sinopia_profile_editor</a></li>
          <li>Sinopia Sample Profiles <a href="https://github.com/LD4P/sinopia_sample_profiles">https://github.com/LD4P/sinopia_sample_profiles</a></li>
          <li>Sinopa Server <a href="https://github.com/LD4P/sinopia_server">https://github.com/LD4P/sinopia_server</a></li>
        </ul>
      </li>
      <li>Monitor Sinopia Homepage at <a href="http://sinopia.io/">Sinopia.io</a> for
          the latest news.</li>
    </ul>
  </div>
</div>)

export default App;
