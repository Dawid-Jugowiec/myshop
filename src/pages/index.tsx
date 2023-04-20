import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductDetails } from '@/components/Product';
import { Main } from '@/components/Main';


const DATA = {
  description: "The Labrador Retriever or simply Labrador is a British breed of retriever gun dog. It was developed in the United Kingdom from fishing dogs imported from the colony of Newfoundland (now a province of Canada), and was named after the Labrador region of that colony. It is among the most commonly kept dogs in several countries, particularly in the Western world.",
  longDescription: "Long description",
  imageUrl: "https://picsum.photos/id/237/200/300",
  imageAlt: "black labrador puppy",
  rating: 4.76,
  title: "Black labrador dog",
  id: 1
};

const HomePage = () => {
  return (
    <Main>
      <ProductDetails data = {DATA} />
    </Main>
  )
};


export default HomePage;
