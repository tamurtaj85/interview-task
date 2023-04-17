import './App.css';
import {ModalButtonWrapper} from './components';

function App() {
  return (
    <div className="App my-8">
      <ModalButtonWrapper buttonText={'Button 1'}>
        Modal Body
      </ModalButtonWrapper>
      <ModalButtonWrapper buttonText={'Button 2'}>
        Modal Body
      </ModalButtonWrapper>
      <ModalButtonWrapper buttonText={'Button 3'}>
        Modal Body
      </ModalButtonWrapper>
    </div>
  );
}

export default App;
