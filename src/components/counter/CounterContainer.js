import { connect } from "react-redux";

import {
  incrementCounterAsync,
  decrementCounterAsync
} from "./counterAsyncActions";
import { incrementCounter, decrementCounter } from "./counterActions";
import Counter from "./Counter";

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  incrementCounterAsync: () => dispatch(incrementCounterAsync()),
  decrementCounterAsync: () => dispatch(decrementCounterAsync()),
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
