import  { PureComponet } from 'react'

class ErrorBoundary extends PureComponet {
    state = {hasError: false}
    static getDerivedStateFromError () {
        return {hasError: true}
    }

    render() {
        if(this.state.hasError){
           return <h1>Ops Error ):</h1>
        }
        return this.props.children(this.state.hasError)
    }
}

export default ErrorBoundary