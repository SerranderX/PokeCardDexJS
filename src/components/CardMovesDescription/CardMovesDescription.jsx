import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { toUpperCaseIndex, transformString, transformVerString } from '../../shared/Utils';
import { InfoBox } from '../InfoBox/InfoBox';
import { InfoBoxItem } from '../InfoBoxItem/InfoBoxItem';
import { learnedMethods, powerTypes, versions } from '../../shared/Utils';
import './CardMovesDescription.css';

const CardMovesDescription = ({tabTitle, pokemonBackground, pokemon, selectedTab, generacion}) => {
    const [version, setVersion] = useState('');
    const [pokemonVersions, setPokemonVersions] = useState([]);
    const [moves, setMoves] = useState([]);

    const handleChange = (event) => {
        setVersion(event.target.value);
    };

    useEffect(() => {
        if(pokemonVersions.length == 0){
            let aux = false;

            const pokemonAbailableVersions = versions.flatMap(version => {
                if(version.version.generation_id === generacion && aux === false) {
                    aux = true;
                }
                
                return (aux) ? version : [];
            });
            
            
            setPokemonVersions(pokemonAbailableVersions);
            setVersion(pokemonAbailableVersions[0].version.name);
        }

        if(pokemonVersions.length > 0 && version !== '') {
            const auxMove = [];

            const movesFiltered = pokemon.moves.flatMap(item => {
                const filterVer = item.version_group_details.filter(ver => ver.version_group.name === version);
                const filterName = auxMove.filter(moveName => moveName.name === item.move.name);
    
                if(filterVer.length > 0 && filterName.length === 0){
                    auxMove.push({name: item.move.name});
                    const filtredLearnMethod = learnedMethods.filter(method => filterVer[0].move_learn_method.name === method.name);
                    item.learnedMethod = (filtredLearnMethod ) ? filtredLearnMethod[0] : null;
                    return item;
                } else {
                    return [];
                }
            });
            
            setMoves(movesFiltered);
        }
    }, [version]);

    return (
        <React.Fragment>
            <section className="CharacterCard-Description-Title" style={{backgroundColor: pokemonBackground.secondary, borderBottom: `1px ${pokemonBackground.primary} solid`, paddingBottom: "1em"}}>
                <motion.h1>{toUpperCaseIndex(tabTitle)}</motion.h1> 
                <p>{selectedTab.description}</p>
                <div className="Pokemon-Version_div">
                    <select className="Pokemon-Version_select" onChange={handleChange} style={{backgroundColor: pokemonBackground.primary}}>
                        {(pokemonVersions.length > 0) && pokemonVersions.map(version => (
                            <option key={version.version.name} value={version.version.name}>{toUpperCaseIndex(transformVerString(version.version.name))}</option>
                        ))}
                    </select>
                </div>
                <p style={{marginTop: ".5em"}}>Select the pokemon game version.</p>
                <div className="Glosary" style={{border: `3px ${pokemonBackground.primary} solid`}}>
                    <h3 className="Glosary-title"> Glosary </h3>
                    <div className="Glosary-types Learned-type" style={{borderTop: `1px ${pokemonBackground.primary} solid`}}>
                        <h4>Learned type</h4>
                        <div className='Glosary_item'>
                            <img src={learnedMethods[0].src} alt={learnedMethods[0].name}/>
                            <p>{toUpperCaseIndex(transformString(learnedMethods[0].name))}</p>
                        </div>
                        <div className='Glosary_item'>
                            <img src={learnedMethods[1].src} alt={learnedMethods[1].name}/>
                            <p>{toUpperCaseIndex(transformString(learnedMethods[1].name))}</p>
                        </div>
                        <div className='Glosary_item'>
                            <img src={learnedMethods[2].src} alt={learnedMethods[2].name}/>
                            <p>{toUpperCaseIndex(transformString(learnedMethods[2].name))}</p>
                        </div>
                    </div>
                    <div className="Glosary-types Move-type" style={{borderTop: `1px ${pokemonBackground.primary} solid`}}>
                        <h4>Power type</h4>
                        <div className='Glosary_item'>
                            <img src={powerTypes[0].src} alt={powerTypes[0].name}/>
                            <p>{toUpperCaseIndex(transformString(powerTypes[0].name))}</p>
                        </div>
                        <div className='Glosary_item'>
                            <img src={powerTypes[1].src} alt={powerTypes[1].name}/>
                            <p>{toUpperCaseIndex(transformString(powerTypes[1].name))}</p>
                        </div>
                        <div className='Glosary_item'>
                            <img src={powerTypes[2].src} alt={powerTypes[2].name}/>
                            <p>{toUpperCaseIndex(transformString(powerTypes[2].name))}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="CharacterCard-Description-Body">
                <InfoBox title={`Pokemon ${toUpperCaseIndex(transformVerString(version))} moves`} pokemonBackground={pokemonBackground}>
                    {moves.map(move => 
                        <InfoBoxItem 
                            key={move.move.name} 
                            pokemonBackground={pokemonBackground} 
                            endPoint={move.move.url}
                            powerTypes={powerTypes}
                            learnedMethod={move.learnedMethods}
                            movesItem={true}
                        >
                            <img src={move.learnedMethod?.src} alt={move.learnedMethod?.name}  /><h3>{toUpperCaseIndex(transformString(move.move.name))}</h3>
                        </InfoBoxItem>
                    )} 
                </InfoBox>
            </div>
        </React.Fragment>
    );
};

export default CardMovesDescription;