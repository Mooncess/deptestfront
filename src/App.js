import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseData: []
    };
  }

  sendPostRequest = async () => {
    console.log(`${process.env.REACT_APP_BACKEND_URL}`);
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/create`);
      console.log('POST request sent');
    } catch (error) {
      console.error('Error sending POST request:', error);
    }
  };

  sendGetRequest = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}`);
      if (response.status === 200) {
        this.setState({ responseData: response.data });
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error sending GET request:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <button onClick={this.sendPostRequest}>Send POST Request</button>
            <button onClick={this.sendGetRequest}>Send GET Request</button>
          </p>
          <div className="response">
            {this.state.responseData.map((item) => (
              <div key={item.id}>
                <p>ID: {item.id}</p>
                <p>Date of Creation: {item.dateOfCreation}</p>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;