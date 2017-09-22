import React, { Component } from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'
import Card, { CardContent } from 'material-ui/Card'
import { withStyles } from 'material-ui/styles'
import Snackbar from 'material-ui/Snackbar'

const appStyle = {
  Card: {
    marginTop: '10px',
    marginBottom: '10px'
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      publicKey: '',
      secretKey: '',
      keyStatus: {
        type: '',
        message: ``,
        color: ''
      },
      index: 0,
      clients: [],
      spinnerShow: false,
      snackbarShow: false,
      snackbarMessage: '',
      snackBarDuration: 6e3
    }
  }

  onShowSnackNotification ({message, duration}) {
    this.setState({
      snackbarShow: true,
      snackbarMessage: message,
      snackBarDuration: duration || 6e3
    })
  }

  snackBarCloseAction (event, reason) {
    this.setState({ snackbarShow: false })
  }

  onShowSpinner () {
    this.setState({spinnerShow: true})
  }

  onHideSpinner () {
    this.setState({spinnerShow: false})
  }

  render () {
    const { classes } = this.props

    const handleChange = (event, index) => {
      this.setState({ index })
    }

    return (
      <div>
        <Card className={classes.Card}>
          <CardContent>
            <p>Hello</p>
          </CardContent>
          <CardContent>
            <Tabs
              value={this.state.index}
              onChange={handleChange}
              indicatorColor='primary'
              fullWidth
            >
              <Tab label='Charges' />
              <Tab label='Clients' />
            </Tabs>
          </CardContent>
        </Card>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          open={this.state.snackbarShow}
          onRequestClose={(event, reason) => this.snackBarCloseAction(event, reason)}
          autoHideDuration={this.state.snackBarDuration}
          message={this.state.snackbarMessage} />
      </div>
    )
  }
}

export default withStyles(appStyle)(App)
