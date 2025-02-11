import { Container, Title } from "@/components/shared";
import { Fiilters } from "@/components/shared/Fiilters";
import ProductCard from "@/components/shared/product-card";
import ProductsGroupList from "@/components/shared/products-group-list";
import TopBar from "@/components/shared/top-bar";

export default function Home() {
  return <>
  
    <Container className="mt-10">
        <Title text="Все пиццы" size="lg"  className="font-extrabold"/>
    </Container>
    <TopBar />
    <Container className="pb-14 mt-9">
      <div className="flex gap-[64px]">
        <div className="w-[250px]">
          {/* Фильтрация */}
          <Fiilters />

        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16 ">
            <ProductsGroupList title={"Пиццы"} items={[
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
            ]} categoryId={1} />
            <ProductsGroupList title={"Комбо"} items={[
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
              {
                id: 1,
                name: "Сырная",
                imageUrl: "https://media.dodostatic.net/image/r:292x292/11ee7d5f837255b58b25a62c60ffdb38.avif",
                price: 550,
                items: [{ price: 550 }]
              },
            ]} categoryId={2} />
            
          </div>
        </div>
      </div>
    </Container>
  </>
}
