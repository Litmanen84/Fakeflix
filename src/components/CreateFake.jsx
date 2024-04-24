const generateRandomName = () => {
    const vowels = 'aeiou';
    const consonants = 'bcdfghjklmnpqrstvwxyz';
    const nameLength = 6;
    let name = '';
  
    const generateSyllable = () => {
      const consonant = consonants[Math.floor(Math.random() * consonants.length)];
      const vowel = vowels[Math.floor(Math.random() * vowels.length)];
      return consonant + vowel;
    };
  
    while (name.length < nameLength) {
      name += generateSyllable();
    }
  
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  
  // const fakeUser = () => generateRandomName();
  
  export default generateRandomName;
  
  