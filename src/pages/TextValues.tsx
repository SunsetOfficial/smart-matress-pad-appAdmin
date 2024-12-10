import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { RenderImages } from './TextValuesAssets/index';
import TextValuesItem from './TextValuesItem';

const URL = 'http://load-balancer-api-403884515.us-east-2.elb.amazonaws.com';

const TextValues = () => {
  const [EnterPairingModeGrayText, setEnterPairingModeGrayText] = useState('');
  const [MatressTextInstructions, setMatressTextInstructions] = useState('');
  const [SetUpWifiSmallText, setSetUpWifiSmallText] = useState('');
  const [SuccessConnectMatress, setSuccessConnectMatress] = useState('');
  const [FirstSlideSmallText, setFirstSlideSmallText] = useState('');
  const [SecondSlideSmallText, setSecondSlideSmallText] = useState('');
  const [ThirdSlideSmallText, setThirdSlideSmallText] = useState('');

  return (
    <>
      <Breadcrumb pageName="TextValues" />
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-full xl:w-full">
          <TextValuesItem
            img={RenderImages.EnterPairingModeGrayText}
            placeholder="Enter Pairing Mode Gray Small Text"
            value={EnterPairingModeGrayText}
            setValue={setEnterPairingModeGrayText}
            onSave={() =>
              setTextValue(EnterPairingModeGrayText, 'EnterPairingModeGrayText')
            }
          />
          <TextValuesItem
            img={RenderImages.MatressTextInstructions}
            placeholder="Matress Text Instructions"
            value={MatressTextInstructions}
            setValue={setMatressTextInstructions}
            onSave={() =>
              setTextValue(MatressTextInstructions, 'MatressTextInstructions')
            }
          />
          <TextValuesItem
            img={RenderImages.SetUpWifiSmallText}
            placeholder="Setup Wifi Small Text"
            value={SetUpWifiSmallText}
            setValue={setSetUpWifiSmallText}
            onSave={() =>
              setTextValue(SetUpWifiSmallText, 'SetUpWifiSmallText')
            }
          />
          <TextValuesItem
            img={RenderImages.SuccessConnectMatress}
            placeholder="Success Connect Matress Small Text"
            value={SuccessConnectMatress}
            setValue={setSuccessConnectMatress}
            onSave={() =>
              setTextValue(SuccessConnectMatress, 'SuccessConnectMatress')
            }
          />
          <TextValuesItem
            img={RenderImages.MatressSliderSmall}
            placeholder="First Slider Small Text"
            value={FirstSlideSmallText}
            setValue={setFirstSlideSmallText}
            onSave={() =>
              setTextValue(FirstSlideSmallText, 'FirstSlideSmallText')
            }
          />
          <TextValuesItem
            img={RenderImages.MatressSliderSmall}
            placeholder="Second Slider Small Text"
            value={SecondSlideSmallText}
            setValue={setSecondSlideSmallText}
            onSave={() =>
              setTextValue(SecondSlideSmallText, 'SecondSlideSmallText')
            }
          />
          <TextValuesItem
            img={RenderImages.MatressSliderSmall}
            placeholder="Third Slider Small Text"
            value={ThirdSlideSmallText}
            setValue={setThirdSlideSmallText}
            onSave={() =>
              setTextValue(ThirdSlideSmallText, 'ThirdSlideSmallText')
            }
          />
        </div>
      </div>
    </>
  );
};

export default TextValues;

export const setTextValue = async (contentVal: string, nameVal: string) => {
  const endpoint = '/static-text';

  const reqBody = JSON.stringify({
    content: contentVal,
    name: nameVal,
  });

  const req = await fetch(URL + endpoint, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: reqBody,
  });

  console.log('====================================');
  console.log(req.ok);
  console.log('====================================');

  if (req.ok) {
    alert('Saved!');
  }
  const data = await req.json();
  console.log('==============data======================');
  console.log(data);
  console.log('====================================');
};
