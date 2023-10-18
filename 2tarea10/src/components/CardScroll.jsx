import {  ScrollView} from 'react-native';
import Card from './Card';
import { CARDS } from '../constants/Cards';


export default function CardScroll() {

  return (
      <ScrollView horizontal={true}>
        {CARDS.map((tarjeta, index) => (
            <Card
              key={index}
              name={tarjeta.name}
              price={tarjeta.price}
              image={tarjeta.image}
            />
          ))}
      </ScrollView>
  );
}

