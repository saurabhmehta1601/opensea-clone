import styled from "styled-components";
import tw from "twin.macro";
import { CollectionCard } from "../components/CollectionCard";
import { getCollections } from "../utils/sanity";

const ExploreCollections = ({ allCollections }) => {

  return (
    <>
      <Heading>explore collections</Heading>

      <CollectionsContainer>
        {allCollections.map((nft) => (
          <CollectionCard key={nft.id} nft={nft} />
        ))}
      </CollectionsContainer>
    </>
  );
};

export default ExploreCollections;

const Heading = styled.div`
  ${tw`text-center text-4xl font-bold uppercase p-12`}
`;

export const getServerSideProps = async () => {
  const allCollections = await getCollections();
  return {
    props: {
      allCollections,
    },
  };
};

const CollectionsContainer = styled.div`
  ${tw`flex p-8 grid grid-cols-1 lg:grid-cols-2`}
`;
