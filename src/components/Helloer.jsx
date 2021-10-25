import React, { useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actionCreators from "../actionCreators";
import * as selectors from "../selectors";

import { Typography, Avatar, Container } from "@material-ui/core";

// dumbponent
const Helloer = (props) => {
  return (
    <Container>
      <Avatar>{props.emoji}</Avatar>
      <Typography variant="caption" display="block" gutterBottom>
        Hello {props.name}! 🤟🏽
      </Typography>
    </Container>
  );
};

export default Helloer;

// connected component using a higher order component
const mstp = (state) => ({
  name: selectors.name(state)
});

const mdtp = (dispatch) => ({
  setNameWithDelay: (name, delayDuration) =>
    dispatch(actions.setNameWithDelay(name, delayDuration))
});

Helloer.ConnectedWithHOC =
  @connect(mstp, mdtp)
  class extends React.Component {
    componentDidMount() {
      const { setNameWithDelay } = this.props;
      const ts = new Date();
      setNameWithDelay(`coder @ ${ts}`, 2000);
    }

    render() {
      return <Helloer {...this.props} />;
    }
  };

// also connected component but using React hooks
Helloer.ConnectedWithHook = (props) => {
  const name = useSelector(selectors.name);
  const dispatch = useDispatch();
  useEffect(() => {
    const ts = new Date();
    const nextName = `coder @ ${ts}`;
    dispatch(actionCreators.setNameWithDelay(nextName, 5000));
  }, []);
  return <Helloer {...props} name={name} />;
};

Helloer.Connected = Helloer.ConnectedWithHook; // use the better one
