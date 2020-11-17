import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button, Container, Content, Footer, Header, Icon } from 'rsuite';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CloudUpload, Trash } from '../../assets/icons';
import { formatDateForUploadPDF } from '../utils/helpers';

const FILE_STATUS = {
  BLANK: 'no select',
  LOAD: 'pdf selecting',
  SELECT: 'pdf selected',
};

function useInterval(callback, delay) {
  const intervalRef = React.useRef();
  const callbackRef = React.useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(
        () => callbackRef.current(),
        delay
      );

      // Clear interval if the components is unmounted or the delay changes:
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  // Returns a ref to the interval ID in case you want to clear it manually:
  return intervalRef;
}

function PDFUploadDropzone(props) {
  const {
    classnamePrefix,
    title,
    file,
    extraContentEle,
    errorMsg,
    onFileSelected,
    required,
  } = props;

  const [fileStatus, setFileStatus] = useState(FILE_STATUS.BLANK);
  const [loadPercent, setLoadPercent] = useState(0);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    accept: '.pdf',
    maxFiles: 1,
    maxSize: 9 * 1024 * 1024,
    multiple: false,
  });

  // when file is selected
  useEffect(() => {
    if (acceptedFiles.length) {
      setFileStatus(FILE_STATUS.LOAD);
      onFileSelected(acceptedFiles[0]);
    }
  }, [acceptedFiles, onFileSelected]);

  const intervalRef = useInterval(
    () => {
      if (loadPercent < 100) {
        setLoadPercent(loadPercent + 100 / 12);
      } else {
        window.clearInterval(intervalRef.current);
        setTimeout(() => {
          setFileStatus(FILE_STATUS.SELECT);
          setLoadPercent(0);
        }, 500);
      }
    },
    fileStatus === FILE_STATUS.LOAD ? 1000 / 12 : null
  );

  return (
    <Container
      className={
        'MDPPS-dropzone ' +
        (classnamePrefix ? classnamePrefix + '-dropzone' : '')
      }
    >
      <Header className="Input-item-title">
        {title}
        {title && required && <span className="required">&nbsp;*</span>}
      </Header>

      <Content
        className={
          'MDPPS-dropzone-content ' +
          (fileStatus === FILE_STATUS.SELECT ? 'border-solid' : 'border-dashed')
        }
      >
        {file?.path ? (
          <div className="row pdf-info-panel">
            <div className="pdf-logo">pdf</div>
            <div className="col">
              <p className="pdf-file_path">{file.path}</p>
              <p className="pdf-file_date-size">
                {formatDateForUploadPDF(file.lastModifiedDate) +
                  ' | ' +
                  (file.size / 1024 / 1024).toFixed(2) +
                  ' MB'}
              </p>
            </div>
            {fileStatus === FILE_STATUS.LOAD && (
              <div className="loader">
                <CircularProgressbar
                  className="loader-container"
                  value={loadPercent}
                  strokeWidth={12}
                  styles={buildStyles({
                    pathColor: '#4d7ffc',
                    trailColor: '#eef4fe',
                    backgroundColor: '#f5f8fa',
                  })}
                />
                <div className="loader-cancel">
                  <Icon icon="close" />
                </div>
              </div>
            )}
            {fileStatus === FILE_STATUS.SELECT && (
              <div className="control-group">
                <div
                  className="control-btn delete-btn"
                  onClick={() => onFileSelected(null)}
                >
                  <Trash />
                </div>
                <div className="control-btn download-btn"></div>
                <div className="control-btn upload-btn">
                  <CloudUpload />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <CloudUpload />
            <p>Drop your file here or browse to upload</p>
            <Button appearance="primary" onClick={open}>
              Browse
            </Button>
          </div>
        )}
      </Content>

      {extraContentEle}
      <div className="Input-description">
        Allowed file type: PDF, 9MB maximum size
      </div>

      <Footer>{<p className="Input-item-error">{errorMsg}</p>}</Footer>
    </Container>
  );
}

export default PDFUploadDropzone;
