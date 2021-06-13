import React, { Component } from 'react';
import PropTypes from "prop-types";

// Components
import Container from "./components/Container/Container";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = (e) => {
    const { name } = e.target;
    this.setState((prevState) => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  totalPositiv() {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  }

  countPositiveFeedbackPercentage() {}
  render() {
    const total = this.countTotalFeedback();
    const positivTotal = this.totalPositiv() ? this.totalPositiv() : 0;
    const { good, neutral, bad } = this.state;
    const keys = Object.keys(this.state);

    return (
      <Container>
        <FeedbackOptions
          options={keys}
          onLeaveFeedback={this.handleIncrement}
        />
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivTotal}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Container>
    );
  }
}

export default App;
