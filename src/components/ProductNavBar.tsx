import Link from "next/link";

export const ProductNavBar = ({data}: ProductNavbarProps) => {
  const { numberOfPages } = data;
  const arrayOfPaginationElements = [];
  for (let page = 1; page <= numberOfPages; page++) {
    arrayOfPaginationElements.push(page);
  }
  return (
    <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
       <div className="md:-mt-px md:flex">
       {arrayOfPaginationElements.map(pageNumber => {
        return  (
          <Link 
            key={pageNumber}  
            href={`/productList/${pageNumber}`}
            className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
            >{pageNumber}</Link>
        )
      })}
       </div>
    </nav>
  );
}

interface ProductNavbarProps {
  data: ProductList,
}

interface ProductList {
  numberOfPages: number,
}