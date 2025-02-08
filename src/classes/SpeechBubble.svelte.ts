import { getRandomInArrayExcept } from "../utils";

type SpeechBubbleProps = {
    speechList: Array<string>,
    hideFunc: () => {},
    showFunc: () => {}
}

class SpeechBubble {
    speech = $state('');
    lastSpeech = $state('');
    speechlist: Array<string>;
    hideFunc: () => {};
    showFunc: () => {};
    bubbleTimeout: number;
    constructor(props: SpeechBubbleProps) {
        this.speechlist = props.speechList;
        this.hideFunc = props.hideFunc;
        this.showFunc = props.showFunc;
        this.bubbleTimeout = setTimeout(this.hideFunc, 3000);
    }
    showBubble() {
        clearTimeout(this.bubbleTimeout);
        this.speech = this.lastSpeech = getRandomInArrayExcept(this.speechlist, [this.lastSpeech]);
        this.showFunc();
        this.bubbleTimeout = setTimeout(this.hideFunc, 3000);
    }
}
export default SpeechBubble;