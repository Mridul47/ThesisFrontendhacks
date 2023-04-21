import {
    CalendarIcon,
    ChartBarIcon,
    FaceSmileIcon,
} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { PhotoIcon } from "@heroicons/react/24/outline";
import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

function Input() {
    const [input, setInput] = useState();
    //yo chai file select vayechi tyo post garne thau ma dekhauna lai ho
    const [selectedFile, setSelectedFile] = useState(null);
    //yo filepicker ko onclick chai photo upload garnalai ho ra suruma null rakhya karan user le click nagarunjel kei nahuna ho
    const filePickerRef = useRef(null);
    //emoji show garnalai ra initially click nagarikana kei dekhaunu hunna so null
    const [showEmojis, setShowEmojis] = useState(false);

    //Yo chai selected file display garnalai use garya function
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    const addEmoji = (e) => {
        let sym = e.unified.split("-");
        let codesArray = [];
        sym.forEach((el) => codesArray.push("0x" + el));
        let emoji = String.fromCodePoint(...codesArray);
        setInput(input + emoji);
    };



    return (
        <div
            className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll scrollbar-hide`}
        >
            <img
                src="https://pbs.twimg.com/profile_images/1634262876423852035/VG4YRyVr_400x400.jpg"
                alt=""
                className="h-11 w-11 rounded-full cursor-pointer"
            />
            <div className="w-full divide-y divide-gray-700">
                <div className={`${selectedFile && "pb-7"} ${input && "space-y-2.5"}`}>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)} //yo chai kei lekhda khere dynamic banauda khere gareko tyo post halda
                        rows="2"
                        placeholder="What's Happening?"
                        className="w-full bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide min-h-[50px]"
                    />
                    {selectedFile && (
                        <div className="relative">
                            <div
                                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                                // cross icon click garyo vane select garya file udauna lai yo tala ko logic le ho kna ki setSelectedFile lai mathi usestate ma null garya cha
                                onClick={() => setSelectedFile(null)}
                            >
                                <XMarkIcon className="text-white h-5" />
                            </div>
                            <img
                                src={selectedFile}
                                alt=""
                                className="rounded-2xl max-h-80 object-contain"
                            />
                        </div>
                    )}
                </div>
                <div className="flex items-center justify-between pt-2.5">
                    <div className="flex items-center">
                        <div
                            className="icon"
                            //yo filepicker ko onclick chai photo upload garnalai ho
                            onClick={() => filePickerRef.current.click()}
                        >
                            <PhotoIcon className="text-[#ff7f11] h-[22px]" />
                            <input
                                type="file"
                                ref={filePickerRef}
                                hidden
                                onChange={addImageToPost}
                            />
                        </div>

                        <div className="icon rotate-90">
                            <ChartBarIcon className="text-[#ff7f11] h-[22px]" />
                        </div>

                        <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                            <FaceSmileIcon className="text-[#ff7f11] h-[22px]" />
                        </div>

                        {/* <div className="icon">
                            <CalendarIcon className="text-[#ff7f11] h-[22px]" />
                        </div> */}

                        {showEmojis && (
                            <EmojiPicker
                                emojiStyle="facebook"
                                onEmojiClick={addEmoji}
                                theme="dark"
                            />
                        )}
                    </div>
                    <button
                        className="bg-[#ff7f11] text-white rounded-full px-4 py-1.5 font-bold shadow-md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
                        //yo tala ko code chai post khali huda button lai fikka parne ra kei halisakechi button glowup garnalai
                        disabled={!input && !selectedFile}
                        // onClick={sendPost}
                    >
                        Post Designs
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Input;
