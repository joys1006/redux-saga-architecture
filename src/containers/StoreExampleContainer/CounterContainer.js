import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// UI Components
import Counter from 'components/StoreExample/Counter';

// Actions
import * as counterActions from 'stores/modules/example/counter.module';

class CounterContainer extends Component {

    constructor(props) {
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor () {
        const color = [
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200),
            Math.floor((Math.random()*55) + 200)
        ];
        this.props.CounterActions.setColor(color);
    }

    render() {
        const { CounterActions, number, color } = this.props;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return (
            <div style={style}>
                <Counter
                    number={number}
                    onPlus={CounterActions.increment}
                    onSubtract={CounterActions.decrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        color: state.counter.color
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        CounterActions: bindActionCreators(counterActions, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterContainer);
