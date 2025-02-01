import { Container, Title } from "@/components/shared";
import { Fiilters } from "@/components/shared/Fiilters";
import TopBar from "@/components/shared/top-bar";

export default function Home() {
  return <>
  
    <Container className="mt-10">
        <Title text="Все пиццы" size="lg"  className="font-extrabold"/>
    </Container>
    <TopBar />
    <Container className="pb-14">
      <div className="flex gap-[64px]">
        <div className="w-[250px]">
          {/* Фильтрация */}
          <Fiilters />

        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16"></div>
        </div>
      </div>
    </Container>
  </>
}
