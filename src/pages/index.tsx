import tw from "twin.macro";
import styled from "styled-components";

export default function Home() {
  return <Heading>Nextjs App</Heading>;
}

const Heading = styled.h1`
  ${tw`text-3xl text-blue-700`}
`;
