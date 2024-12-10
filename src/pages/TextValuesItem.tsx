import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

interface ITextValuesItem {
  img: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  onSave: () => void;
}

const TextValuesItem = ({
  img,
  value,
  setValue,
  placeholder,
  onSave,
}: ITextValuesItem) => {
  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
    setValue(e.target.value);
  };
  return (
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <div>
        <label className="mb-2.5 block text-black dark:text-white">
          {placeholder}
        </label>
        {value.length > 0 && (
          <div
            onClick={onSave}
            className="inline-flex items-center justify-center bg-black py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Save
          </div>
        )}
      </div>
      <input
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        style={{ minHeight: 60, width: 500 }}
        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
      />
      <img src={img} style={{ width: 124, height: 256 }} />
    </div>
  );
};

export default TextValuesItem;
