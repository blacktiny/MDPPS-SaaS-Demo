import React from 'react';
import {useDropzone} from 'react-dropzone';
import { Button, Container, Content, Footer, Header } from 'rsuite';
import { CloudUpload } from '../../assets/icons';

function PDFUploadDropzone(props) {
  const {
    title,
    extraContentEle,
    errorMsg,
    required
  } = props;

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true
  });

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Container className="MDPPS-dropzone">
      <Header className="Input-item-title">
        {title}
        {(title && required) && <span className="required">&nbsp;*</span>}
      </Header>

      <Content>
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <CloudUpload />
            <p>Drop your file here or browse to upload</p>
            <Button appearance="primary" onClick={open}>
              Browse
          </Button>
        </div>
        <aside>
          {/* <h4>Files</h4> */}
          <ul>{files}</ul>
        </aside>
      </Content>

      {extraContentEle}
      <div className="Input-description">
        Allowed file type: PDF, 9MB maximum size
      </div>

      <Footer>
        {<p className="Input-item-error">{errorMsg}</p>}
      </Footer>
    </Container>
  );
}

export default PDFUploadDropzone;