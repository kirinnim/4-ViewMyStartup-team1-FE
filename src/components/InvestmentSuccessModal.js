import React from 'react';
import './InvestmentSuccessModal.css';

const InvestmentSuccessModal = ({ onClose }) => {
    return (
        <div className="ksh-investment-success-modal">
            <div className="ksh-investment-success-modal-section">
                <div className="ksh-investment-success-modal-close-button-section">
                    <button className="ksh-investment-success-modal-close-button" onClick={onClose}>X</button>
                </div>
                <div className="ksh-investment-success-modal-title-section">
                    <h1>투자가 완료되었어요!</h1>
                </div>
                <div className="ksh-investment-success-modal-confirm-button-section">
                    <button className="ksh-investment-success-modal-confirm-button" onClick={onClose}>
                    확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentSuccessModal;