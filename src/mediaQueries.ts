//Tamanhos considerados:
const sizes = {
  
  mobile: '375px',  
  tablet: '768px',  
  laptop: '1440px',
  desktop: '2560px',
};

export const devices = {

  mobile: `(min-width: ${sizes.mobile})`, 
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`, 
  desktop: `(min-width: ${sizes.desktop})`,
};