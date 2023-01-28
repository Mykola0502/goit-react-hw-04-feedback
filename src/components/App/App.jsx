import { useState, useReducer, Component } from 'react';

import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

import { Container } from './App.styled';

export const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const feedbackReducer = (prevState, name) => {
  //   return prevState[name] + 1;
  // };

  // const [state, setFeedback] = useReducer(feedbackReducer, 0);

  const leaveFeedback = name => {
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const values = Object.values(state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  const options = Object.keys(state);

  return (
    <Container>
      <Section title="Please leave feedback" children>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={leaveFeedback}
          // setCount={setFeedback}
          // onLeaveFeedback={feedbackReducer}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics" children>
        {countTotalFeedback() ? (
          <Statistics
            options={options}
            stat={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

// import { Component } from 'react';

// import { Section } from 'components/Section';
// import { FeedbackOptions } from 'components/FeedbackOptions';
// import { Statistics } from 'components/Statistics';
// import { Notification } from 'components/Notification';

// import { Container } from './App.styled';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   leaveFeedback = name => {
//     this.setState(prevState => ({
//       [name]: prevState[name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const values = Object.values(this.state);
//     let total = 0;
//     for (const value of values) {
//       total += value;
//     }
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     const options = Object.keys(this.state);

//     return (
//       <Container>
//         <Section title="Please leave feedback" children>
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.leaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics" children>
//           {this.countTotalFeedback() ? (
//             <Statistics
//               options={options}
//               stat={this.state}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
