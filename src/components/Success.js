import React from 'react';

function Success({code = ''}) {
  return (
    <div className="WR__form-done">
      <h2><span aria-label="Celebration!" role="img">🎉</span>&nbsp;Yay!</h2>
      <div>
        <span className="WR__form-done_code_label">Verification code:</span>
        <span className="WR__form-done_code">{code.substr(0, 4)}</span>
      </div>
    </div>
  );
}

export default Success;
