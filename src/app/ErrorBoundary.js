import React from "react";
import { DevConsoleLog } from "./SiteUtill";
 class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { error };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      //DevConsoleLog(error, errorInfo);
    }
  
    render() {
      const {error} = this.state;
      if (error) {
        // You can render any custom fallback UI
        return <this.props.FallbackComponent error={error}/>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;