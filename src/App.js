import './App.css';
import {ModalButtonWrapper} from './components';
import {Button1Form, Button2Form, Button3Form} from './forms';

function App() {
  return (
    <div className="App my-8">
      <ModalButtonWrapper buttonText={'Button 1'}>
        <Button1Form />
      </ModalButtonWrapper>
      <ModalButtonWrapper buttonText={'Button 2'}>
        <Button2Form />
      </ModalButtonWrapper>
      <ModalButtonWrapper buttonText={'Button 3'}>
        <Button3Form />
      </ModalButtonWrapper>
    </div>
  );
}

export default App;
