
export const isArray = <InputArrayContents = unknown>(inputValue?: undefined | unknown| InputArrayContents | InputArrayContents[]): inputValue is InputArrayContents[] =>
  Array.isArray(inputValue);
