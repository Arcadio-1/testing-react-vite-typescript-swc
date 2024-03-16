export const convert_to_en_number = (str: string): string => {
  const arabicToEnglishMap: { [key: string]: string } = {
    "٠": "0",
    "١": "1",
    "٢": "2",
    "٣": "3",
    "٤": "4",
    "٥": "5",
    "٦": "6",
    "٧": "7",
    "٨": "8",
    "٩": "9",
  };
  const persianToEnglishMap: { [key: string]: string } = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };

  const convertedNumber = str
    .split("")
    .map((digit) => {
      const theNum = persianToEnglishMap[digit];
      if (!theNum) {
        return digit;
      }
      return theNum;
    })
    .map((digit) => {
      const theNum = arabicToEnglishMap[digit];
      if (!theNum) {
        return digit;
      }
      return theNum;
    })
    .join("");
  return convertedNumber;
};
