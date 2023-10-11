import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const AutoComplete = () => {
  const anime = [
    {
      label: 'Naruto',
      gentre: 'Action',
    },
    {
      label: 'One Piece',
      gentre: 'Adventure',
    },
    {
      label: 'Attack on Titan',
      gentre: 'Drama',
    },
    {
      label: 'Death Note',
      gentre: 'Thriller',
    },
    {
      label: 'Fullmetal Alchemist: Brotherhood',
      gentre: 'Fantasy',
    },
    {
      label: 'Dragon Ball Z',
      gentre: 'Action',
    },
    {
      label: 'Hunter x Hunter',
      gentre: 'Adventure',
    },
    {
      label: 'Fairy Tail',
      gentre: 'Fantasy',
    },
    {
      label: 'Bleach',
      gentre: 'Action',
    },
    {
      label: 'My Hero Academia',
      gentre: 'Action',
    },
    {
      label: 'Sword Art Online',
      gentre: 'Adventure',
    },
    {
      label: 'Tokyo Ghoul',
      gentre: 'Horror',
    },
    {
      label: 'Steins;Gate',
      gentre: 'Science Fiction',
    },
    {
      label: 'Cowboy Bebop',
      gentre: 'Action',
    },
    {
      label: 'One Punch Man',
      gentre: 'Action',
    },
    {
      label: 'Code Geass',
      gentre: 'Action',
    },
    {
      label: 'Black Clover',
      gentre: 'Action',
    },
    {
      label: 'No Game No Life',
      gentre: 'Adventure',
    },
    {
      label: 'Demon Slayer',
      gentre: 'Action',
    },
    {
      label: 'Fate/stay night',
      gentre: 'Fantasy',
    },
    {
      label: "JoJo's Bizarre Adventure",
      gentre: 'Action',
    },
    {
      label: 'Nanatsu no Taizai',
      gentre: 'Action',
    },
    {
      label: 'Haikyuu!!',
      gentre: 'Sports',
    },
    {
      label: 'Gintama',
      gentre: 'Comedy',
    },
    {
      label: 'Magi: The Labyrinth of Magic',
      gentre: 'Adventure',
    },
    {
      label: 'Re:Zero',
      gentre: 'Fantasy',
    },
    {
      label: 'Kuroko no Basket',
      gentre: 'Sports',
    },
    {
      label: 'Mob Psycho 100',
      gentre: 'Action',
    },
    {
      label: 'Noragami',
      gentre: 'Action',
    },
    {
      label: 'The Seven Deadly Sins',
      gentre: 'Action',
    },
    {
      label: 'Overlord',
      gentre: 'Fantasy',
    },
    {
      label: 'Assassination Classroom',
      gentre: 'Action',
    },
    {
      label: 'Shingeki no Kyojin',
      gentre: 'Drama',
    },
    {
      label: 'Tokyo Revengers',
      gentre: 'Action',
    },
    {
      label: 'Jujutsu Kaisen',
      gentre: 'Action',
    },
    {
      label: 'Dragon Ball',
      gentre: 'Action',
    },
    {
      label: 'Naruto Shippuden',
      gentre: 'Action',
    },
    {
      label: 'Fairy Tail (2014)',
      gentre: 'Fantasy',
    },
    {
      label: 'Dragon Ball Super',
      gentre: 'Action',
    },
    {
      label: 'Black Clover (TV)',
      gentre: 'Action',
    },
    {
      label: 'Boku no Hero Academia',
      gentre: 'Action',
    },
    {
      label: 'Boruto: Naruto Next Generations',
      gentre: 'Action',
    },
    {
      label: 'One Piece',
      gentre: 'Action',
    },
    {
      label: 'Bleach',
      gentre: 'Action',
    },
    {
      label: 'Nanatsu no Taizai',
      gentre: 'Action',
    },
    {
      label: 'Hunter x Hunter (2011)',
      gentre: 'Action',
    },
    {
      label: 'Tokyo Ghoul',
      gentre: 'Action',
    },
    {
      label: 'Fairy Tail',
      gentre: 'Action',
    },
    {
      label: 'Noragami',
      gentre: 'Action',
    },
  ];

  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={anime}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </>
  );
};

export default AutoComplete;
