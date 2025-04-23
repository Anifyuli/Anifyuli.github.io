import { useState, useEffect, ReactNode } from 'react';

// Tipe untuk item konten individual
type ContentItem = {
  text: string;
  className?: string;
  element?: keyof JSX.IntrinsicElements;
};

// Tipe utama yang menerima baik string, item konten, atau array
type TypewriterProps = {
  // Bisa menerima string sederhana, objek tunggal, atau array objek
  content: string | ContentItem | ContentItem[];
  delay: number;
  className?: string; // Class untuk string sederhana
  element?: keyof JSX.IntrinsicElements; // Elemen untuk string sederhana
  onComplete?: () => void;
  repeatCount?: number; // Jumlah pengulangan (default: 1, infinite: -1)
  delayBetweenRepeats?: number; // Jeda antara pengulangan (ms)
};

export const TypewriterText = ({ 
  content, 
  delay, 
  className, 
  element = 'span',
  onComplete,
  repeatCount = 1, // Default 1 kali, -1 untuk tak terbatas
  delayBetweenRepeats = 1000, // Default jeda 1 detik
}: TypewriterProps) => {
  // Normalisasi konten ke format array yang konsisten
  const normalizedContent: ContentItem[] = (() => {
    if (typeof content === 'string') {
      // Jika content adalah string, buat objek tunggal dengan className dan element yang disediakan
      return [{ text: content, className, element }];
    } else if (!Array.isArray(content)) {
      // Jika content adalah objek tunggal, jadikan array
      return [content];
    }
    // Jika content sudah berupa array, gunakan langsung
    return content;
  })();
  
  // Gabungkan semua teks untuk proses animasi
  const fullText = normalizedContent.map(item => item.text).join('');
  
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentRepeat, setCurrentRepeat] = useState(1);
  const [isRepeating, setIsRepeating] = useState(false);

  // Reset animasi jika konten berubah
  useEffect(() => {
    setCurrentText('');
    setCurrentIndex(0);
    setIsComplete(false);
    setCurrentRepeat(1);
    setIsRepeating(false);
  }, [content]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    
    // Jika dalam mode pengulangan dan menunggu untuk pengulangan berikutnya
    if (isRepeating) {
      timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex(0);
        setIsRepeating(false);
      }, delayBetweenRepeats);
      
      return () => clearTimeout(timeout);
    }
    
    // Proses normal mengetik
    if (currentIndex < fullText.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
    } else {
      // Teks selesai diketik
      
      // Periksa jika masih perlu diulang
      if ((repeatCount === -1 || currentRepeat < repeatCount) && !isComplete) {
        timeout = setTimeout(() => {
          setIsRepeating(true);
          setCurrentRepeat(prev => prev + 1);
        }, delay * 10); // Jeda singkat sebelum bersiap untuk mengulangi
      } else if (!isComplete) {
        // Semua pengulangan selesai
        setIsComplete(true);
        onComplete?.();
      }
    }
  
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, fullText, isComplete, currentRepeat, repeatCount, onComplete, isRepeating, delayBetweenRepeats]);

  // Fungsi untuk merender konten dengan styling
  const renderStyledContent = (): ReactNode => {
    const renderedContent: ReactNode[] = [];
    let currentPosition = 0;
    
    normalizedContent.forEach((item, idx) => {
      const itemLength = item.text.length;
      const endPosition = currentPosition + itemLength;
      
      // Potong teks yang sudah dirender untuk bagian ini
      const visibleText = currentText.slice(currentPosition, endPosition);
      
      // Tentukan elemen yang akan digunakan
      const ElementType = item.element || 'span';
      
      // Tambahkan elemen dengan teks dan styling
      renderedContent.push(
        <ElementType key={idx} className={item.className}>
          {visibleText}
        </ElementType>
      );
      
      currentPosition = endPosition;
    });
    
    return renderedContent;
  };

  return (
    <>
      {renderStyledContent()}
      {!isComplete && (
        <span className="inline-block w-auto h-auto ml-1 animate-pulse" />
      )}
    </>
  );
};