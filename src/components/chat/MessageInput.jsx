"use client";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewMessage } from "@/features/user/chatSlice";
import {
  FiImage,
  FiMic,
  FiSmile,
  FiSend,
  FiX,
  FiPaperclip,
} from "react-icons/fi";
import { FaStackExchange } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import { toast } from "react-hot-toast";

const Modal = ({ closeModal, selectedLanguage, setSelectedLanguage }) => {
  const [tempLanguage, setTempLanguage] = useState(selectedLanguage || "none");
  
  const handleLanguageChange = (e) => {
    setTempLanguage(e.target.value);
  };
  
  const handleSave = () => {
    setSelectedLanguage(tempLanguage);
    localStorage.setItem('chatTranslationLanguage', tempLanguage);
    toast.success(`Translation language set to ${tempLanguage === 'none' ? 'None (disabled)' : tempLanguage}`);
    closeModal();
  };
  
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 relative w-full max-w-md">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          onClick={closeModal}
        >
          <FiX className="text-2xl" />
        </button>
        <h2 className="text-xl font-bold mb-4">
          Change Conversation Aid Language
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Your messages will be automatically translated to the selected language before sending.
        </p>
        <ul className="space-y-3">
          <li>
            <input 
              type="radio" 
              id="none" 
              name="language" 
              value="none" 
              checked={tempLanguage === "none"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="none" className="ml-2">
              None (No translation)
            </label>
          </li>
          <li>
            <input 
              type="radio" 
              id="chinese" 
              name="language" 
              value="zh-CN" 
              checked={tempLanguage === "zh-CN"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="chinese" className="ml-2">
              Chinese (中文)
            </label>
          </li>
          <li>
            <input 
              type="radio" 
              id="french" 
              name="language" 
              value="fr" 
              checked={tempLanguage === "fr"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="french" className="ml-2">
              French (Français)
            </label>
          </li>
          <li>
            <input 
              type="radio" 
              id="english" 
              name="language" 
              value="en" 
              checked={tempLanguage === "en"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="english" className="ml-2">
              English (English)
            </label>
          </li>
          <li>
            <input 
              type="radio" 
              id="bangla" 
              name="language" 
              value="bn" 
              checked={tempLanguage === "bn"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="bangla" className="ml-2">
              Bangla (বাংলা)
            </label>
          </li>
          <li>
            <input 
              type="radio" 
              id="arabic" 
              name="language" 
              value="ar" 
              checked={tempLanguage === "ar"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="arabic" className="ml-2">
              Arabic (العربية)
            </label>
          </li>
          <li>
            <input 
              type="radio" 
              id="urdu" 
              name="language" 
              value="ur" 
              checked={tempLanguage === "ur"}
              onChange={handleLanguageChange}
            />
            <label htmlFor="urdu" className="ml-2">
              Urdu (اردو)
            </label>
          </li>
        </ul>
        <button 
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};

// Helper function to translate text using Google Translate API
const translateText = async (text, targetLanguage) => {
  try {
    // For demonstration, we'll use a free translation API
    // In production, you might want to use a paid service like Google Cloud Translation API
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLanguage}&dt=t&q=${encodeURIComponent(text)}`
    );
    
    const data = await response.json();
    // Extract the translated text from the response
    const translatedText = data[0].map(item => item[0]).join('');
    return translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    // Return original text if translation fails
    return text;
  }
};

const MessageInput = ({ scrollToBottom }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isTranslating, setIsTranslating] = useState(false);
  const fileInputRef = useRef(null);

  // Get the saved translation language from localStorage or default to 'none'
  const [selectedLanguage, setSelectedLanguage] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('chatTranslationLanguage') || 'none' : 'none'
  );

  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.chat.selectedUser);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((!message.trim() && !selectedFile) || !selectedUser || !currentUser)
      return;

    try {
      // Show translating indicator if translation is enabled
      if (selectedLanguage !== 'none' && message.trim()) {
        setIsTranslating(true);
      }
      
      const formData = new FormData();
      
      // Translate the message if a language is selected and it's not 'none'
      let finalMessage = message.trim();
      let originalMessage = '';
      
      if (selectedLanguage !== 'none' && finalMessage) {
        try {
          // Store the original message
          originalMessage = finalMessage;
          
          // Translate the message
          const translatedText = await translateText(finalMessage, selectedLanguage);
          
          // Format the message to include both original and translated text
          finalMessage = `${translatedText}\n\n[Original: ${originalMessage}]`;
          
          // Show success toast for translation
          toast.success(`Message translated to ${selectedLanguage}`);
        } catch (error) {
          console.error('Translation failed:', error);
          toast.error('Translation failed, sending original message');
          // Use original message if translation fails
          finalMessage = originalMessage;
        } finally {
          setIsTranslating(false);
        }
      }
      
      // Add the final message content to the form data
      if (finalMessage) {
        formData.append("content", finalMessage);
      }
      
      if (selectedFile) {
        formData.append("file", selectedFile);
      }
      
      formData.append("receiverId", selectedUser._id);
      formData.append("senderId", currentUser._id);
      formData.append(
        "participants",
        JSON.stringify([currentUser._id, selectedUser._id])
      );

      await dispatch(createNewMessage(formData)).unwrap();
      setMessage("");
      setSelectedFile(null);
      setFilePreview(null);
      if (scrollToBottom) {
        scrollToBottom();
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message");
      setIsTranslating(false);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        toast.error("File size should be less than 5MB");
        return;
      }
      setSelectedFile(file);

      // Create preview for images
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="relative border-t bg-white p-4">
        {/* Translation Status Indicator */}
        {selectedLanguage !== 'none' && (
          <div className="mb-2 p-2 bg-blue-50 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-sm text-blue-700">
                Translation: <span className="font-medium">{selectedLanguage}</span>
                {isTranslating && <span className="ml-2 animate-pulse">Translating...</span>}
              </span>
            </div>
          </div>
        )}
        
        {/* File Preview */}
        {selectedFile && (
          <div className="mb-2 p-2 bg-gray-100 rounded-lg flex items-center justify-between">
            <div className="flex items-center">
              {filePreview ? (
                <img
                  src={filePreview}
                  alt="Preview"
                  className="w-10 h-10 object-cover rounded"
                />
              ) : (
                <FiPaperclip className="w-5 h-5" />
              )}
              <span className="ml-2 text-sm truncate">{selectedFile.name}</span>
            </div>
            <button
              onClick={removeSelectedFile}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FiSmile className="w-6 h-6" />
            </button>
            {showEmojiPicker && (
              <div className="absolute bottom-12 left-0 z-50">
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>

          {/* File Input */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            className="hidden"
            accept="image/*,.pdf,.doc,.docx,.txt"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FiPaperclip className="w-6 h-6" />
          </button>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border rounded-full focus:outline-none focus:border-blue-500"
            onFocus={() => setShowEmojiPicker(false)}
          />

          <button
            type="submit"
            disabled={!message.trim() && !selectedFile || isTranslating}
            className={`p-2 rounded-full ${
              (message.trim() || selectedFile) && !isTranslating
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            {isTranslating ? (
              <div className="w-5 h-5 border-2 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
            ) : (
              <IoSend className="w-5 h-5" />
            )}
          </button>
        </form>
      </div>

      {/* Translation Settings Button */}
      <div className="flex items-center">
        <button
          type="button"
          className={`ml-4 p-2 rounded-full text-white ${selectedLanguage !== 'none' ? 'bg-green-500' : 'bg-primary'}`}
          onClick={openModal}
          title="Translation Settings"
        >
          <FaStackExchange size={20} />
        </button>
        {selectedLanguage !== 'none' && (
          <span className="ml-2 text-xs text-gray-500">{selectedLanguage}</span>
        )}
      </div>

      {/* Modal for Changing Conversation Language */}
      {isModalOpen && (
        <Modal 
          closeModal={closeModal} 
          selectedLanguage={selectedLanguage} 
          setSelectedLanguage={setSelectedLanguage} 
        />
      )}
    </>
  );
};

export default MessageInput;
