export class AnimationFrame {

    callbackTime: DOMHighResTimeStamp | null;
    frameCount: number;
    fps: number;
    fpsInterval: number;
    previousCallbackTimeStamp: DOMHighResTimeStamp | null;
    shouldStopAnimation: boolean;
    startTime: DOMHighResTimeStamp | null;

    constructor(fps: number) {
        if(Math.abs(fps) === 0) { fps = 1; }

        this.fps = fps; 
        this.fpsInterval = 1000 / fps;
        this.frameCount = 0;

        this.callbackTime = null;
        this.previousCallbackTimeStamp = null;
        this.shouldStopAnimation = false;
        this.startTime = null;
    }

    public animate(
        requestTime?: DOMHighResTimeStamp,
        motionFunction?: (frameData?: AnimationFrame) => void): number | null {

            if(this.shouldStopAnimation) { return null; }
            if(!requestTime) { requestTime = window.performance.now(); }

            this.callbackTime = requestTime;

            if(this.isStartOfAnimation()) {
                this.startTime = this.callbackTime;
                this.previousCallbackTimeStamp = this.callbackTime;
            }

            const id = window.requestAnimationFrame(this.animate);
            const elapsed = this.getElapsedTimeBetweenCallbacks();

            if(elapsed > this.fpsInterval) {
                this.previousCallbackTimeStamp = this.callbackTime - (elapsed % this.fpsInterval);

                if(motionFunction) { motionFunction(this); }

                ++this.frameCount;
            }

            return id;
    }

    public cancelAnimation(animationId: number) : void {
        window.cancelAnimationFrame(animationId);
        this.shouldStopAnimation = true;
    }

    public getDiagnosticStatus() : string {
        const timeInSeconds = Math.round(this.getElapsedTimeOfAnimation() / 1000 * 100) / 100;
        const currentFps = this.getCurrentFps();

        return `elapsed time: ${timeInSeconds} seconds @ ${currentFps} fps`;
    }

    public getCurrentFps() : number {
        const elapsedTime = this.getElapsedTimeBetweenCallbacks();
        if (Math.abs(elapsedTime) === 0) { return 0; }
        if (!this.frameCount) { return 0; }

        return Math.round(1000 / (elapsedTime / this.frameCount) * 100) / 100;
    }

    public getElapsedTimeOfAnimation(): DOMHighResTimeStamp {
        if(!this.callbackTime) { return 0; }
        if(!this.startTime) { return 0; }

        return this.callbackTime - this.startTime;
    }

    private getElapsedTimeBetweenCallbacks() : number {
        if(!this.callbackTime) { return 0; }
        if(!this.previousCallbackTimeStamp) { this.previousCallbackTimeStamp = 0; }

        return this.callbackTime - this.previousCallbackTimeStamp;
    }

    private isStartOfAnimation() : boolean {
        return !this.callbackTime && !this.previousCallbackTimeStamp && !this.startTime;
    }
}
