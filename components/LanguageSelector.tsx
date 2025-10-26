"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Globe, Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

// Type definitions for Google Translate
interface GoogleTranslateElementClass {
  new (config: {
    pageLanguage: string;
    includedLanguages: string;
    layout: number;
  }, elementId: string): void;
  InlineLayout: {
    SIMPLE: number;
  };
}

interface GoogleTranslate {
  translate: {
    TranslateElement: GoogleTranslateElementClass;
  };
}

declare global {
  interface Window {
    google?: GoogleTranslate;
    googleTranslateElementInit?: () => void;
    googleTranslateInitialized?: boolean;
  }
}

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
}

const languages: Language[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { code: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", flag: "🇨🇳" },
  { code: "zh-TW", name: "Chinese (Traditional)", nativeName: "繁體中文", flag: "🇹🇼" },
  { code: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { code: "bn", name: "Bengali", nativeName: "বাংলা", flag: "🇧🇩" },
  { code: "pa", name: "Punjabi", nativeName: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  { code: "te", name: "Telugu", nativeName: "తెలుగు", flag: "🇮🇳" },
  { code: "mr", name: "Marathi", nativeName: "मराठी", flag: "🇮🇳" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்", flag: "🇮🇳" },
  { code: "ur", name: "Urdu", nativeName: "اردو", flag: "🇵🇰" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", flag: "🇻🇳" },
  { code: "th", name: "Thai", nativeName: "ไทย", flag: "🇹🇭" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱" },
  { code: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", flag: "🇺🇦" },
  { code: "ro", name: "Romanian", nativeName: "Română", flag: "🇷🇴" },
  { code: "el", name: "Greek", nativeName: "Ελληνικά", flag: "🇬🇷" },
  { code: "cs", name: "Czech", nativeName: "Čeština", flag: "🇨🇿" },
  { code: "sv", name: "Swedish", nativeName: "Svenska", flag: "🇸🇪" },
  { code: "hu", name: "Hungarian", nativeName: "Magyar", flag: "🇭🇺" },
  { code: "fi", name: "Finnish", nativeName: "Suomi", flag: "🇫🇮" },
  { code: "no", name: "Norwegian", nativeName: "Norsk", flag: "🇳🇴" },
  { code: "da", name: "Danish", nativeName: "Dansk", flag: "🇩🇰" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", flag: "🇮🇩" },
  { code: "ms", name: "Malay", nativeName: "Bahasa Melayu", flag: "🇲🇾" },
  { code: "he", name: "Hebrew", nativeName: "עברית", flag: "🇮🇱" },
  { code: "fa", name: "Persian", nativeName: "فارسی", flag: "🇮🇷" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili", flag: "🇰🇪" },
  { code: "af", name: "Afrikaans", nativeName: "Afrikaans", flag: "🇿🇦" },
];

interface LanguageSelectorProps {
  variant?: "default" | "minimal";
}

export function LanguageSelector({ variant = "default" }: LanguageSelectorProps) {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const hasAppliedInitialTranslation = useRef(false);

  // Only run on client side
  useEffect(() => {
    setMounted(true);
  }, []);

  const initializeGoogleTranslate = useCallback(() => {
    if (typeof window === "undefined") return;

    try {
      // Check if already initialized - CRITICAL to prevent re-initialization
      if (window.googleTranslateInitialized || isInitialized) {
        console.log("ℹ️ Already initialized, skipping...");
        setIsInitialized(true);
        return;
      }

      // Create container
      let container = document.getElementById("google_translate_element");
      if (!container) {
        container = document.createElement("div");
        container.id = "google_translate_element";
        container.style.cssText = "position: fixed; top: -9999px; left: -9999px; opacity: 0; pointer-events: none;";
        document.body.appendChild(container);
      }

      // Define callback before loading script
      window.googleTranslateElementInit = function () {
        try {
          if (window.google?.translate?.TranslateElement) {
            new window.google.translate.TranslateElement(
              {
                pageLanguage: "en",
                includedLanguages: languages.map((lang) => lang.code).join(","),
                layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              },
              "google_translate_element"
            );
            window.googleTranslateInitialized = true;
            setIsInitialized(true);
            console.log("✅ Google Translate initialized");
          }
        } catch (err) {
          console.error("❌ Google Translate init error:", err);
          setError("Init failed");
        }
      };

      // Check if script already exists
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        script.onerror = () => {
          console.error("❌ Failed to load Google Translate script");
          setError("Failed to load");
        };
        document.head.appendChild(script);
      } else if (window.google?.translate) {
        window.googleTranslateInitialized = true;
        setIsInitialized(true);
      }
    } catch (err) {
      console.error("❌ Initialization error:", err);
      setError("Init error");
    }
  }, [isInitialized]);

  const applyTranslation = useCallback((languageCode: string) => {
    if (typeof window === "undefined") return;

    // Prevent multiple simultaneous translations
    if (isTranslating) {
      console.log("⏸️ Translation already in progress, skipping...");
      return;
    }

    if (languageCode === "en") {
      // Reset to English - clear cookies and reload
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${window.location.hostname};`;
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.${window.location.hostname.split('.').slice(-2).join('.')};";
      
      // Mark that we're resetting
      sessionStorage.setItem("translationReset", "true");
      window.location.reload();
      return;
    }

    setIsTranslating(true);
    setIsLoading(true);
    setError(null);
    console.log("🔄 Translating to:", languageCode);

    // Use cookie method directly - it's more reliable
    try {
      // Set the translation cookie
      document.cookie = `googtrans=/en/${languageCode}; path=/; max-age=31536000`;
      document.cookie = `googtrans=/en/${languageCode}; path=/; domain=${window.location.hostname}; max-age=31536000`;
      
      // Also set on root domain if applicable
      const domain = window.location.hostname.split('.').slice(-2).join('.');
      if (domain && domain.includes('.')) {
        document.cookie = `googtrans=/en/${languageCode}; path=/; domain=.${domain}; max-age=31536000`;
      }
      
      console.log("✅ Translation cookie set for:", languageCode);
      
      // Mark that translation is happening
      sessionStorage.setItem("translationInProgress", languageCode);
      
      // Reload page to apply translation
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (err) {
      console.error("❌ Translation failed:", err);
      setError("Translation failed");
      setIsLoading(false);
      setIsTranslating(false);
    }
  }, [isTranslating]);

  useEffect(() => {
    if (!mounted || isInitialized) return;

    // Initialize only once on mount
    const timer = setTimeout(() => {
      initializeGoogleTranslate();
    }, 100);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  useEffect(() => {
    if (!mounted || !isInitialized || hasAppliedInitialTranslation.current) return;

    // Check if we just reset or translated
    const translationReset = sessionStorage.getItem("translationReset");
    const translationInProgress = sessionStorage.getItem("translationInProgress");
    
    if (translationReset) {
      sessionStorage.removeItem("translationReset");
      hasAppliedInitialTranslation.current = true;
      setCurrentLanguage("en");
      localStorage.setItem("selectedLanguage", "en");
      return;
    }
    
    if (translationInProgress) {
      sessionStorage.removeItem("translationInProgress");
      hasAppliedInitialTranslation.current = true;
      setCurrentLanguage(translationInProgress);
      return;
    }

    // Load saved language only once
    const savedLanguage = localStorage.getItem("selectedLanguage");
    
    // Check if page is already translated by reading cookie
    const cookies = document.cookie.split(';');
    const googTransCookie = cookies.find(c => c.trim().startsWith('googtrans='));
    const currentTranslation = googTransCookie ? googTransCookie.split('=')[1].split('/')[2] : null;
    
    if (currentTranslation && currentTranslation !== 'en') {
      // Page is already translated, just update state
      hasAppliedInitialTranslation.current = true;
      setCurrentLanguage(currentTranslation);
      localStorage.setItem("selectedLanguage", currentTranslation);
    } else if (savedLanguage && savedLanguage !== "en" && savedLanguage !== currentLanguage) {
      // Apply saved language translation
      hasAppliedInitialTranslation.current = true;
      setCurrentLanguage(savedLanguage);
      setTimeout(() => {
        applyTranslation(savedLanguage);
      }, 1000);
    } else {
      // No translation needed
      hasAppliedInitialTranslation.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, isInitialized]);

  const handleLanguageChange = (languageCode: string) => {
    // Prevent change if already translating or if it's the same language
    if (isTranslating || languageCode === currentLanguage) {
      console.log("⏸️ Skipping language change");
      return;
    }
    
    setCurrentLanguage(languageCode);
    localStorage.setItem("selectedLanguage", languageCode);
    applyTranslation(languageCode);
  };

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const selectedLanguage = languages.find((lang) => lang.code === currentLanguage);

  if (variant === "minimal") {
    return (
      <div className="relative">
        <Select 
          value={currentLanguage} 
          onValueChange={handleLanguageChange}
          disabled={isLoading}
        >
          <SelectTrigger className="w-[180px] h-9 text-sm">
            <div className="flex items-center gap-2">
              {isLoading ? (
                <>
                  <Globe className="h-4 w-4 animate-spin" />
                  <span>Translating...</span>
                </>
              ) : (
                <>
                  <span className="text-base">{selectedLanguage?.flag}</span>
                  <span>{selectedLanguage?.nativeName}</span>
                </>
              )}
            </div>
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {error && (
              <div className="px-2 py-1 text-xs text-destructive">
                {error}
              </div>
            )}
            {languages.map((language) => (
              <SelectItem key={language.code} value={language.code}>
                <div className="flex items-center gap-2">
                  <span className="text-base">{language.flag}</span>
                  <span>{language.nativeName}</span>
                  {currentLanguage === language.code && (
                    <Check className="h-3 w-3 ml-auto" />
                  )}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  }

  return (
    <div className="relative">
      <Select 
        value={currentLanguage} 
        onValueChange={handleLanguageChange}
        disabled={isLoading}
      >
        <SelectTrigger className="w-[200px] bg-background/90 backdrop-blur-md border border-muted-foreground/20 rounded-full">
          <div className="flex items-center gap-2">
            {isLoading ? (
              <>
                <Globe className="h-4 w-4 animate-spin" />
                <span>Translating...</span>
              </>
            ) : (
              <>
                <Globe className="h-4 w-4" />
                <span className="text-base mr-1">{selectedLanguage?.flag}</span>
                <span>{selectedLanguage?.nativeName}</span>
              </>
            )}
          </div>
        </SelectTrigger>
        <SelectContent className="max-h-[400px] w-[300px]">
          <div className="p-2">
            <div className="text-xs font-semibold text-muted-foreground mb-2 px-2">
              Select Language / भाषा चुनें / 选择语言
            </div>
            {error && (
              <div className="px-2 py-1 mb-2 text-xs text-destructive bg-destructive/10 rounded">
                {error}
              </div>
            )}
            <div className="space-y-1">
              {languages.map((language) => (
                <SelectItem
                  key={language.code}
                  value={language.code}
                  className="cursor-pointer"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{language.flag}</span>
                      <span className="font-medium">{language.nativeName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {language.name}
                      </span>
                      {currentLanguage === language.code && (
                        <Check className="h-3 w-3 text-primary" />
                      )}
                    </div>
                  </div>
                </SelectItem>
              ))}
            </div>
          </div>
        </SelectContent>
      </Select>
    </div>
  );
}
