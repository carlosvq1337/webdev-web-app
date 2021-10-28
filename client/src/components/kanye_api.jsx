import React from 'react';
class Kanye_rest_api extends React.Component {
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
        <>
            {kanye_quote}
        </>
            

        );
      }
    }
  }

export default Kanye_rest_api;

