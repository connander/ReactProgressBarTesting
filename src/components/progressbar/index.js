import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./progressbar.css";


// const now = 35;
// const now2 = 20;
// const now3 = 40;

function SingleBar() {
  return (
        <ProgressBar>
          <ProgressBar variant="success" now={35} />
          <ProgressBar variant="success" now={20} />
          <ProgressBar variant="success" now={40} />
        </ProgressBar>
  );
};

// function Progress() {
//   return (
//     <div className="PageContainer">
//       <div className="App">
//         <ProgressBar className="ProgressContainer">
//           <ProgressBar variant="success" now={10} key={1} />
//           <ProgressBar variant="warning" now={10} />
//           <ProgressBar variant="danger" now={10} />
//           <ProgressBar variant="primary" now={10} key={1} />
//           <ProgressBar variant="secondary" now={10} />
//           <ProgressBar variant="info" now={10} />
//           <ProgressBar variant="light" now={10} />
//           <ProgressBar variant="dark" now={10} />
//           <ProgressBar variant="link" now={10} />
//         </ProgressBar>
//         <br></br>
//         <ProgressBar>
//           <ProgressBar className="segmented" variant="success" label={`${now}%`} now={35} />
//           <ProgressBar className="segmented" variant="success" label={`${now2}%`} now={20} />
//           <ProgressBar className="segmented" variant="success" label={`${now3}%`} now={40} />
//         </ProgressBar>
//         <br></br>
//         <ProgressBar>
//           <ProgressBar variant="success" now={35} />
//           <ProgressBar variant="success" now={20} />
//           <ProgressBar variant="success" now={40} />
//         </ProgressBar>
//       </div>
//     </div>

//   );
// }

export default SingleBar;
