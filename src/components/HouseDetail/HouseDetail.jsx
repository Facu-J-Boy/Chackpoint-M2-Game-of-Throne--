import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getHouse} from '../../redux/actions/index';
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {

  const date = useSelector((state) => state.house);
  console.log(date);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getHouse(props.id))
  // })
    
    return (
        <div>
          <CharacterCard 
          key={date.id}
          id={date.id}
          name={date.name}
          title={date.title}
          family={date.family}
          image={date.imageUrl}
          />
        </div>
    );
};

export default HouseDetail;
