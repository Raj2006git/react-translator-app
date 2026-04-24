import { useState } from "react";
import axios from "axios";
import change from "../assets/change.png";
import close from "../assets/icons8-close.svg";
import mic from "../assets/icons8-mic-16.png";
import upload from "../assets/icons8-upload-file-16.png";
import copy from "../assets/icons8-copy-16.png";
import speaker from "../assets/icons8-speaker-16.png";
import dropdown from "../assets/icons8-drop-down-16.png";

const Translator = () => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState({ name: "Spanish", code: "es" });
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const languages = [
    { name: "Spanish", code: "es" },
    { name: "Hindi", code: "hi" },
    { name: "French", code: "fr" },
    { name: "German", code: "de" },
  ];

  function handleSpeechToText() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onresult = (event) => {
      const speechText = event.results[0][0].transcript;
      setText((prev) => prev + " " + speechText);
    };

    setTimeout(() => recognition.stop(), 5000);
  }

  async function handlePaste() {
    const text = await navigator.clipboard.readText();
    setText(text);
  }

  async function translate() {
    if (!text) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.mymemory.translated.net/get?q=${text}&langpair=en|${language.code}`
      );
      setTranslatedText(res.data.responseData.translatedText);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  }

  function handleClear() {
    setText("");
    setTranslatedText("");
  }

  function handleCopy() {
    if (!translatedText) return;
    navigator.clipboard.writeText(translatedText);
  }

  function handleSpeak() {
    if (!translatedText) return;
    const utterance = new SpeechSynthesisUtterance(translatedText);
    speechSynthesis.speak(utterance);
  }

  return (
    <main className="px-4 md:px-10 pt-20">

      {/* Heading */}
      <div className="mb-8 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          Pure Linguistic
        </h1>
        <span className="text-[#5bf4de] text-3xl md:text-5xl font-bold">
          Illumination.
        </span>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT */}
        <div className="bg-black rounded-lg">

          {/* Header */}
          <div className="flex flex-wrap items-center justify-between px-4 pt-4 gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <button className="text-[#a3aac4] text-xs uppercase">
                ENGLISH
              </button>

              <img src={change} className="w-5" />

              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-[#006a68] text-xs px-4 py-1 rounded-full flex items-center gap-2"
                >
                  {language.name}
                  <img src={dropdown} className="w-3" />
                </button>

                {isOpen && (
                  <div className="absolute mt-2 w-full bg-white rounded shadow z-10">
                    {languages.map((lang) => (
                      <div
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang);
                          setIsOpen(false);
                        }}
                        className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                      >
                        {lang.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <img src={close} onClick={handleClear} className="cursor-pointer w-5" />
          </div>

          {/* TEXTAREA */}
          <div className="p-4">
            <textarea
              className="w-full h-32 md:h-40 bg-transparent text-white outline-none resize-none"
              placeholder="Enter text..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* BOTTOM */}
          <div className="flex justify-between items-center px-4 pb-4">
            <div className="flex gap-4">
              <img src={mic} onClick={handleSpeechToText} className="cursor-pointer w-5" />
              <img src={upload} onClick={handlePaste} className="cursor-pointer w-5" />
            </div>

            <span className="text-xs text-gray-400">
              {text.length}/5000
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-[#141f38] rounded-lg p-4 flex flex-col justify-between">

          <div>
            <div className="flex justify-between pb-4">
              <span className="text-[#5bf4de] text-sm">RESULT</span>
              <div className="flex gap-4">
                <img src={copy} onClick={handleCopy} className="cursor-pointer w-5" />
                <img src={speaker} onClick={handleSpeak} className="cursor-pointer w-5" />
              </div>
            </div>

            <div className="text-lg md:text-2xl text-[#48e5d0]">
              {translatedText || "Translation will appear here..."}
            </div>
          </div>

          <button
            onClick={translate}
            disabled={loading}
            className="mt-6 bg-[#5bf4de] text-black py-3 rounded-lg font-semibold"
          >
            {loading ? "Translating..." : "TRANSLATE"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Translator;