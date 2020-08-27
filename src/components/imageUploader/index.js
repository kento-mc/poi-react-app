import React from 'react';
import { Button } from 'semantic-ui-react';

const ImageUploader = props => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleImageFile(fileUploaded);
  };
  return (
    <>
      <Button color='blue' onClick={handleClick}>
        Upload Image
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}}
      />
    </>
  );
};

export default ImageUploader;