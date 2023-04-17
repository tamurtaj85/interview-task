import React, {useState} from 'react';
import {ButtonWrapper} from './buttons';

export const ModalWrapper = ({visible, title, onClose, onSubmit, ...rest}) => {
  return (
    <>
      {visible && (
        <div
          className={`fixed left-0 top-0 flex justify-center items-center inset-0 z-50 overflow-y-auto bg-gray-500/[.5] `}
        >
          <div
            className={`min-w-[30%] min-h-[5%] max-h-[750px] max-w-[750px] border-2 border-sky-500 rounded-xl bg-white ${rest?.className}`}
          >
            {/* Header Section */}
            <div className="h-[3rem] border-b-2 flex justify-between items-center ">
              <div className="px-4 justify-self-start">
                {title || 'Modal Wrapper'}
              </div>
              <div className="px-4  justify-self-end">
                <ButtonWrapper
                  className={'bg-inherit text-gray-500'}
                  onClick={onClose}
                >
                  x
                </ButtonWrapper>
              </div>
            </div>
            {/* Body Section */}
            <div className="max-h-[500px] h-full overflow-y-auto">
              {rest?.children}
            </div>
            {/* Footer Section */}
            <div className="h-[50px] border-t-2 flex justify-end items-center">
              <ButtonWrapper
                className={'bg-inherit text-gray-500 border'}
                onClick={onClose}
              >
                Cancel
              </ButtonWrapper>
              <ButtonWrapper onClick={onSubmit}>OK</ButtonWrapper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const ModalButtonWrapper = ({
  buttonText,
  modalHeader,
  onClickSubmit = () => null,
  onClickClose = () => null,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);

  const handleOnClickOpenModal = () => {
    setVisible(true);
  };

  const handleOnClickCloseModal = () => {
    setVisible(false);
    onClickClose();
  };

  const handleOnClickSubmit = () => {
    setVisible(false);
    onClickSubmit();
  };

  return (
    <>
      <ButtonWrapper onClick={handleOnClickOpenModal}>
        {buttonText}
      </ButtonWrapper>
      <ModalWrapper
        visible={visible}
        title={modalHeader || buttonText}
        onClose={handleOnClickCloseModal}
        onSubmit={handleOnClickSubmit}
      >
        {rest?.children}
      </ModalWrapper>
    </>
  );
};
