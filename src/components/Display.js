export default function Display({
  className,
  currentInput,
  previousInput,
  operation,
  result,
}) {
  // Dinamik olarak ekran için görüntülenecek değer
  const displayValue =
    currentInput !== "" // Eğer yeni bir giriş varsa, onu göster
      ? previousInput + operation + currentInput
      : result !== "" // Eğer bir sonuç varsa, onu göster
      ? result
      : previousInput + operation; // Sonuç veya yeni giriş yoksa, önceki işlem

  return (
    <input
      type="text"
      className={className}
      value={displayValue || "0"}
      placeholder="0"
      disabled
    />
  );
}
