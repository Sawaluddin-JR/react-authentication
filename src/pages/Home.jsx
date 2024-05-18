const Home = (props) => {

  // eslint-disable-next-line react/prop-types
  return <div>{props.name ? "Hi" + props.name : "You are not logged in"}</div>;
};

export default Home;
