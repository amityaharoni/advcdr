class Caller {
    constructor(caller) {
        for (var prop in caller) {
            if (caller.hasOwnProperty(prop)) {
                this[prop] = caller[prop];
            }
        }
    }

    getAttemptsAmount() {
        return this.calls.length;
    }

    getCalledNumbers(props) {
        let answered = false;
        let calls = this.calls;
        if (typeof props != "undefined") {
            if (props.answered) {
                answered = true;
            }
        }

        if(answered && !this.answeredNumbers)
            this.answeredNumberes = new Set(this.getAnswered().map(call => call.dst));
        if(!answered && !this.attemptedNumbers)
            this.attemptedNumbers = new Set(this.calls.map(call => call.dst));

        let calledNumbers = answered? this.answeredNumbers : this.attemptedNumbers;
        return calledNumbers;
    }

    getCalledNumbersAmount(props) {
        return this.getCalledNumbers().size;
    }

    getAnswered() {
        if (!this.answered)
            this.answered = this.calls.filter(call => (call.disposition === "ANSWERED" && call.billsec >= 20));
        return this.answered
    }

    getAnsweredAmount() {
        return this.getAnswered().length;
    }

    getNoAnswerAmount() {
            return (this.getAttemptsAmount() - this.getAnsweredAmount());
    }

    getCallsLongerThanAmount(min) {
        let answered = this.getAnswered();

        return answered.filter(answered => answered.billsec > min * 60).length;
    }

    getCallsShorterThanAmount(min) {
        let answered = this.getAnswered();

        return answered.filter(answered => answered.billsec <= min * 60).length;
    }

    getTotalCallDuration() {
        return this.calls.reduce((acc, call) => acc + call.billsec, 0);
    }
}

export default Caller;