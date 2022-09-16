import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteHouse} from '../../redux/actions/index';

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {

    render() {
        const {deleteHouse} = this.props
        return (
            <div>
                <button onClick={() => deleteHouse(this.props.id)} ></button>
                <Link to={`/houses/${this.props.id}`}><h3>{this.props.name}</h3></Link>
                <p>Region: {this.props.region}</p>
                <p>Words: {this.props.words}</p>
            </div>
        );
    };
};

export const mapDispatchToProps = ({deleteHouse});

export default connect(null, mapDispatchToProps)(HouseCard);
