import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import VideoValueItem from './VideoValueItem';
import { RenderImages } from './VideoVAluesAssets/index';

const URL = 'http://load-balancer-api-403884515.us-east-2.elb.amazonaws.com';

const VideoValues = () => {

  const [firstLinkSlider, setfirstLinkSlider] = useState<string>('')
  const [secondLinkSlider, setsecondLinkSlider] = useState<string>('')
  const [thirdLinkSlider, setthirdLinkSlider] = useState<string>('')
  const [instPairingMode, setinstPairingMode] = useState<string>('')
  return (
    <>
      <Breadcrumb pageName="VideoValues" />
      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-full xl:w-full">
         
        <VideoValueItem
            img={RenderImages.FirstSlideVideo}
            placeholder="First Slider Video URL"
            value={firstLinkSlider}
            setValue={setfirstLinkSlider}
            onSave={() =>
              setTextValue(firstLinkSlider, 'firstLinkSlider')
            }
          />
          <VideoValueItem
              img={RenderImages.FirstSlideVideo}
              placeholder="Second Slider Video URL"
              value={secondLinkSlider}
              setValue={setsecondLinkSlider}
              onSave={() =>
                setTextValue(secondLinkSlider, 'secondLinkSlider')
              }
            />
            <VideoValueItem
                img={RenderImages.FirstSlideVideo}
                placeholder="Third Slider Video URL"
                value={thirdLinkSlider}
                setValue={setthirdLinkSlider}
                onSave={() =>
                  setTextValue(thirdLinkSlider, 'thirdLinkSlider')
                }
              />
              <VideoValueItem
                  img={RenderImages.VideoInstructionsEnterPairingMode}
                  placeholder="Video Instructions Enter Pairing Mode"
                  value={instPairingMode}
                  setValue={setinstPairingMode}
                  onSave={() =>
                    setTextValue(instPairingMode, 'instPairingMode')
                  }
                />
        </div>
      </div>
    </>
  );
};

export default VideoValues;

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
