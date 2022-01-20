import React from 'react';
import { Component } from 'react';
import { ThreeView } from '../../../engine/threeView';
import './threeComponent.css'

export class ThreeComponent extends Component {
    private canvasRef: React.RefObject<HTMLCanvasElement>;
    private threeView: any;

    constructor(_props: any) {
        super(_props);
        this.canvasRef = React.createRef();
    }

    // ******************* COMPONENT LIFECYCLE ******************* //
    componentDidMount() {
        // Get canvas, pass to custom class
        const canvas = this.canvasRef.current;
        if(!canvas) return;
        this.threeView = new ThreeView(canvas);

        // Init any event listeners
        window.addEventListener('mousemove', this.mouseMove);
        window.addEventListener('resize', this.handleResize);
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        // Pass updated props to 
        // const newValue = this.props.whateverProperty;
        // this.threeView.updateValue(newValue);
    }

    componentWillUnmount() {
        // Remove any event listeners
        window.removeEventListener('mousemove', this.mouseMove);
        window.removeEventListener('resize', this.handleResize);
    }

    // ******************* EVENT LISTENERS ******************* //
    mouseMove = (event: any) => {
        this.threeView.onMouseMove();
    }

    handleResize = () => {
        this.threeView.onWindowResize(window.innerWidth - 272, window.innerHeight);
    };

    render() {
        return (
            <div className="threeComponent">
                <canvas ref={this.canvasRef} width={window.innerWidth - 272} height={window.innerHeight}/>
            </div>
        );
    }
}