
import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const defaultSettings = {
  javascript: "console.log('App loaded!')\n",
  assets:     "https://code.jquery.com/jquery-3.2.1.min.js\n",
  html:       "<div>\n  Welcome, {{me.name}}!\n  Reading ticket #{{tab.id}}.\n</div>\n",
  css:        "body {\n  color: #000;\n  background-color: #FFF;\n}\n"
};
/* eslint-enable */


export class ScreenSettings extends React.Component {

  static propTypes = {
    finishInstall: PropTypes.func.isRequired,
    installType: PropTypes.string.isRequired,
    settings: PropTypes.array.isRequired,
    values: PropTypes.object.isRequired,
    settingsForm: PropTypes.func.isRequired,
    dpapp: PropTypes.object.isRequired
  };

  constructor() {
    super();
    this.state = {
      uiState: "loading",
      values: null
    };
  }

  onSettings(settings) {
    const { finishInstall } = this.props;
    finishInstall({settings}).then(({ onStatus }) => onStatus())
  }

  componentDidMount()
  {
    const { installType, dpapp } = this.props;
    if (installType === "update") {
      dpapp.storage.getAppStorage(['settings']).then(({settings : values}) => {
        this.setState({ uiState: "ready", values })
      })
    } else {
      this.setState({ uiState: "ready", values: {...defaultSettings, ...this.props.values} })
    }
  }

  render() {
    const { settings, settingsForm: SettingsForm } = this.props;
    const { uiState, values } = this.state;

    if (uiState === "ready") {
      let formRef;
      return (
        <div className={'settings'}>
          <SettingsForm
            settings={settings}
            values={values}
            ref={ref => formRef = ref}
            onSubmit={this.onSettings.bind(this)}
          />
          <button className={'btn-action'} onClick={() => formRef.submit()}>Update Settings</button>
        </div>
      );
    }

    return null;
  }
}
