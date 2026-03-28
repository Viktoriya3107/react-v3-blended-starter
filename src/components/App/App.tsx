import Section from "../Section/Section";
import Container from "../Container/Container";
import { getPhotos } from "../../services/photos";
import { useState } from "react";
import { Photo } from "../../types/photo";

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>();
  const [isLoading, setIsLoading] = useState(falce);
  const [isError, setIsError] = useState(falce);
 
  const handelSubmit = async (query: string) => {

    const fetchPhotos = await getPhotos(query); 
    
  }
  return (
    <>
      <Section>
        <Container> <Form onSubmit={handelSubmit} />
      </Container>
      </Section>
    </>
  );
}
