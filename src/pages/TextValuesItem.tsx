import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import content from '../lib.d';

interface ITextValuesItem {
  img: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  onSave: () => void;
  index: string;
}

const TextValuesItem = ({
  img,
  value,
  setValue,
  placeholder,
  onSave,
  index,
}: ITextValuesItem) => {
  const [disabled, setDisabled] = useState(true);

  const getInitValue = async () => {
    const URL =
      'http://load-balancer-api-403884515.us-east-2.elb.amazonaws.com';
    const endpoint = '/static-text';
    const req = await fetch(URL + endpoint + '/' + index, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await req.json();
    if (data.content) {
      setValue(data.content);
    }
  };

  useEffect(() => {
    getInitValue();
  }, []);

  return (
    <div
      style={{
        width: '100%',
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
      }}
    >
      <div>
        <label className="mb-2.5 block text-black dark:text-white">
          {placeholder}
        </label>
        <div>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(val) => {
              const plainText = val.replace(/<\/?[^>]+(>|$)/g, '');
              if (plainText.length == 0) {
                setDisabled(true);
              } else {
                setDisabled(false);
              }
              setValue(val);
            }}
            style={{ width: 500, height: 200 }}
          />
        </div>
        <button
          onClick={disabled ? () => {} : onSave}
          style={{
            marginTop: 50,
            backgroundColor: disabled ? '#eaeaea' : 'black',
          }}
          className="inline-flex items-center justify-center py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Save
        </button>
      </div>
      <img src={img} style={{ width: 180, objectFit: 'contain' }} />
    </div>
  );
};

export default TextValuesItem;
