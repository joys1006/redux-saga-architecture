/**
 * @author Has
 * @reg_date 2018-11-16
 * @summary countdown mixins
 */

// 3rd Party Libraries
import moment from 'moment';

class Countdown {
    constructor () {
        this.state = {
            diffSeconds: null,
            intervalId: null,
        };
    }

    startCountDown = (seconds, countDownHandler) => {
        const afterTime = moment().add(seconds, 'seconds');
        let timeDiff = afterTime.diff(moment(), 'seconds');
        this.state = {
            ...this.state,
            diffSeconds: timeDiff
        }
        clearInterval(this.state.intervalId);
        countDownHandler(this.state.diffSeconds);
        if (this.state.diffSeconds <= 0) {
            this.clearCountdown();
        } else {
            let timer = setInterval(() => {
                timeDiff = afterTime.diff(moment(), 'seconds');
                this.state = {
                    ...this.state,
                    diffSeconds: timeDiff
                };
                countDownHandler(this.state.diffSeconds);
            }, 1000);
            this.state = {
                ...this.state,
                intervalId: timer
            };
        }
    }

    clearCountDown = () =>  {
        clearInterval(this.state.intervalId);
        this.state = {
            ...this.state,
            diffSeconds: null,
            intervalId: null,
        };
    }
};

export const countdown = new Countdown();