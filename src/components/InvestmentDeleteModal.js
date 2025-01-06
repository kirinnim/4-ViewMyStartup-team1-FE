import React from 'react';
import './InvestmentDeleteModal.css';
import { useState } from 'react';
import { deleteInvestment } from '../apis/deleteInvestment_ksh';


// password는 기존에 저장되어 있는 비밀번호. typedPassword는 사용자가 입력한 비밀번호. 검증하는 부분이 필요함
const InvestmentDeleteModal = ({ password, onClose, investment }) => {
    const [investmentPassword, setInvestmentPassword] = useState('');

    const handleSetPassword = (typedPassword) => {
        setInvestmentPassword(typedPassword);
    };

    const deleteInvestmentData = async () => {
        try {
            await deleteInvestment({
                id: investment.id,
                password: investmentPassword,
            });
            setIsInvestmentDeleted(true);
            console.log("삭제 성공");
        } catch (error) {
            console.error('Failed to delete investment:', error);
        }
    };

    const [isInvestmentDeleted, setIsInvestmentDeleted] = useState(false);

    const handleDeleteClick = () => {
        if (!investmentPassword) {
            alert('비밀번호를 입력해주세요');
            return;
        } else if (investmentPassword !== password) {
            alert('비밀번호가 일치하지 않습니다');
            return;
        }
        deleteInvestmentData();
    };

    return (
        <div 
          className="ksh-investment-delete-modal" 
          onClick={(e) => e.stopPropagation()}
        >
            <div className="ksh-investment-delete-modal-section">
                <div className="ksh-investment-delete-modal-top-section">
                    <p>삭제 권한 인증</p>
                    <button className="ksh-investment-delete-modal-close-button" onClick={onClose}>X</button>
                </div>
                <div className="ksh-investment-delete-modal-middle-section">
                    <p>비밀번호</p>
                    <input
                        type="password"
                        placeholder="비밀번호를 입력해주세요"
                        defaultValue={investmentPassword}
                        onBlur={(e) => handleSetPassword(e.target.value)}
                    />
                </div>
                <div className="ksh-investment-delete-modal-bottom-section">
                    <button className="ksh-investment-delete-modal-confirm-button" onClick={handleDeleteClick}>
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InvestmentDeleteModal;