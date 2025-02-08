import { getRandomInArrayExcept } from "../utils";

class SpeechBubble {
    speech = $state('');
    lastSpeech = $state('');
    speechlist: Array<string> = [];
    hideFunc = () => { };
    showFunc = () => { };
    bubbleTimeout = setTimeout(this.hideFunc, 3000);
    showBubble() {
        clearTimeout(this.bubbleTimeout);
        this.speech = this.lastSpeech = getRandomInArrayExcept(this.speechlist, [this.lastSpeech]);
        this.showFunc();
        this.bubbleTimeout = setTimeout(this.hideFunc, 3000);
    }
}
export default SpeechBubble;