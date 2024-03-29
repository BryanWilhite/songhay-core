/**
 * Defines a wrapper
 * around {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame |`window.requestAnimationFrame`}
 *
 * @see {@link https://stackblitz.com/edit/typescript-window-animation | `WindowAnimation` demo}
 *
 * @export
 * @class WindowAnimation
 */
export class WindowAnimation {
    /**
     * The current animation identifier, mapping to an instance of {@link WindowAnimation.id},
     * generated by {@link WindowAnimation.registerAndGenerate}.
     *
     * @static
     * @type {(number | null)}
     * @memberof WindowAnimation
     */
    static animationId : number | null;

    /**
     * Registers instances of {@link WindowAnimation}
     * to be used with the {@link WindowAnimation.animate} method.
     * 
     * @static
     * @type {Map<number, WindowAnimation>}
     * @memberof WindowAnimation
     */
    static registry: Map<number, WindowAnimation> = new Map();

    /**
     * calls {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame |`window.requestAnimationFrame`} which will in turn call back to this member.
     *
     * @remarks
     * 
     * {@link WindowAnimation.motionFunction} will be called,
     * throttled to the specified {@link WindowAnimation.fps}.
     * 
     * @static
     * @param {DOMHighResTimeStamp} [currentTime]
     * @returns
     * @memberof WindowAnimation
     */
    static animate(currentTime?: DOMHighResTimeStamp) {
        if(!WindowAnimation.animationId) { return; }

        const animation = WindowAnimation.registry.get(WindowAnimation.animationId);

        if (!animation) {
            return;
        }
        if (animation.shouldStopAnimation) {
            return;
        }

        if (!currentTime) {
            currentTime = window.performance.now();
        }

        if (animation.isStartOfAnimation()) {
            animation.startTime = currentTime;
            animation.previousTime = animation.startTime;
        }

        animation.frameId = window.requestAnimationFrame(WindowAnimation.animate);

        animation.currentTime = currentTime;
        animation.delta = animation.currentTime - (animation.previousTime ?? 0);

        if (animation.delta > animation.fpsInterval) {
            animation.previousTime = animation.currentTime - (animation.delta % animation.fpsInterval);

            animation.motionFunction(animation);
            ++animation.frameCount;
        }
    }

    /**
     * Cancels the animation associated with an instance of {@type WindowAnimation}.
     *
     * @static
     * @param {number} [animationId]
     * @returns {void}
     * @memberof WindowAnimation
     */
    static cancelAnimation(animationId?: number) : void {
        const id = animationId ?? WindowAnimation.animationId;
        if(!id) { return; }

        const animation = WindowAnimation.registry.get(id);
        if(!animation) { return; }
        if(!animation.frameId) { return; }

        animation.shouldStopAnimation = true;
        window.cancelAnimationFrame(animation.frameId);
    }

    /**
     * Registers a new instance of {@type WindowAnimation}
     * in {@link WindowAnimation.registry} and returns it.
     *
     * @static
     * @param {number} fps
     * @param {(frameData: WindowAnimation) => void} motionFunction
     * @returns {WindowAnimation}
     * @memberof WindowAnimation
     */
    static registerAndGenerate(
        fps: number,
        motionFunction: (frameData: WindowAnimation) => void
    ) : WindowAnimation {
        const animation = new WindowAnimation(fps, motionFunction);
        const nextId = WindowAnimation.registry.size + 1;
        animation.id = nextId;
        WindowAnimation.animationId = nextId;

        WindowAnimation.registry.set(nextId, animation);

        return animation;
    }

    /**
     * The current value passed
     * by {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame |`window.requestAnimationFrame`}.
     *
     * @type {(DOMHighResTimeStamp | null)}
     * @memberof WindowAnimation
     */
    currentTime: DOMHighResTimeStamp | null;

    /**
     * The difference between
     * {@link WindowAnimation.currentTime} and {@link WindowAnimation.previousTime}.
     *
     * @type {(DOMHighResTimeStamp | null)}
     * @memberof WindowAnimation
     */
    delta: DOMHighResTimeStamp | null;

    /**
     * The frames per second specified in the constructor of this class.
     *
     * @type {number}
     * @memberof WindowAnimation
     */
    readonly fps: number;

    /**
     * The interval derived from {@link WindowAnimation.fps}.
     *
     * @type {number}
     * @memberof WindowAnimation
     */
    readonly fpsInterval: number;

    /**
     * The number of throttled frames called since {@link WindowAnimation.startTime}.
     *
     * @type {number}
     * @memberof WindowAnimation
     */
    frameCount: number;

