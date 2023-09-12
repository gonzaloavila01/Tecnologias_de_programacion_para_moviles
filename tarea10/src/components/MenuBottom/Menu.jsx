import { View, StyleSheet} from 'react-native';
import Button from '../Button/Button';
import { THEME } from '../../theme/Colors';

export const MenuBottom = ({}) => {
  return (
    <View style={styles.content}>
      <Button
        icon={'home'}
        size={20}
        backgroundColor={THEME.COLORS.BLACK}
        color={'white'}
        circleSize={40}
      />
      <Button
        icon={'wallet'}
        size={20}
        backgroundColor={THEME.COLORS.GRAY}
        color={'black'}
        circleSize={40}
      />
      <Button
        icon={'bells'}
        size={20}
        backgroundColor={THEME.COLORS.GRAY}
        color={'black'}
        circleSize={40}
      />
      <Button
        icon={'user'}
        size={20}
        backgroundColor={THEME.COLORS.GRAY}
        color={'black'}
        circleSize={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    width: '100%',

  },  
  iconContainer: {
    width: 50, 
    height: 50, 
    borderRadius: 10, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'black'
  },
});