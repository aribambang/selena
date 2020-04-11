import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Institut Teknologi Sumatera',
    description:
      'Institut Teknologi Sumatera adalah sebuah perguruan tinggi negeri yang terdapat di Provinsi Lampung.',
    imageUrl:
      'https://cdn2.tstatic.net/lampung/foto/bank/images/danau-itera_20180528_192559.jpg',
    address:
      'Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung',
    location: { lat: -5.3582643, lng: 105.3148495 },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Institut Teknologi Sumatera',
    description:
      'Institut Teknologi Sumatera adalah sebuah perguruan tinggi negeri yang terdapat di Provinsi Lampung.',
    imageUrl:
      'https://cdn2.tstatic.net/lampung/foto/bank/images/danau-itera_20180528_192559.jpg',
    address:
      'Jl. Terusan Ryacudu, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung',
    location: { lat: -5.3582643, lng: 105.3148495 },
    creator: 'u2'
  }
];
const UserPlaces = props => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
