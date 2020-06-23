import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../ComponentCss/New.css';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        description: 'The content of a textarea goes in the value attribute'
      };
    }
    render() {
      return (
        <form>
        <textarea value={this.state.description} />
        </form>
      );
    }
  }

const handleChange = event => {
  const fileUploaded = event.target.files[0];
};

const handleClick = event => {
  document.getElementById('hiddenFileInput').click();
};

class NewOrder extends Component{
    render(){
        return(
            <>
                <h1>New Order</h1>
                <div id='poleNewOrder'>
                    <div id="poleUpload">
                        <Button id="lewy" type="button" onClick={handleClick}>
                            Upload File
                        </Button>
                        <input type="file"
                          id="hiddenFileInput"
                          onChange={handleChange}
                          style={{display:'none'}} 
                        /> 
                    </div>
                    <div>
                        <p align = "left">Write code here:</p>
                        <MyForm/>
                    </div>
                        <Button id="prawy" type="submit">
                            Create & Pay
                        </Button>
                </div>
            </>
        );
    };
};

export default (NewOrder);