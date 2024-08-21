import React from "react";
import { logError } from "./error-logging-service";

export default class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };

    // bind reset function
    this.reset = this.reset.bind(this);
  }

  // define reset function
  reset() {
    this.setState({ error: null });
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="error">
          <h2>An error was detected!</h2>
          <button onClick={this.reset}>Reset</button>
        </div>
      );
    }
    return this.props.children;
  }
}
