import { Dispatch, SetStateAction, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import axios from 'axios';

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
    try {
      const URL =
        'http://load-balancer-api-403884515.us-east-2.elb.amazonaws.com/static-text/';

      axios
        .get(URL + index)
        .then((response) => response.data)
        .then((data) => {
          if (!!data.content) {
            setValue(data.content);
          } else {
            setValue('');
          }
        });
    } catch (error) {
      console.log('====================================');
      console.log(error, ' MSG:   ', error.message);
      console.log('====================================');
    }
  };

  useEffect(() => {
    getInitValue();
  }, []);

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
    [{ direction: 'rtl' }], // text direction

    [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ['clean'], // remove formatting button
  ];

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
            modules={{
              toolbar: toolbarOptions, // Selector for toolbar container
            }}
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
            marginTop: 100,
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
