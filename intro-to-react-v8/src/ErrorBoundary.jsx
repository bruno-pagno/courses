import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // Tipically would log on TrackJs or NewRelic
        console.error("ErrorBoundary component caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <h2>
                    An error occured.{" "}
                    <Link to="/">Click here to return to the home page</Link>
                </h2>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
