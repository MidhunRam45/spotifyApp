import React from 'react'
import ReactLoading from 'react-loading';

const Si = () => {
  return (
    <div style={styles.loaderContainer}>
      <ReactLoading type="spinningBubbles" color="green" height={100} width={100} />
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#e8e8e8',
  },
};

export default Si;
