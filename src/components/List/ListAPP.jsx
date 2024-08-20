import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ListAPP.css';
import { useNavigate } from 'react-router-dom';
import { Stack, Pagination, TextField  } from '@mui/material'; 

const DataList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Page actuelle
  const [itemsPerPage] = useState(100); // Nombre d'éléments par page
  const [searchTerm, setSearchTerm] = useState(''); // Valeur de la recherche
  const navigate = useNavigate();

  // Filtre de recherche
  const filteredData = data.filter(item =>
    item.numeroAppareil.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.designationAppareil.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Trie par le numéroAppareil
  const sortedFilteredData = [...filteredData].sort((a, b) => {
    return a.numeroAppareil.localeCompare(b.numeroAppareil);
  });


  // Calcul le nombre de pages
  const totalPages = Math.ceil(sortedFilteredData.length / itemsPerPage);

  // Déterminer les données à afficher pour la page actuelle
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedFilteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleClick = (numeroAppareil) => {
    navigate(`/appareils/${numeroAppareil}`);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); 
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.39.68:4500/8.1b/app/appareil/vis', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJJZCI6ImI2NGQ5N2RkLTE4YTAtNDJkMi1hZTNkLWViM2Q5ZDRlYTQ5MCIsInN1YklkIjoiNzYiLCJzdWIiOiJLUCIsImp0aSI6IjFkZGEyODRmLTZjZTQtNGRlMC04NDEzLTk1NGI2YWI2YWM0MCIsIlByb2ZpbEVRTSI6IjYiLCJQcm9maWxMQUIiOiIxMCIsIm5iZiI6MTcxOTQ5ODE1OSwiZXhwIjoyMDE5NTAxNzU5LCJpYXQiOjE3MTk0OTgxNTksImlzcyI6IklOT0tZIiwiYXVkIjoiUVVBTElNUyJ9.TaF3QoT2AooxmPD6l_vXWFCnKDguU0pGiaGymo4_6mg'
          }
        });
        if (Array.isArray(response.data.contenu)) {
          setData(response.data.contenu);
        } else {
          throw new Error('Les données récupérées ne sont pas un tableau');
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error.message}</div>;
  }

  return (
    <div>
      <ul className='list'>
      <TextField
        label="Rechercher"
        variant="outlined"
        value={searchTerm}
        onChange={handleSearchChange}
        className='search-bar'
        margin="normal"
      />
        {currentItems.map((item) => (
          <button key={item.idappAppareil} onClick={() => handleClick(item.numeroAppareil)} className='list-item-button' type="button">
            <input type="image" src={require(`../../assets/Images/APP_Statut${item.idappStatut}-128-1.png`)} alt={`Image of ${item.idappStatut}`} className="item-image" />
            <div className='contenu'>
              <p className='numeroappareil'>{item.numeroAppareil}</p>
              <p className='designationappareil'>{item.designationAppareil}</p>
            </div>
          </button>
        ))}
      </ul>
      <Stack spacing={2} className='pagination' sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30px'
       }}>
        <Pagination 
        count={totalPages} page={currentPage} shape="rounded" color="EQM"  onChange={handlePageChange} />
      </Stack>
    </div>
  );
};

export default DataList;
