import { useEffect, useState } from 'react';
import Image from 'next/image';

const Accessibility = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false); // Track if the widget is hidden
  const [removed, setRemoved] = useState(false); // Track if the widget is completely removed

  const [highlightLinks, setHighlightLinks] = useState(false);
  const [colorShift, setColorShift] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [guideEnabled, setGuideEnabled] = useState(false);
  const [focusEnabled, setFocusEnabled] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(false);
  const [textSize, setTextSize] = useState('normal');
  const [spacing, setSpacing] = useState('normal');
  const [font, setFont] = useState('default');
  const [imagesVisible, setImagesVisible] = useState(true);
  const [showPageStructure, setShowPageStructure] = useState(false);

  useEffect(() => {
    document.querySelectorAll('a').forEach((link) => {
      const element = link as HTMLElement;
      element.style.backgroundColor = highlightLinks ? 'yellow' : '';
    });
  }, [highlightLinks]);

  useEffect(() => {
    document.documentElement.style.fontSize = textSize;
  }, [textSize]);

  useEffect(() => {
    document.documentElement.style.filter = highContrast ? 'contrast(2)' : '';
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.style.letterSpacing = spacing === 'wide' ? '0.1em' : 'normal';
  }, [spacing]);

  useEffect(() => {
    document.documentElement.style.fontFamily = font === 'serif' ? 'serif' : 'sans-serif';
  }, [font]);

  useEffect(() => {
    document.documentElement.style.filter = colorShift ? 'invert(1)' : '';
  }, [colorShift]);

  useEffect(() => {
    document.documentElement.style.animation = animationsEnabled ? '' : 'none';
  }, [animationsEnabled]);

  useEffect(() => {
    document.querySelectorAll('*').forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.outline = focusEnabled ? '2px solid blue' : '';
    });
  }, [focusEnabled]);

  useEffect(() => {
    document.body.style.cursor = cursorEnabled ? 'pointer' : '';
  }, [cursorEnabled]);

  useEffect(() => {
    document.querySelectorAll('img').forEach((img) => {
      const htmlImg = img as HTMLElement;
      htmlImg.style.display = imagesVisible ? 'block' : 'none';
    });
  }, [imagesVisible]);

  const togglePageStructure = () => {
    setShowPageStructure(!showPageStructure);
  };

  const renderPageStructure = () => (
    <div>
      <h3 className="font-semibold">Landmarks</h3>
      <ul>
        {Array.from(document.querySelectorAll('header, nav, main, footer')).map((element, index) => (
          <li key={index}>{element.tagName.toLowerCase()}</li>
        ))}
      </ul>
      <h3 className="font-semibold mt-4">Headings</h3>
      <ul>
        {Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map((element, index) => (
          <li key={index}>{element.tagName.toLowerCase()}: {element.textContent}</li>
        ))}
      </ul>
      <h3 className="font-semibold mt-4">Links</h3>
      <ul>
        {Array.from(document.querySelectorAll('a')).map((element, index) => (
          <li key={index}>{element.href}</li>
        ))}
      </ul>
    </div>
  );

  if (removed) {
    return null; // Widget completely removed
  }

  return (
    <div className={`fixed bottom-4 z-50 md:bottom-6 lg:bottom-8 transition-transform transform ${hidden ? 'translate-x-full right-0' : 'right-4 md:right-6 lg:right-8'}`}>
      {hidden ? (
        <button
          onClick={() => setHidden(false)}
          className="p-2 bg-blue-600 text-white rounded-l-full flex items-center justify-center fixed top-1/2 right-0"
          aria-label="Show Accessibility Widget"
        >
          Show Widget
        </button>
      ) : (
        <>
          <button
            onClick={() => setOpen(!open)}
            className="p-3 bg-blue-600 text-white rounded-full flex items-center justify-center"
            aria-label="Toggle Accessibility Widget"
          >
            <Image src="/images/accessibility/accessibility-icon.jpg" alt="Accessibility Icon" width={24} height={24} />
          </button>
          {open && (
            <div className="bg-white shadow-lg rounded-lg p-4 mt-2 w-72 sm:w-80 md:w-96 lg:w-104 max-h-[80vh] overflow-y-auto relative">
              <div className="sticky top-0 bg-white z-10 pb-2">
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-600 hover:text-gray-800"
                  aria-label="Close Accessibility Widget"
                >
                  Close
                </button>
                <button
                  onClick={() => setHidden(true)}
                  className="ml-4 text-gray-600 hover:text-gray-800"
                  aria-label="Hide Accessibility Widget"
                >
                  Hide
                </button>
                <button
                  onClick={() => setRemoved(true)}
                  className="ml-4 text-red-600 hover:text-red-800"
                  aria-label="Remove Accessibility Widget"
                >
                  Remove
                </button>
                <h2 className="text-lg font-semibold mb-2">Visual Toolkit</h2>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <button className="p-2 bg-gray-200 rounded" onClick={() => setFocusEnabled(!focusEnabled)}>
                  {focusEnabled ? 'Unfocus' : 'Focus'}
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setCursorEnabled(!cursorEnabled)}>
                  {cursorEnabled ? 'Normal Cursor' : 'Cursor'}
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setHighlightLinks(!highlightLinks)}>
                  {highlightLinks ? 'Remove Highlight' : 'Highlight'}
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setHighContrast(!highContrast)}>
                  {highContrast ? 'Normal Contrast' : 'High Contrast'}
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setColorShift(!colorShift)}>
                  {colorShift ? 'Normal Colors' : 'Color Shift'}
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setAnimationsEnabled(!animationsEnabled)}>
                  {animationsEnabled ? 'Disable Animation' : 'Enable Animation'}
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setTextSize('1em')}>Normal Text</button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setTextSize('1.25em')}>Large Text</button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setTextSize('1.5em')}>Extra Large Text</button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setSpacing('normal')}>Normal Spacing</button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setSpacing('wide')}>Wide Spacing</button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setFont('sans-serif')}>Sans-serif Font</button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setFont('serif')}>Serif Font</button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setGuideEnabled(!guideEnabled)}>
                  {guideEnabled ? 'Disable Guide' : 'Guide'}
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={togglePageStructure}>
                  Page Structure
                </button>
                <button className="p-2 bg-gray-200 rounded" onClick={() => setImagesVisible(!imagesVisible)}>
                  {imagesVisible ? 'Hide Images' : 'Show Images'}
                </button>
              </div>
            </div>
          )}
        </>
      )}
      {showPageStructure && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Page Structure</h2>
              <button onClick={togglePageStructure} className="text-gray-600 hover:text-gray-800">
                Close
              </button>
            </div>
            {renderPageStructure()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accessibility;
