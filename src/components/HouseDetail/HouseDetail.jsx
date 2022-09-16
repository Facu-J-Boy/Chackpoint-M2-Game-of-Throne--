import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {getHouse} from '../../redux/actions/index';
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {

  const date = useSelector((state) => state.house);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getHouse(props.match.params.houseId))
  })
    
    return (
        <div>
          <h1>{date.name}</h1>
          <h3>{date.words}</h3>
          {date.characters.map((c) => {
            return (
              <CharacterCard 
              key={c.id}
              id={c.id}
              fullName={c.fullName}
              title={c.title}
              family={c.family}
              imageUrl={c.imageUrl}
              />
            )
          })}
        </div>
    );
};

export default HouseDetail;
