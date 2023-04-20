import Switch from 'react-switch';
import {useContext} from 'react';
import {ThemeContext} from 'styled-components'


interface Props {
  toggleTheme(): void;
}


export const ContainerSwitch = ({toggleTheme}: Props) => {


  const  {colors, title} = useContext(ThemeContext);


  return (
    <div>

      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={35}
        handleDiameter={25}
        onColor="#eaddff"
        offColor="#39393a"
        onHandleColor="#39393a"
        offHandleColor="#eaddff"
      
      />
    </div>
  );
}