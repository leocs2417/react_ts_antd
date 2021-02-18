import React, {} from 'react';
import Button from './components/Button';

function App() {
  return (
    <div>
     <Button disabled>hello</Button>
     <Button btnType={'danger'} size={'lg'} onClick={() => {console.log('xxxx');
     }}>lg</Button>
     <Button btnType={'link'} href='www.baidu.com'>www.baidu.com</Button>
    </div>
  );
}

export default App;
