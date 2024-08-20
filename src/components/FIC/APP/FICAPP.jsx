import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DATFIC = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.39.68:4500/8.1b/app/appareil/10', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJJZCI6ImI2NGQ5N2RkLTE4YTAtNDJkMi1hZTNkLWViM2Q5ZDRlYTQ5MCIsInN1YklkIjoiNzYiLCJzdWIiOiJLUCIsImp0aSI6IjFkZGEyODRmLTZjZTQtNGRlMC04NDEzLTk1NGI2YWI2YWM0MCIsIlByb2ZpbEVRTSI6IjYiLCJQcm9maWxMQUIiOiIxMCIsIm5iZiI6MTcxOTQ5ODE1OSwiZXhwIjoyMDE5NTAxNzU5LCJpYXQiOjE3MTk0OTgxNTksImlzcyI6IklOT0tZIiwiYXVkIjoiUVVBTElNUyJ9.TaF3QoT2AooxmPD6l_vXWFCnKDguU0pGiaGymo4_6mg'
          }
        });

        // Vérifiez si la propriété 'contenu' est un objet
        if (response.data.contenu && typeof response.data.contenu === 'object' && !Array.isArray(response.data.contenu)) {
          setData(response.data.contenu);
        } else {
          throw new Error('Les données récupérées ne sont pas un objet');
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h1>Informations sur l'appareil</h1>
    {data && (
    <div>
      <p><strong>ID App Type Etalon:</strong> {data.idappTypeEtalon}</p>
      <p><strong>ID App Statut:</strong> {data.idappStatut}</p>
      <p><strong>ID App Famille:</strong> {data.idappFamille}</p>
      <p><strong>ID App Appareil:</strong> {data.idappAppareil}</p>
      <p><strong>Numéro Appareil:</strong> {data.numeroAppareil}</p>
      <p><strong>Désignation Appareil:</strong> {data.designationAppareil}</p>
      <p><strong>Numéro Série:</strong> {data.numeroSerie}</p>
      <p><strong>Prix:</strong> {data.prix}</p>
      <p><strong>Amortissement:</strong> {data.amortissement}</p>
      <p><strong>Type Amortissement:</strong> {data.typeAmortissement}</p>
      <p><strong>Date Future Operation:</strong> {data.dateFutureOperation ? new Date(data.dateFutureOperation).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Remarque:</strong></p>
      <p><strong>ID Responsable:</strong> {data.idResponsable}</p>
      <p><strong>Période Garantie:</strong> {data.periodeGarantie ? new Date(data.periodeGarantie).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Suivi Automatique:</strong> {data.suiviAutomatique}</p>
      <p><strong>Audit CRE:</strong> {data.auditCRE}</p>
      <p><strong>Audit DCRE:</strong> {data.auditDCRE ? new Date(data.auditDCRE).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Audit MOD:</strong> {data.auditMOD}</p>
      <p><strong>Audit DMOD:</strong> {data.auditDMOD ? new Date(data.auditDMOD).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Numéro Facture:</strong> {data.numeroFacture}</p>
      <p><strong>Date Acquisition:</strong> {data.dateAcquisition ? new Date(data.dateAcquisition).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Marque Appareil:</strong> {data.marqueAppareil}</p>
      <p><strong>Modèle Appareil:</strong> {data.modeleAppareil}</p>
      <p><strong>Type Étiquette:</strong> {data.typeEtiquette}</p>
      <p><strong>ID Env Salle:</strong> {data.idenvSalle}</p>
      <p><strong>Date Dernière Opération:</strong> {data.dateDerniereOperation ? new Date(data.dateDerniereOperation).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Enregistrement Archive:</strong> {data.enrARCHIVE}</p>
      <p><strong>ID Env Service:</strong> {data.idenvService}</p>
      <p><strong>ID App Domaine:</strong> {data.idappDomaine}</p>
      <p><strong>Type Appareil:</strong> {data.typeAppareil}</p>
      <p><strong>ID Indisponibilité:</strong> {data.idIndisponibilite}</p>
      <p><strong>Date Mise En Service:</strong> {data.dateMiseEnService ? new Date(data.dateMiseEnService).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Enregistrement Appareil:</strong> {data.enregistrementAppareil}</p>
      <p><strong>Déclassement:</strong> {data.declassement ? new Date(data.declassement).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Verrou Operation:</strong> {data.verrouOperation}</p>
      <p><strong>Numéro Externe Appareil:</strong> {data.numeroExterneAppareil}</p>
      <p><strong>Date Renouvellement:</strong> {data.dateRenouvellement ? new Date(data.dateRenouvellement).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Budget Renouvellement:</strong> {data.budgetRenouvellement}</p>
      <p><strong>ID App Criticité:</strong> {data.idappCriticite}</p>
      <p><strong>Notification Mail:</strong> {data.notifMail}</p>
      <p><strong>Info Étiquette:</strong> {data.infoEtiquette}</p>
      <p><strong>Date Fin Garantie:</strong> {data.dateFinGarantie ? new Date(data.dateFinGarantie).toLocaleDateString() : 'N/A'}</p>
      <p><strong>Alerte Garantie:</strong> {data.alerteGarantie}</p>
      <p><strong>Propagation Statut Salle:</strong> {data.propagationStatutSalle}</p>
      <p><strong>Champ01:</strong> {data.champ01}</p>
      <p><strong>Champ02:</strong> {data.champ02}</p>
      <p><strong>Champ03:</strong> {data.champ03}</p>
      <p><strong>Champ04:</strong> {data.champ04}</p>
      <p><strong>Champ05:</strong> {data.champ05}</p>
      <p><strong>Destination Appareil:</strong> {data.destinationAppareil}</p>
      <p><strong>Numéro Salle:</strong> {data.numeroSalle}</p>
      <p><strong>Code Service:</strong> {data.codeService}</p>
      <p><strong>ID Client:</strong> {data.idClient}</p>
      <p><strong>Enregistrement Verrou:</strong> {data.enrVerrou}</p>
      <p><strong>Audit Verrou:</strong> {data.auditVERROU}</p>
      <p><strong>Audit D Verrou:</strong> {data.auditDVERROU ? new Date(data.auditDVERROU).toLocaleDateString() : 'N/A'}</p>
      <p><strong>ID App Source Énergie:</strong> {data.idappSourceEnergie}</p>
      <p><strong>ID App Source Prise:</strong> {data.idappSourcePrise}</p>
      <p><strong>Puissance Électrique:</strong> {data.puissanceElectrique}</p>
      <p><strong>Localisation Position:</strong> {data.localisationPosition}</p>
      <p><strong>ID App Type:</strong> {data.idappType}</p>
      <p><strong>Numéro Immo:</strong> {data.numeroImmo}</p>
      <p><strong>Numéro Commande:</strong> {data.numeroCommande}</p>
      <p><strong>Référence:</strong> {data.reference}</p>
      <p><strong>Firmware:</strong> {data.firmware}</p>
      <p><strong>Joker:</strong> {data.joker}</p>
    </div>
    )}
  </div>
);
};

export default DATFIC;
