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
  const [language, setLanguage] = useState({
    name: "Spanish",
    code: "es",
  });
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);

  const languages = [
  { name: "Spanish", code: "es" },
  { name: "Hindi", code: "hi" },
  { name: "French", code: "fr" },
  { name: "German", code: "de" },
  { name: "Italian", code: "it" },
  { name: "Japanese", code: "ja" },
  { name: "Korean", code: "ko" },
  { name: "Chinese", code: "zh" },
  { name: "Portuguese", code: "pt" },
  { name: "Russian", code: "ru" },
  { name: "Arabic", code: "ar" },
];

// Speech to Text
function handleSpeechToText() {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech Recognition not supported in this browser");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US"; 
  recognition.start();

  recognition.onresult = (event) => {
    const speechText = event.results[0][0].transcript;
    setText((prev) => prev + " " + speechText);
  };

  recognition.onerror = (event) => {
    console.error(event.error);
  };

  setTimeout(() => {
    recognition.stop();
  }, 5000);
}

// Paste Function
async function handlePaste() {
  try {
    const clipboardText = await navigator.clipboard.readText();
    setText(clipboardText);
  } catch (error) {
    console.error("Paste failed:", error);
  }
}

  // 🔥 TRANSLATE FUNCTION
  async function translate() {
  console.log("Button clicked");

  if (!text) {
    console.log("No text");
    return;
  }

  try {
    console.log("Sending request...");

    const response = await axios.get(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=en|${language.code}`
    );

    console.log("Response:", response.data);

    setTranslatedText(response.data.responseData.translatedText);
  } catch (error) {
    console.error("ERROR:", error);
  }
}

// Clear Text
function handleClear() {
  setText("");
  setTranslatedText("");
}

// Copy Function
function handleCopy() {
  if (!translatedText) return;

  navigator.clipboard.writeText(translatedText);
}

// Speak Function
function handleSpeak() {
  if (!translatedText) return;

  speechSynthesis.cancel(); // stop previous speech

  const utterance = new SpeechSynthesisUtterance(translatedText);
  utterance.lang = language.code;

  speechSynthesis.speak(utterance);
}

  return (
    <main>
      {/* Heading */}
      <div className="mx-8 pt-28">
        <div className="font-mono">
          <h1 className="text-white text-5xl font-bold pb-2">
            Pure Linguistic
          </h1>
          <span className="text-[#5bf4de] text-5xl font-bold">
            Illumination.
          </span>
        </div>
      </div>

      <div className="p-8 md:p-12 min-h-[400px] grid grid-cols-2 gap-6">
        
        {/* LEFT SIDE */}
        <div className="bg-[rgb(0,0,1)] rounded-md">

          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-4">
            <div className="flex items-center gap-4">

              <button className="text-[#a3aac4] px-4 py-1.5 text-[0.7rem] uppercase tracking-widest">
                ENGLISH
              </button>

              <img src={change} className="size-6" />

              {/* DROPDOWN */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-[#006a68] text-[#dafffc] px-6 py-1.5 rounded-full text-[0.7rem] uppercase tracking-widest flex items-center gap-2 hover:bg-[#2ccdc7]"
                >
                  {language.name}
                  <img
                    src={dropdown}
                    className={`w-3 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10">
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

            <img src={close} className="cursor-pointer" onClick={handleClear}/>
          </div>

          {/* Textarea */}
          <div className="p-6">
            <textarea
              className="w-full h-40 bg-transparent outline-none text-xl text-white resize-none"
              placeholder="Enter text to translate..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between px-6 pb-6">
            <div className="flex gap-6">
              <img src={mic} className="cursor-pointer" onClick={handleSpeechToText()}/>
              <img src={upload} className="cursor-pointer" onClick={handlePaste}/>
            </div>

            <span className="text-[0.65rem] text-stone-300 tracking-widest uppercase">
              {text.length} / 5000
            </span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-[#141f38] rounded-md p-6 flex flex-col justify-between">

          <div>
            <div className="flex justify-between pb-6">
              <span className="text-[#5bf4de] text-sm">RESULT</span>

              <div className="flex gap-6">
                <img src={copy} onClick={handleCopy} className="cursor-pointer"/>
                <img src={speaker} onClick={handleSpeak} className="cursor-pointer"/>
              </div>
            </div>

            {/* OUTPUT */}
            <div className="text-2xl text-[#48e5d0]">
              {translatedText || "Translation will appear here..."}
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-end mt-6">
            <button
              onClick={translate}
              disabled={loading}
              className="bg-[#5bf4de] text-[#00594f] px-6 py-3 rounded-xl font-semibold hover:bg-[#3eddc5] transition"
            >
              {loading ? "Translating..." : "TRANSLATE"}
            </button>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Translator;