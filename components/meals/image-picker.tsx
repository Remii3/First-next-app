'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ImagePicker({
  name,
  label,
}: {
  name: string;
  label: string;
}) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();
  const handleImageChange = e => {
    const file = e.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  const handlePickClick = () => {
    imageInput.current.click();
  };

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <div>
          {!pickedImage && <p>No image pciked yet!</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user"
              fill
            />
          )}
        </div>
        <input
          className="hidden"
          type="image"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button type="button" onClick={handlePickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
}
