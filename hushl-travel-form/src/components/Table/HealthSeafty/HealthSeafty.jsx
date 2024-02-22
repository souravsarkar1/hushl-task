import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import Popup from '../../Modal/Popup';
import HealthSeaftyUpdate from '../../UpdateData/HealthAndSeafty/HealthSeafty';

const HealthSafetyOnTable = ({ healthSafety, id }) => {
  const {
    lastReviewDate,
    rating,
    comments,
    policyForEvacuation,
    medicalEmergencyPolicy,
    doctorOnSite,
    doctorIsPermanent,
    nurseOnsite,
    nurseIsPermanent,
    onPremiseQualifications,
    defibrillatorsOnProperty,
    defibrillatorsByPool
  } = healthSafety;

  return (
    <Box>
      <Heading as="h3" size="md" mb={2}>
        Health & Safety
      </Heading>
      <Text>Last Review Date: {new Date(lastReviewDate).toLocaleDateString()}</Text>
      <Text>Rating: {rating}</Text>
      <Text>Comments: {comments}</Text>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Policy for Evacuation
      </Heading>
      <UnorderedList>
        {policyForEvacuation.map((policy, index) => (
          <ListItem key={index}> 
          <Popup
            modalTitle={"See Pdf"}
            colorofModal={"blue"}
            children={
              <object
              data={policy.url}
              width="400"
              height="400">
            </object>
            }
          />
         </ListItem>
        ))}
      </UnorderedList>
      <Heading as="h4" size="sm" mt={4} mb={2}>
        Medical Emergency Policy
      </Heading>
      <UnorderedList>
        {medicalEmergencyPolicy.map((policy, index) => (
          <ListItem key={index}>
          <Popup
          modalTitle={"See Pdf"}
          colorofModal={"blue"}
          children={
            <object
            data={policy.url}
            width="400"
            height="400">
          </object>
          }
        />
          </ListItem>
        ))}
      </UnorderedList>
      <Text>Doctor on Site: {doctorOnSite}</Text>
      <Text>Doctor is Permanent: {doctorIsPermanent}</Text>
      <Text>Nurse on Site: {nurseOnsite}</Text>
      <Text>Nurse is Permanent: {nurseIsPermanent}</Text>
      <Text>On Premise Qualifications: {onPremiseQualifications}</Text>
      <Text>Defibrillators on Property: {defibrillatorsOnProperty}</Text>
      <Text>Defibrillators by Pool: {defibrillatorsByPool}</Text>
      <Popup modalTitle={"Edit"} colorofModal={"orange"} children={<HealthSeaftyUpdate healthSafety={healthSafety} id={id} />} />
    </Box>
  );
};

export default HealthSafetyOnTable;