    /**
     * The value returned
     * by {@link https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame |`window.requestAnimationFrame`}.
     *
     * @type {(number | null)}
     * @memberof WindowAnimation
     */
    frameId: number | null;

    /**
     * The registration identifier of an instance of {@type WindowAnimation}
     * used by {@link WindowAnimation.registry}.
     *
     * @type {(number | null)}
     * @memberof WindowAnimation
     */
    id : number | null;

    /**
     * Represents the custom animation logic injected in the constructor of this class.
     *
     * @memberof WindowAnimation
     */
    readonly motionFunction: (frameData: WindowAnimation) => void;

    /**
     * The previous time that is less than {@link WindowAnimation.currentTime}
     * minus the modulo of {@link WindowAnimation.delta} and {@link WindowAnimation.interval}.
     * 
     * @remarks
     * 
     * The formula for this value comes
     * from {@link https://stackoverflow.com/a/19772220/22944 | a StackOverflow answer}
     * that leads to {@link http://jsfiddle.net/chicagogrooves/nRpVD/2/ | a fiddle 🎻 by Dean Radcliffe}.
     *
     * @type {(DOMHighResTimeStamp | null)}
     * @memberof WindowAnimation
     */
    previousTime: DOMHighResTimeStamp | null;

    /**
     * When `true` the animation callback cycle will stop.
     *
     * @type {boolean}
     * @memberof WindowAnimation
     */
    shouldStopAnimation: boolean;

    /**
     * The start time of the animation.
     *
     * @type {(DOMHighResTimeStamp | null)}
     * @memberof WindowAnimation
     */
    startTime: DOMHighResTimeStamp | null;


    /**
     * Creates an instance of @type {WindowAnimation}.
     * @param {number} fps
     * @param {(frameData: WindowAnimation) => void} motionFunction
     * @memberof WindowAnimation
     */
    constructor(
        fps: number,
        motionFunction: (frameData: WindowAnimation) => void
    ) {
        if (Math.abs(fps) === 0) {
            fps = 1;
        }

        this.fps = fps;
        this.fpsInterval = 1000 / fps;
        this.frameCount = 0;
        this.motionFunction = motionFunction;

        this.delta = null;
        this.currentTime = null;
        this.frameId = null;
        this.id = null;
        this.previousTime = null;
        this.shouldStopAnimation = false;
        this.startTime = null;
    }

    /**
     * Measures the current window animation frames per second
     * based on {@link WindowAnimation.getElapsedTimeOfAnimation}.
     *
     * @returns {number}
     * @memberof WindowAnimation
     */
    getCurrentFps(): number {
        const duration = this.getElapsedTimeOfAnimation();

        if (!duration) {
            return 0;
        }

        if (!this.frameCount) {
            return 0;
        }

        return Math.round((1000 / (duration / this.frameCount)) * 100) / 100;
    }

    /**
     * Returns a diagnotic message
     * based on {@link WindowAnimation.getElapsedTimeOfAnimation}
     * and {@link WindowAnimation.getCurrentFps}.
     *
     * @returns {string}
     * @memberof WindowAnimation
     */
    getDiagnosticStatus(): string {
        const timeInSeconds = this.getElapsedTimeOfAnimationInSeconds();
        const currentFps = this.getCurrentFps();

        return `elapsed time: ${timeInSeconds} seconds @ ${currentFps} fps`;
    }

    /**
     * Returns {@link WindowAnimation.currentTime}
     * minus {@link WindowAnimation.startTime}.
     *
     * @returns {DOMHighResTimeStamp}
     * @memberof WindowAnimation
     */
    getElapsedTimeOfAnimation(): DOMHighResTimeStamp {
        if (!this.currentTime) {
            return 0;
        }

        if (!this.startTime) {
            return 0;
        }

        return this.currentTime - this.startTime;
    }

    /**
     * Converts the result of {@link WindowAnimation.getElapsedTimeOfAnimation}
     * from milliseconds to seconds.
     *
     * @returns {DOMHighResTimeStamp}
     * @memberof WindowAnimation
     */
    getElapsedTimeOfAnimationInSeconds(): DOMHighResTimeStamp {
        const timeInSeconds =
            Math.round((this.getElapsedTimeOfAnimation() / 1000) * 100) / 100;

        return timeInSeconds;
    }

    /**
     * Determines whether this instance is starting a new animation.
     *
     * @returns {boolean}
     * @memberof WindowAnimation
     */
    isStartOfAnimation(): boolean {
        return !this.startTime && !this.previousTime;
    }
}
