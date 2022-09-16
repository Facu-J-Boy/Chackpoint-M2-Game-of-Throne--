import React from "react";
import { useDispatch } from "react-redux";
import {createHouse} from '../../redux/actions';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {

  const dispatch = useDispatch();

  const [house, setHouse] = React.useState({
    name:'',
    region:'',
    words:'',
  });

  const handleInputChange = function(e) {
    setHouse({
      ...house,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = function(e){
    e.preventDefault();
    dispatch(createHouse(house))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input name='name' value={house.name} onChange={handleInputChange} />
        <label>Region: </label>
        <input name='region' value={house.region} onChange={handleInputChange} />
        <label>Words: </label>
        <input name='words' value={house.words} onChange={handleInputChange} />
        <button type='submit' >Create</button>
      </form>
    </div>
  );
};

export default CreateHouse;
