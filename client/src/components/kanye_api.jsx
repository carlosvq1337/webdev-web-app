import React from 'react';
import './kanye_api.css'

class KanyeRestApi extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://api.kanye.rest/")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              kanye_quote: result.quote
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, kanye_quote } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div class = "wrapper">
            <div class = "ye-quote">
                {kanye_quote}
                <div class = "signature">
                - Ye
                </div>
            </div>
        </div>
            

        );
      }
    }
  }

export default KanyeRestApi;

